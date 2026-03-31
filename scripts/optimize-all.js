const ffmpegPath = require('ffmpeg-static');
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

ffmpeg.setFfmpegPath(ffmpegPath);

const videosToProcess = [
    {
        input: 'vsl-nuevo.mp4',
        output: 'vsl.mp4',
        poster: 'vsl-poster.jpg',
        bitrate: '800k',
        isMain: true
    },
    {
        input: 'testimonio1.mp4',
        output: 'testimonial-1-optimized.mp4',
        poster: 'testimonial-1-poster.jpg',
        bitrate: '1000k'
    },
    {
        input: 'testimonio2.mp4',
        output: 'testimonial-2-optimized.mp4',
        poster: 'testimonial-2-poster.jpg',
        bitrate: '1000k'
    },
    {
        input: 'testimonio3.mp4',
        output: 'testimonial-3-optimized.mp4',
        poster: 'testimonial-3-poster.jpg',
        bitrate: '1000k'
    }
];

async function processVideo(video) {
    const inputPath = path.join(__dirname, '..', 'public', 'videos', video.input);
    const outputPath = path.join(__dirname, '..', 'public', 'videos', video.output);
    const posterFolder = path.join(__dirname, '..', 'public');

    console.log(`\n--- Procesando: ${video.input} ---`);
    
    return new Promise((resolve, reject) => {
        // 1. Extraer miniatura
        ffmpeg(inputPath)
            .screenshots({
                timestamps: ['00:00:02'],
                filename: video.poster,
                folder: posterFolder,
                size: '1280x720'
            })
            .on('end', () => {
                console.log(`✅ Miniatura extraída: ${video.poster}`);
            });

        // 2. Comprimir video
        ffmpeg(inputPath)
            .videoCodec('libx264')
            .audioCodec('aac')
            .size('1280x720')
            .videoBitrate(video.bitrate)
            .outputOptions(['-preset faster', '-pix_fmt yuv420p'])
            .on('progress', (progress) => {
                const p = progress.percent ? Math.round(progress.percent) : '?';
                process.stdout.write(`\r⏳ Progreso ${video.input}: ${p}% completado`);
            })
            .on('error', (err) => {
                console.error(`\n❌ Error en ${video.input}:`, err.message);
                reject(err);
            })
            .on('end', () => {
                console.log(`\n✅ Video completado: ${video.output}`);
                resolve();
            })
            .save(outputPath);
    });
}

async function run() {
    for (const video of videosToProcess) {
        try {
            await processVideo(video);
        } catch (e) {
            console.error('Continuando con el siguiente...');
        }
    }
    console.log('\n✨ ¡TODO EL PROCESO HA FINALIZADO EXITOSAMENTE!');
}

run();

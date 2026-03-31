const ffmpegPath = require('ffmpeg-static');
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');

ffmpeg.setFfmpegPath(ffmpegPath);

const videosToProcess = [
    {
        input: 'vsl-nuevo.mp4',
        output: 'vsl.mp4',
        poster: 'vsl-poster.jpg',
        bitrate: '500k'
    }
];

async function processVideo(video) {
    const inputPath = path.join(__dirname, '..', 'public', 'videos', video.input);
    const outputPath = path.join(__dirname, '..', 'public', 'videos', video.output);
    const posterFolder = path.join(__dirname, '..', 'public');

    console.log(`\n--- Re-Optimizando: ${video.input} a 500k ---`);
    
    return new Promise((resolve, reject) => {
        ffmpeg(inputPath)
            .videoCodec('libx264')
            .audioCodec('aac')
            .size('1280x720')
            .videoBitrate(video.bitrate)
            .outputOptions(['-preset slower', '-pix_fmt yuv420p'])
            .on('progress', (progress) => {
                const p = progress.percent ? Math.round(progress.percent) : '?';
                process.stdout.write(`\r⏳ Progreso ${video.input}: ${p}% completado`);
            })
            .on('error', (err) => {
                console.error(`\n❌ Error:`, err.message);
                reject(err);
            })
            .on('end', () => {
                console.log(`\n✅ VSL Final Completado: ${video.output}`);
                resolve();
            })
            .save(outputPath);
    });
}

processVideo(videosToProcess[0]);

const ffmpegPath = require('ffmpeg-static');
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

ffmpeg.setFfmpegPath(ffmpegPath);

const imagesToOptimize = [
    { name: 'mentor.jpg', targetWidth: 800, quality: 80 },
    { name: 'roadmap-mockup.png', targetWidth: 600, quality: 85 },
    { name: 'bonus-masterclass.png', targetWidth: 600, quality: 85 },
    { name: 'vsl-poster.jpg', targetWidth: 1280, quality: 75 },
    { name: 'testimonial-1-poster.jpg', targetWidth: 400, quality: 75 },
    { name: 'testimonial-2-poster.jpg', targetWidth: 400, quality: 75 },
    { name: 'testimonial-3-poster.jpg', targetWidth: 400, quality: 75 }
];

async function optimizeImage(img) {
    const inputPath = path.join(__dirname, '..', 'public', img.name);
    const tempPath = path.join(__dirname, '..', 'public', `temp_${img.name}`);

    console.log(`\n--- Optimizando: ${img.name} ---`);
    
    return new Promise((resolve, reject) => {
        ffmpeg(inputPath)
            .size(`${img.targetWidth}x?`)
            .outputOptions([
                `-q:v ${Math.floor((100 - img.quality) / 5)}`, // Convertir calidad a ffmpeg qscale (aprox)
            ])
            .on('error', (err) => {
                console.error(`❌ Error en ${img.name}:`, err.message);
                reject(err);
            })
            .on('end', () => {
                // Reemplazar original con temp
                fs.renameSync(tempPath, inputPath);
                const stats = fs.statSync(inputPath);
                console.log(`✅ OK: ${(stats.size / 1024).toFixed(0)} KB`);
                resolve();
            })
            .save(tempPath);
    });
}

async function run() {
    for (const img of imagesToOptimize) {
        if (fs.existsSync(path.join(__dirname, '..', 'public', img.name))) {
            try {
                await optimizeImage(img);
            } catch (e) {
                console.error(`Omitiendo ${img.name}...`);
            }
        }
    }
    console.log('\n✨ ¡IMÁGENES OPTIMIZADAS EXITOSAMENTE!');
}

run();

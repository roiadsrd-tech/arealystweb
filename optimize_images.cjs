const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/assets');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(file => {
        const ext = path.extname(file).toLowerCase();
        if (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.avif') {
            const filePath = path.join(directoryPath, file);
            const tempPath = path.join(directoryPath, 'temp_' + file);

            sharp(filePath)
                .resize(1920, 1920, {
                    fit: sharp.fit.inside,
                    withoutEnlargement: true
                })
                .jpeg({ quality: 80, progressive: true, force: false })
                .png({ quality: 80, force: false })
                .toFile(tempPath, (err, info) => {
                    if (err) {
                        console.error('Error processing file', file, err);
                    } else {
                        fs.rename(tempPath, filePath, () => {
                            console.log(`Optimized ${file} - new size: ${info.size} bytes`);
                        });
                    }
                });
        }
    });
});

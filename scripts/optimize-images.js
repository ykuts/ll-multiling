const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const publicDir = path.join(__dirname, '../public');
const imagePatterns = ['**/*.{jpg,jpeg,png}'];

async function optimizeImages() {
  console.log('🖼️  Начинаем оптимизацию изображений...');
  
  for (const pattern of imagePatterns) {
    const imagePaths = await glob(pattern, { cwd: publicDir });
    
    for (const imagePath of imagePaths) {
      const fullPath = path.join(publicDir, imagePath);
      const ext = path.extname(imagePath).toLowerCase();
      
      try {
        const stats = fs.statSync(fullPath);
        const originalSize = stats.size;
        
        if (originalSize < 50000) { // Пропускаем файлы меньше 50KB
          console.log(`⏭️  Пропускаем ${imagePath} (уже оптимизирован)`);
          continue;
        }
        
        let optimized;
        
        if (ext === '.png') {
          optimized = sharp(fullPath)
            .png({ 
              quality: 85,
              compressionLevel: 8,
              palette: true
            });
        } else {
          optimized = sharp(fullPath)
            .jpeg({ 
              quality: 85,
              progressive: true,
              mozjpeg: true
            });
        }
        
        // Создаем WebP версию для современных браузеров
        const webpPath = fullPath.replace(ext, '.webp');
        await sharp(fullPath)
          .webp({ quality: 85 })
          .toFile(webpPath);
        
        // Оптимизируем оригинал
        await optimized.toFile(fullPath + '.tmp');
        
        // Заменяем оригинал
        fs.renameSync(fullPath + '.tmp', fullPath);
        
        const newStats = fs.statSync(fullPath);
        const newSize = newStats.size;
        const savedBytes = originalSize - newSize;
        const savedPercent = Math.round((savedBytes / originalSize) * 100);
        
        console.log(`✅ ${imagePath}: ${Math.round(originalSize/1024)}KB → ${Math.round(newSize/1024)}KB (сохранено ${savedPercent}%)`);
        
      } catch (error) {
        console.error(`❌ Ошибка при обработке ${imagePath}:`, error.message);
      }
    }
  }
  
  console.log('🎉 Оптимизация завершена!');
}

optimizeImages();
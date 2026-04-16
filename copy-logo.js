const fs = require('fs');
const path = require('path');

const source = 'C:\\Users\\verth\\.gemini\\antigravity\\brain\\4161aa9a-d4c2-442a-8345-a4f553b91f5b\\media__1776332168272.jpg';
const destDir = path.join(__dirname, 'public');
const dest = path.join(destDir, 'logo.png');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir);
}

fs.copyFileSync(source, dest);
console.log('Logo successfully copied and placed next to the NEXUM text! Check your browser!');

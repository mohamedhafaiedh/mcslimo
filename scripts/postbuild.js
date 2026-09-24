const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walk(filePath, fileList);
    } else if (file.endsWith('.html') || file.endsWith('.rsc')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const targetDir = path.join(__dirname, '..', '.next');
const files = walk(targetDir);
let modifiedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('hrefLang=')) {
    content = content.replace(/hrefLang=/g, 'hreflang=');
    fs.writeFileSync(file, content, 'utf8');
    modifiedCount++;
  }
}

console.log(`[postbuild] Normalized hreflang attribute in ${modifiedCount} files.`);

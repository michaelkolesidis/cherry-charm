const fs = require('fs');
const path = require('path');

const packagePath = path.join(__dirname, '..', 'package.json');
const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));

const now = new Date();
const year = now.getFullYear();
const month = `${now.getMonth() + 1}`.padStart(2, '0');
const day = `${now.getDate()}`.padStart(2, '0');
const today = `${year}.${month}.${day}`;

// Store commit counts in a hidden JSON file
const countPath = path.join(__dirname, '.version-count.json');
let versionCount = {};

if (fs.existsSync(countPath)) {
  versionCount = JSON.parse(fs.readFileSync(countPath, 'utf-8'));
}

versionCount[today] = (versionCount[today] || 0) + 1;
fs.writeFileSync(countPath, JSON.stringify(versionCount, null, 2));

const newVersion = `${today}.${versionCount[today]}`;
pkg.version = newVersion;

fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));
console.log(`✅ Updated version to ${newVersion}`);

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packagePath = path.join(__dirname, '..', 'package.json');
const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));

// Get today's date in YYYY.MM.DD format
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const today = `${year}.${month}.${day}`;

// Parse current version
const currentVersion = pkg.version || '';
const versionParts = currentVersion.split('.');

let newVersion;

if (currentVersion.startsWith(today)) {
  // e.g., 2025.07.09.2 → increment final part
  const last = parseInt(versionParts[3] || '1', 10) + 1;
  newVersion = `${today}.${last}`;
} else {
  // New date → start at .1
  newVersion = `${today}.1`;
}

pkg.version = newVersion;
fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));

// Stage the change
execSync('git add package.json');
console.log(`✅ Updated version to ${newVersion}`);

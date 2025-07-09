const fs = require('fs');
const path = require('path');

const packagePath = path.join(__dirname, '..', 'package.json');
const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));

// Get current date parts with zero-padding
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const today = `${year}${month}${day}`; // yyyymmdd format, no dots

// Parse current version from package.json
const currentVersion = pkg.version || '';
// Extract date part and count part from current version (expects yyyymmdd.N)
const match = currentVersion.match(/^(\d{8})\.(\d+)$/);
let currentDatePart = '';
let currentCount = 0;

if (match) {
  currentDatePart = match[1];
  currentCount = parseInt(match[2], 10);
}

// Calculate new count: increment if same date, else start at 1
const newCount = currentDatePart === today ? currentCount + 1 : 1;

// Compose new version string with one dot before the count
const newVersion = `${today}.${newCount}`;

// Update package.json version
pkg.version = newVersion;
fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));

console.log(`✅ Updated version to ${newVersion}`);

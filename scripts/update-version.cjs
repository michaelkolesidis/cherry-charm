const fs = require('fs');
const path = require('path');

const packagePath = path.join(__dirname, '..', 'package.json');
const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));

// Get current date parts with zero-padding
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const monthDay = `${month}${day}`; // MMDD combined
const today = `${year}.${monthDay}`; // YYYY.MMDD

// Parse current version from package.json
const currentVersion = pkg.version || '';
// Extract date part and count part from current version (expects YYYY.MMDD.N)
const match = currentVersion.match(/^(\d{4})\.(\d{4})\.(\d+)$/);
let currentDatePart = '';
let currentCount = 0;

if (match) {
  currentDatePart = `${match[1]}.${match[2]}`;
  currentCount = parseInt(match[3], 10);
}

// Calculate new count: increment if same date, else start at 1
const newCount = currentDatePart === today ? currentCount + 1 : 1;

// Compose new version string with dots in correct places
const newVersion = `${today}.${newCount}`;

// Update package.json version
pkg.version = newVersion;
fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));

console.log(`✅ Updated version to ${newVersion}`);

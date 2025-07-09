const fs = require('fs');
const path = require('path');

const packagePath = path.join(__dirname, '..', 'package.json');
const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));

// Get current date parts with zero-padding
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const today = `${year}.${month}.${day}`;

// Parse current version from package.json
const currentVersion = pkg.version || '';
const versionParts = currentVersion.split('.');

// Extract date part and count part from current version
const currentDatePart = versionParts.slice(0, 3).join('.');
const currentCount = parseInt(versionParts[3], 10) || 0;

// Calculate new count: if same day increment, else start from 1
const newCount = currentDatePart === today ? currentCount + 1 : 1;

// Compose new version string
const newVersion = `${today}.${newCount}`;

// Update package.json version
pkg.version = newVersion;
fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));

console.log(`✅ Updated version to ${newVersion}`);

const fs = require('fs');
const path = require('path');

const packagePath = path.join(__dirname, '..', 'package.json');
const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();

const today = `${year}.${month}.${day}`;

// Parse current version from package.json
const currentVersion = pkg.version || '';
// Match version format: YYYY.M.D.N
const match = currentVersion.match(/^(\d{4})\.(\d{1,2})\.(\d{1,2})\.(\d+)$/);

let currentDatePart = '';
let currentCount = 0;

if (match) {
  currentDatePart = `${match[1]}.${parseInt(match[2], 10)}.${parseInt(
    match[3],
    10
  )}`;
  currentCount = parseInt(match[4], 10);
}

// Increment count if date matches today, else reset to 1
const newCount = currentDatePart === today ? currentCount + 1 : 1;

const newVersion = `${today}.${newCount}`;

pkg.version = newVersion;
fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));

console.log(`✅ Updated version to ${newVersion}`);

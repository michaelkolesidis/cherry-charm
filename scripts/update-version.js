import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packagePath = path.resolve(__dirname, '..', 'package.json');

const pkgRaw = fs.readFileSync(packagePath, 'utf-8');
const pkg = JSON.parse(pkgRaw);

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();

const today = `${year}.${month}.${day}`;

// Parse current version from package.json
const currentVersion = pkg.version || '';
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

const newCount = currentDatePart === today ? currentCount + 1 : 1;

const newVersion = `${today}.${newCount}`;

pkg.version = newVersion;
fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));

// Stage it so it's part of the commit
execSync('git add package.json');

console.log(`✅ Updated version to ${newVersion}`);

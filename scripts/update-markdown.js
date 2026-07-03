import fs from 'fs';

const readme = fs.readFileSync('README.md', 'utf8');

const currentYear = new Date().getFullYear();
const numberOfYears = currentYear - 2019;

const replacement = `<!-- Begin_dynamic -->${numberOfYears}+ years<!-- End_dynamic -->`;

const updated = readme.replace(
  /<!-- Begin_dynamic -->[\s\S]*<!-- End_dynamic -->/,
  replacement,
);

fs.writeFileSync('README.md', updated);

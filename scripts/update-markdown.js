import fs from 'fs';

const readme = fs.readFileSync('README.md', 'utf8');

const currentYear = new Date().getFullYear();
const numberOfYears = currentYear - 2019;

const replacement = `<p>${numberOfYears}+ years</p>`;

const updated = readme.replace(/<p>[\s\S]*<\/p>/, replacement);

fs.writeFileSync('README.md', updated);

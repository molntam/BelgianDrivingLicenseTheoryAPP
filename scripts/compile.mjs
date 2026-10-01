import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const course=JSON.parse(fs.readFileSync(path.join(root,'dist/course-content.json'),'utf8'));
const questions=JSON.parse(fs.readFileSync(path.join(root,'dist/questions.json'),'utf8'));
const assets=JSON.parse(fs.readFileSync(path.join(root,'dist/assets/credits.json'),'utf8'));
fs.writeFileSync(path.join(root,'dist/course.js'),`window.DRIVE_COURSE=${JSON.stringify(course)};\nwindow.DRIVE_QUESTIONS=${JSON.stringify(questions)};\nwindow.DRIVE_ASSETS=${JSON.stringify(assets)};\n`);
console.log(`Compiled ${course.lessons.length} lessons, ${questions.length} questions, ${assets.length} image credits.`);

import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const ctx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'dist/course.js'),'utf8'),ctx);
const c=ctx.window.DRIVE_COURSE,q=ctx.window.DRIVE_QUESTIONS,a=ctx.window.DRIVE_ASSETS;
assert.equal(c.lessons.length,31);assert.equal(c.chapters.length,9);assert.ok(q.length>=100);
assert.equal(new Set(q.map(x=>x.id)).size,q.length);
assert.deepEqual(JSON.parse(JSON.stringify(c.chapters.flatMap(x=>x.lessons).sort((a,b)=>a-b))),Array.from({length:31},(_,i)=>i+1));
for(const l of c.lessons){assert.equal(l.cards.length,3);assert.ok(q.filter(x=>x.lesson===l.id).length>=3);for(const card of l.cards){assert.ok(card.title&&card.intro&&card.remember);assert.equal(card.facts.length,3);if(card.image)assert.ok(a.some(x=>x.file===card.image));}}
for(const x of q){assert.ok(c.lessons.some(l=>l.id===x.lesson));assert.equal(x.options.length,3);assert.equal(x.nlOptions.length,3);assert.ok(x.nl&&x.explanation);assert.ok(x.answer>=0&&x.answer<3);if(x.image)assert.ok(a.some(y=>y.file===x.image));}
const used=new Set([...c.chapters.map(x=>x.image),...c.lessons.flatMap(l=>l.cards.map(x=>x.image)),...q.map(x=>x.image)].filter(Boolean));
for(const x of a)assert.ok(fs.existsSync(path.join(root,'dist/assets',x.file)));
for(const f of ['app.js','course.js'])new vm.Script(fs.readFileSync(path.join(root,'dist',f),'utf8'));
console.log(`Content integrity passed: 31 lessons, 93 cards, ${q.length} bilingual questions, ${used.size} used images, all references resolve.`);

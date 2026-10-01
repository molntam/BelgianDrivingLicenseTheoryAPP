# Drive B — Belgian Theory Companion

A personal, visual learning platform for the Belgian category B theory exam, tailored to a Flemish exam near Turnhout / Geel.

- 31 lessons in 9 sections, based on all 239 pages of `source/SourceBook.pdf`.
- 93 short study cards, memory cues, optional detail and recall checks.
- 35 extracted book images with PDF-page credits.
- 105 original English questions with Dutch audio scripts and explanations.
- English quizzes by section, adjustable quiz length, and a review list for missed questions.
- A 50-question Flemish simulation: Dutch screen, Dutch then English audio, 15 seconds after narration, 41/50 threshold, and weighted penalties.
- Selectable 5–20 minute study sessions, focus mode, keyboard answer shortcuts and reduced-motion support.
- Browser-local progress and lesson position, plus JSON backup export/import. No database, API key or server application.

## Run locally

```sh
npm start
```

Open `http://localhost:3000`. This is a buildless static site; no dependency installation is needed. Any static host can serve `dist/`.

## Check content

```sh
npm run check
```

Authoring scripts in `scripts/` produce the lesson and question JSON. After editing them:

```sh
python3 scripts/author-course.py
python3 scripts/author-questions.py
node scripts/compile.mjs
npm run check
```

The final checked data is also committed in `dist/`. Update the authoring scripts together with the generated content so future compilation preserves corrections.

## Sources and limits

Rules were checked on **1 October 2026** against the current consolidated road code, Flemish government guidance and Autoveiligheid. See `docs/research.md`, `docs/sourcebook-map.md` and the site's **Book & sources** view.

The SourceBook's PDF metadata dates to August 2022. The new road code is scheduled for **1 June 2027**; this version teaches the rules currently in force and does not automatically refresh them. Check official sources again before an exam after that date.

The simulator uses original practice questions and device-provided speech synthesis, not official recordings or the official exam bank. Browser language voices must be available. Its sound test and timed text fallback make the limitation visible. The real translated exam keeps written questions in Dutch and reads Dutch before the chosen translation. English study quizzes deliberately show English.

Progress is saved under `drive-b-progress-v1` in localStorage on the current origin. Clearing site data removes it; export a backup to transfer it. An unfinished quiz is not saved as a completed result.

## Validation

Content integrity checks validate the 31 lessons, all 93 cards, bilingual options, correct-answer indices, unique question IDs and all local image references. Browser checks covered lesson retry/completion/reload, the session slider, quizzes and mistake review, all 31 lesson routes, 50-question scoring, mobile navigation and overflow. Controlled speech tests verified Dutch→English sequencing, delayed timer start, timeout handling and text fallback. Actual voice sound depends on the device and needs the built-in sound test.

The optional WebMCP navigation/progress tools are feature-detected. This environment had no native WebMCP browser implementation, so native registration validation was unavailable; ordinary browser study functions do not depend on it.

# SourceBook map

- Source: `/workspace/BelgianDrivingLicenseTheoryAPP/source/SourceBook.pdf`.
- 239 PDF pages; English; 31 lessons across nine parts.
- PDF metadata: created and modified **27 August 2022**; author field Rajesh Kylasam; Word for Microsoft 365. This is a document timestamp, not a verified publisher edition date.
- Most pages are screenshots embedded into a Word-generated PDF. Normal PDF text contains lesson headings only. `/workspace/sourcebook.txt` contains the native headings plus Tesseract OCR of every main embedded page image, separated by `===== PAGE n =====` (1-based PDF numbering). OCR can misread digits, punctuation, and signs; inspect the source image for critical values.
- Screenshots visibly refer to gratisrijbewijsonline.be and derijprof.be. Their branding was excluded from the extracted cropped visuals.

## Lesson coverage

| Part | Lesson | Pages | Topics |
| --- | --- | --- | --- |
| A: Public road | 1. Public road and carriageway | 1–8 | Public/private areas, road anatomy, carriageway, road positioning, warning signs |
| A | 2. Lanes | 9–17 | Lane markings, arrows, zipper merging, bus lanes, traffic islands, roadworks |
| A | 3. Bicycle lane | 18–25 | Mandatory paths, shared paths, cycle crossings, suggested cycle lanes, cycle streets |
| A | 4. Motorway | 26–37 | Access, speed, hard shoulder, rescue corridor, wrong-way drivers, overtaking, interchange |
| A | 5. Express roads and regular roads | 38–43 | Road classifications, central reservations, lanes and speed |
| A | 6. Special places | 44–56 | Built-up areas, residential areas, play/school/cycle streets, zones, speed offences |
| B: Road users | 7. Pedestrians | 57–62 | Pedestrians, pavements, zebra crossings, crossing safety, pedestrian zones |
| B | 8. Drivers | 63–65 | Driver categories, vehicles, riders, prohibitory signs |
| C: Car | 9. M.A.W. and M.G.W. | 66–72 | Licence B vehicles, mass limits, compulsory car equipment, documents, trailers |
| C | 10. Load and passenger seat | 73–79 | Load dimensions, trailers, passengers, seat belts, child restraints |
| C | 11. Lights and horn | 80–85 | Headlights, fog lights, hazard lights, indicators, tunnel lighting, horn |
| D: Speed | 12. Speed | 86–97 | Motorway/ordinary road speed, regional defaults, zones and special streets |
| D | 13. Stopping distance | 98–101 | Safety distance, reaction time, braking distance, wet roads, ABS |
| E: Passing/overtaking | 14. Crossing | 102–107 | Passing oncoming traffic, narrow roads, priority signs, obstacles |
| E | 15. Overtaking on the left | 108–114 | Overtaking checks, cyclist/pedestrian lateral clearance, traffic flow exceptions |
| E | 16. Overtaking prohibited | 115–123 | Markings, signs, junctions, crossings, level crossings, hills, bends |
| F: Priority | 17. Authorized person | 124–128 | Police signals, road supervisors, emergency vehicles, 112, order of authority |
| F | 18. Traffic lights | 129–139 | Red/amber/green, arrows, lane signals, rail crossings, pedestrian/cycle lights |
| F | 19. Crossing and traffic | 140–152 | Priority roads, give-way, shark teeth, stop lines/signs, roundabouts |
| F | 20. Priority from the right | 153–160 | General rule, stopped vehicles, signs, paths, trams, forbidden direction |
| F | 21. Priority when turning off | 161–163 | Manoeuvres, positioning, left/right turns, pedestrians/cyclists on same road |
| F | 22. Train, tram, bus | 164–173 | Level crossings, reserved tracks/lanes, tram priority, bus stops and departure |
| G: Road position | 23. Prohibited direction | 174–179 | No entry, restrictions, local traffic, mass limits, turns |
| G | 24. Obligatory direction | 180–182 | Mandatory direction signs, passing obstacles, cyclist/moped exceptions |
| H: Waiting/parking | 25. Part 1 | 183–194 | Waiting versus parking, placement, prohibited locations, crossings, intersections |
| H | 26. Part 2 | 195–203 | Parking-only prohibitions, driveways, narrow roads, yellow lines, disability spaces, signs |
| H | 27. Part 3 | 204–210 | Blue zones, parking discs, time limits, parking signs, safely exiting car |
| I: Miscellaneous | 28. Alcohol and drugs | 211–214 | Breath testing, alcohol thresholds, refusal, driving bans, blood testing |
| I | 29. Accidents and casualties | 215–224 | Securing scene, warning triangle, collision form, injuries, 112, tunnels, fitness |
| I | 30. Energy use | 225–230 | Efficient driving, tyres, roof loads, fuel, air conditioning, low-emission zones |
| I | 31. Tyres, brakes, ABS, ESP | 231–239 | Tread/pressure, winter tyres, wheel changes, brakes, ABS/ESP, alternator, gear changing |

## Factual visual assets

`/workspace/pdf-assets` contains **35 clean WebP crops**, `metadata.json`, and `montage.jpg`. Metadata maps every filename to its source page, descriptive label, image kind, dimensions, and source crop rectangle. No entire text-heavy page is included.

Best wide photographs for a lead card:
- `motorway-exit.webp` — p15, 745×268. Distinct road perspective and hatched exit area.
- `temporary-road-markings.webp` — p15, 745×249. Clear motorway photograph; orange/yellow temporary markings are visible.
- `road-anatomy.webp` — p3, 638×176. Wide road photograph with yellow explanatory arrows.

Strong study diagrams:
- `priority-from-right.webp`, `priority-from-right-turning.webp` — p153.
- `priority-road-junction.webp` — p140.
- `zipper-merge.webp` — p12.
- `rescue-corridor.webp` — p32.
- `passing-cyclist.webp` — p110 (the illustrated 1.5 metre spacing is the outside-built-up example).

Additional crops cover signs, children/cyclists, school zones, tunnels, level crossings, bus stops, parking, blue zones/discs, warning triangles, a reflective vest, and an alcohol breathalyser. Native screenshot resolution is modest; many photographs are around 294×220. Do not enlarge small sign crops into a hero image.

## Date and accuracy cautions

This is a 2022 reference, so label its provenance and validate current regional exam rules and any changed legal requirements against official sources before making current claims.

- **Internal speed-table inconsistency:** p45 and p91 explicitly give built-up defaults of 50 km/h in Flanders and Wallonia, 30 km/h in Brussels. The p53 sign summary states only 50 km/h. Use the regional explanation rather than that summary.
- **Cycle-street terminology/signs:** p23 describes “bicycle street / fietsstraat / rue cyclable” and says the street ends at the next junction, while a marked zone ends at its end sign. This is old terminology and needs verification against subsequent Belgian cycle-zone changes before using as a current quiz answer.
- **Alcohol/drugs:** pp211–214 discuss 0.22/0.35 mg/l breath thresholds and short driving bans; this chapter focuses primarily on alcohol. Current enforcement, penalties, professional-driver thresholds, and drug-driving specifics need official verification.
- **Licences and sanctions:** p5 contains provisional-licence night/weekend restrictions; p53/p94 discuss immediate licence suspension and court disqualification. These depend on legal version and licence category and need current verification.
- **Exam mechanics:** this book does not provide a reliable complete account of today’s region-specific theory-exam pass marks, severe-fault scoring, booking/fees, language options, or eligibility. Source these separately.
- **Editorial quality:** several English sentences are awkward or incomplete. Rewrite teaching explanations clearly; do not reproduce the OCR verbatim. OCR may omit or jumble facts when layouts have images, columns, or signs.

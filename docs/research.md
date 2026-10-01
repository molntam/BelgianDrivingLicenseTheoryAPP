# Rule and exam checks — 1 October 2026

## Method

All 239 SourceBook pages were extracted and OCRed to inspect its 31 lessons and date-sensitive claims. Thirty-five cropped visuals retain their 1-based PDF-page references in `dist/assets/credits.json`. Lessons were rewritten, rather than copied from OCR. The course was compared with the current consolidated code and the official Flemish and local operator exam guidance. The book dates from August 2022 according to PDF metadata; that timestamp does not establish its publisher's edition date.

## Primary references

1. Current Belgian road code, consolidated and last updated 31 August 2026: https://www.wegcode.be/nl/regelgeving/1975120109~hra8v386pu
2. Flemish Theory B exam: https://www.vlaanderen.be/rijbewijs-b/theorie-examen-voor-rijbewijs-b
3. Autoveiligheid theory format, translations and appointments: https://www.autoveiligheid.be/rijbewijs/theorie-examen
4. Geel exam centre: https://www.autoveiligheid.be/rijbewijs/examencentra/examencentrum-geel
5. Flemish B licence routes and vehicle entitlement: https://www.vlaanderen.be/rijbewijs-b
6. Offence degrees decree: https://www.wegcode.be/nl/perma/5yjza0ajqn/regulation_regulation

The shorter Vlaanderen URLs redirect to its current mobility/driver-licensing path. Federal Mobility's new-code page returned an anti-automation challenge, so the effective date was verified in the consolidated road code itself, which explicitly states that the existing regulation ceases on 1 June 2027.

## Exam evidence and implementation

The Flemish government specifies 50 questions, starting from 50 points, minimum 41/50. Wrong or unanswered ordinary questions lose 1 point; questions about third/fourth-degree offences or maximum permitted speed lose 5. The candidate has 15 seconds after the question is fully read. Since 1 January 2023, audio translation reads the question and answer options first in Dutch, then in the selected language (English, French or German).

Autoveiligheid explicitly says that the screen text stays Dutch. It offers a regular online theory appointment with audio translation; the translation must be requested at check-in. Its separate special-session process concerns delayed or deaf/hard-of-hearing exams, not an ordinary English audio translation. Geel is the driving-test centre at Lammerdries 7, 2440 Geel; the site's Turnhout listing is a vehicle-inspection station.

The app therefore has English untimed study quizzes and a Dutch-screen, Dutch→English audio simulation. English-only and timed-text modes are clearly labelled practice alternatives. The browser supplies the voices and the scripts are original study content; the experience approximates official timing rather than claiming access to the official bank or recordings.

Other current exam facts: minimum age 17; accepted original identity document; €19 basic fee plus €43 audio supplement; a passed theory exam is valid for 3 years. Two failures normally require 12 hours of recognised theory lessons before the third attempt. Retaking on the same day is not permitted. Official delayed-exam eligibility and attestations are linked, without claiming that ADHD automatically qualifies.

The official page also announces that from 1 January 2027 a Flemish practical exam requires a passed theory exam in Flanders. This is a future administrative rule, separate from the June 2027 road-code transition.

## Legal topics checked

- Articles 2, 7bis, 8, 9: road/user definitions, motorised mobility devices treated as cyclists, driver fitness, screen-device holder rule, road position and cycle paths.
- Articles 10–12bis: safe speed, regional defaults, priority, manoeuvres and zipper merging.
- Articles 15–22novies: meeting/overtaking, forbidden overtaking, turning, rail crossings, motorway access, residential areas, zones and cycle zones.
- Articles 23–28: stopping versus parking, location prohibitions, yellow lines, blue-zone disc, accessible spaces and safe door opening.
- Articles 29–40ter: lighting, rear fog lights in heavy rain or fog/snow below 100 m, horn, belts/child restraints, helmets, emergency priority, bus departure in built-up areas, pedestrian/cyclist protection and passing clearance.
- Articles 45–52: load limits and marking, warning triangles, breakdown response and collision duties.
- Articles 61–76: signals, priority signs, restrictions, mandatory signs and road markings.

## Changes and clarifications from the 2022 book

- Cycle zones continue until an end sign; the book's next-junction bicycle-street shortcut is superseded. Article 2.61 defines start/end signs and Article 22novies specifies 30 km/h and no motor-vehicle overtaking of cyclists.
- In built-up areas, Flanders/Wallonia normally use 50 km/h, Brussels 30. Ordinary-road defaults outside built-up areas are Flanders/Brussels 70 and Wallonia 90. Physical-reservation/motorway exceptions and signs remain important. This fixes an inconsistent book sign-summary table.
- Screen-device law covers using, holding or manipulating an unsecured mobile device with a screen. Waiting at a red light is not legally parked or stopped for boarding/loading.
- A helmet is now required for motorised mobility devices designed to exceed 20 km/h; the consolidated Article 36 reflects the rule effective 1 September 2026. This was added to road-user learning.
- Fixed stopping-distance charts and “speed/2” distances are illustrative teaching estimates, not guaranteed or universal legal distances.
- A tyre mileage statement is not taught as an automatic replacement interval. Tread, age, damage and manufacturer advice matter; pressure is checked cold using the vehicle's load specification.
- Current enforcement penalties and old alcohol driving-ban tables are not reproduced. Ordinary alcohol limits and the rule against impairment remain taught, with professional-driver distinctions noted.

## Maintenance

This is a dated study snapshot. Recheck the code, exam operator and regional requirements before using it after an announced change. Do not apply future June 2027 rules to today's questions or merge future administrative eligibility with current road conduct.

## Five-point classification used in the practice bank

Question metadata records the source article. Added five-point topics include turning across crossing users (19.4/19.5), zebra-crossing priority (40.4.2), overtaking at an unsignalised crossing (17.2.5), child restraints/active frontal airbags (35.1.1), meeting traffic with an obstacle (15.2), cyclist clearance (40ter), accelerating while being overtaken (16.7), blind-bend overtaking of a car (17.2.3), authorised instructions (4.1), emergency passage (38), left-turn priority (19.3.3), red railway signals (20.3), motorway reversing (21.4), no-entry C1 (5/68.3), continuous white lines (72.2), red lights (61.1.1) and unsecured screen devices (8.4). Maximum-speed questions receive five-point weighting independently of the offence-degree list, as specified by the Flemish exam source. Other questions retain one-point weighting; the simulator does not claim to reproduce the official question distribution.

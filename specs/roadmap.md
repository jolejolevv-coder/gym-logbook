# Roadmap gym-logbook

Stand 06.11.2026.

## Ziel
Das Recomp Logbuch ist eine einseitige Webseite fuer das Krafttraining (index.html, Plan im Code, Apps Script Backend in `apps-script/`). Es soll im Studio mit einer Hand bedienbar sein und jede Einheit ins Sheet schreiben (`TrainingLog`, `TrainingSets`). Live unter me.nahobinoco.com/gym-logbook.

## Erledigt
* 03.11.2026 Phase 1 Logbuch Seite, Apps Script Backend und Einrichtungsanleitung (Commit "Add gym logbook page, Apps Script backend and setup guide").
* 04.11.2026 Phase 2 Design Optimierung nach `specs/features/design-optimierung.md`: OLED Schwarz, klarere Satzzeilen, Fortschrittsbalken (Merge `e881414`). Ein paralleles Redesign fuer die Einhandbedienung (`867fe45`, Stepper, Saira) wurde verworfen und steckt nur in der Historie. Wahl des Nutzers.
* 05.11.2026 Uebergabe Notiz angelegt (`docs/uebergabe.md`).

## Offen beim Nutzer
* Test am iPhone mit Sheet Sync.
* Homebildschirm Lesezeichen neu anlegen, damit das Icon erscheint.

## Offen im Projekt
* Keine eigene Phase geplant. Das Logbuch bleibt Schreibweg fuer das Apps Script.
* Aenderungen am Script oder am Format der Tabellen nur nach Abstimmung mit fitness-dashboard, weil Phase 18 und 20 dort davon abhaengen.

## Schwesterprojekt fitness-dashboard
* Phase 18 (Spec `training-from-logbook.md`, ADR 0008): Dashboard liest `TrainingSets`. Freigegeben und live seit 05.11.2026.
* Phase 20 (Spec `logbook-in-dashboard.md`, ADR 0010): Dashboard loggt das Training selbst und schreibt ueber das vorhandene Apps Script dieses Logbuchs, ohne Aenderung am Script. Live seit 05.11.2026.

## Retro
Noch nicht geschrieben. Die drei Fragen aus der globalen Anleitung stehen offen.

# Uebergabe gym-logbook

Stand 06.11.2026.

## Fertig und live
* Design Optimierung nach Spec `specs/features/design-optimierung.md`, nur OLED Schwarz. Live unter me.nahobinoco.com/gym-logbook (Merge `e881414`). Das parallele Redesign `867fe45` (Stepper, Saira) steckt nur in der Historie, live ist die OLED Fassung (Wahl des Nutzers).
* Roadmap angelegt: `specs/roadmap.md`.

## Offen beim Nutzer
* Test am iPhone mit Sheet Sync.
* Homebildschirm Lesezeichen neu anlegen fuer das Icon.

## Annahmen
* Abhaken fuellt fehlende Wdh mit der oberen Zahl des Zielbereichs, wenn es keinen Vorschlag vom letzten Mal gibt.

## Schwesterprojekt fitness-dashboard
* Phase 18 ist freigegeben und live seit 05.11.2026: das Dashboard liest Trainingsdaten aus der Tabelle `TrainingSets`. Spec dort: `specs/features/training-from-logbook.md`, ADR 0008. Am Logbuch selbst war dafuer nichts zu aendern.
* Phase 20 ist live seit 05.11.2026: das Dashboard loggt das Training selbst und schreibt ueber das Apps Script dieses Logbuchs (`doPost`, `TrainingLog` und `TrainingSets`). Das Script muss deshalb unveraendert bleiben. Spec dort: `specs/features/logbook-in-dashboard.md`, ADR 0010. Der Plan kommt dort aus dem Sheet Tab `Plan`.

## Naechstes
* Nichts Eigenes geplant. Vor jeder Aenderung am Script oder am Tabellenformat die Specs im fitness-dashboard pruefen.

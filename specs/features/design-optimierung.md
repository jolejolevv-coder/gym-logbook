# Design Optimierung Logbuch

## Goal
Die Seite soll im Studio mit einer Hand, verschwitzt und in kurzen Blicken bedienbar sein: das Wichtige (aktueller Satz, Zielwerte, Pause) sofort sichtbar, alles andere ruhiger.

## Bewertung (Stand 2026-11-04, iPhone Breite 375 px, hell und dunkel)

Was gut ist: klare Einspaltigkeit, Barlow Condensed passt zum Studio, große Eingabefelder (44 px), Pausentimer unten mit großer Zahl, Dunkelmodus sauber, kein seitliches Scrollen.

Schwächen, nach Wirkung sortiert:

1. **Vorschlag und Eingabe sehen gleich aus.** Der Platzhalter „80“ (letztes Gewicht) ist fast so kräftig wie ein eingetragener Wert. Beim Abhaken wird kg übernommen, Wdh aber nicht; ein abgehakter Satz mit leeren Wdh sieht trotzdem grün und fertig aus. Im Sheet landet dann eine leere Wdh Zelle.
2. **Der allgemeine Kasten frisst den ersten Bildschirm.** Aufwärmen plus Hiatushernie sind 244 px hoch und stehen bei jedem Öffnen vor der ersten Übung, auch mitten im Training.
3. **Tag Zeile ohne Gewichtung.** Muskel, RIR, Tempo und Pause sind vier gleich laute graue Chips. Das Ziel des Satzes (Wdh Bereich) steht dagegen klein unter dem Feld und doppelt im Platzhalter.
4. **Fertige Übungen heben sich kaum ab.** Nur die kleine Zahl „1/1“ wird grün. Beim Scrollen sieht man nicht, wo man gerade ist.
5. **Kein Fortschritt auf einen Blick.** „0 / 15 Sätze“ steht als graue Textzeile und bricht auf zwei Zeilen um.
6. **Wichtige Hinweise versteckt, Ziele zu klein.** Der Hinweis (oft Hernie Sicherheit) liegt hinter einem 13 px „Hinweis“ mit 16 px Tippfläche; das Zahnrad ist 17 × 21 px. Apple empfiehlt mindestens 44 px.
7. **Doppelte Einheiten.** Leeres kg Feld zeigt „kg   kg“.
8. **Akzentfarbe ohne Aufgabe.** Orange taucht fast nur im Fokusrahmen auf; die Seite wirkt dadurch neutral grau statt nach Training.
9. **Kleinigkeiten im Markup.** `<title>` und Meta Tags stehen im `<body>`, ein überflüssiges `claude:viewport` Meta, kein Icon für den Homebildschirm.

## Scope
- In scope: CSS und HTML Struktur von `index.html`, Darstellung der Satzzeilen, Kopfbereich, Übungskarten, Hinweise, Timer, Einstellungen, Homebildschirm Icon (inline SVG, kein Build).
- Out of scope: Trainingsplan (`PLAN`), Speicher und Sync Logik, Apps Script, neue Funktionen wie Statistik oder Verlauf.

## Acceptance criteria
- [x] Platzhalter (Vorschlag) und eingetragener Wert sind auf den ersten Blick unterscheidbar, in hell und dunkel.
- [x] Abhaken übernimmt kg und Wdh aus dem Vorschlag, wenn leer; fehlt danach trotzdem ein Wert, ist der Satz sichtbar unvollständig markiert.
- [x] Die erste Übung beginnt auf 375 × 812 innerhalb des ersten Bildschirms; Aufwärmen und Hernie Hinweise bleiben mit einem Tipp erreichbar.
- [x] Wdh Ziel steht prominent an der Satzzeile, Muskel und Pause sind lesbar, Tempo und RIR ruhiger.
- [x] Erledigte Übungen sind klar abgesetzt; die nächste offene Übung ist erkennbar.
- [x] Fortschrittsbalken für den Tag im Kopf.
- [x] Alle Tippziele mindestens 44 px hoch.
- [x] Kontrast Text mindestens 4,5 : 1 in hell und dunkel.
- [x] Kein seitliches Scrollen, keine Konsolenfehler, Sync und Timer funktionieren unverändert.
- [x] `<head>` sauber, Homebildschirm Icon vorhanden.

## Implementation plan
Phase 1: Satzzeile und Platzhalter (Punkte 1, 3, 7). Abhaken füllt auch Wdh.
Phase 2: Kopf mit Fortschrittsbalken, allgemeiner Kasten einklappbar und nach dem ersten Satz automatisch zu (Punkte 2, 5).
Phase 3: Übungskarten: Zustand offen, aktiv, fertig; Hinweis als großes Tippziel, Hernie Hinweise mit Warnfarbe (Punkte 4, 6, 8).
Phase 4: Head, Icon, Zahnrad, Einstellungen, Feinschliff (Punkt 9).
Phase 5: Prüfung auf 375 px hell und dunkel, impeccable Abnahme, README Abschnitt Design.

## Entscheidungen (2026-11-04)
- Vorhandenen Look schärfen, keine neue Richtung.
- Abhaken übernimmt kg und Wdh aus dem Vorschlag; ohne Vorschlag für Wdh die obere Zahl des Zielbereichs.
- Kasten „Vor dem Training“ ist offen bis zum ersten abgehakten Satz, danach zu, per Tipp wieder auf.
- Nachträglich gewünscht: nur noch OLED Schwarz (#000), kein helles Theme mehr, Timer dunkel statt hellem Balken.

## Stand
Umgesetzt und auf 375 px geprüft (Konsole ohne Fehler, kein seitliches Scrollen, alle Tippziele mindestens 44 px).
Nicht gemacht: unabhängige impeccable Abnahme, Test auf dem echten iPhone mit Sheet Sync.

## Open questions
- keine

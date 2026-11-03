# Gym Logbuch

Trainings-Logbuch für den 4-Tage Recomp-Plan (Upper/Lower, Mo/Mi/Fr/So), optimiert fürs iPhone.
Speichert lokal im Browser und optional in ein eigenes Google Sheet.

## 1. GitHub Pages

1. Neues Repo `gym-logbook` anlegen (Public, für kostenloses Pages).
2. `index.html` und `README.md` hochladen (Add file → Upload files). Das Apps Script liegt unter `apps-script/Code.gs` (enthält kein Token).
3. Settings → Pages → Source: Deploy from a branch, Branch `main`, Ordner `/ (root)` → Save.
4. Nach ca. 1 Minute läuft die Seite unter `https://<user>.github.io/gym-logbook/`.
5. Auf dem iPhone in Safari öffnen → Teilen → Zum Home-Bildschirm.

Die Seite enthält keine Trainingsdaten. Die liegen im Sheet bzw. lokal auf dem Gerät.

## 2. Google Sheet als Speicher

1. Neues Google Sheet anlegen, z. B. „Gym Logbuch“.
2. Erweiterungen → Apps Script → Inhalt von `apps-script/Code.gs` einfügen → Speichern.
3. Projekteinstellungen (Zahnrad) → Skripteigenschaften → Eigenschaft `TOKEN` mit einem langen Zufallswert anlegen.
4. Bereitstellen → Neue Bereitstellung → Typ „Web-App“ → Ausführen als: Ich, Zugriff: Jeder → Bereitstellen, Zugriff erlauben.
5. Die Web-App-URL (endet auf `/exec`) kopieren.
6. In der Logbuch-Seite auf ⚙ tippen, URL und Token eintragen → Speichern & synchronisieren.

Das Sheet bekommt zwei Tabs: `TrainingLog` (eine Zeile pro Einheit, für die App) und `TrainingSets`
(eine Zeile pro Satz mit Datum, Übung, Muskel, kg, Wdh, für Auswertung und Dashboard).

Sicherheit: Die Web-App ist für „Jeder“ erreichbar, schreibt und liest aber nur mit dem richtigen Token.
Das Token steht nicht im Repo, nur in den Skripteigenschaften und lokal auf deinem iPhone.

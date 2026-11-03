/**
 * Gym Logbuch: Speicher-Backend in Google Sheets.
 * Einrichtung: siehe README.md. Das Token steht in den Skripteigenschaften (TOKEN), nicht im Code.
 */
const LOG_SHEET = 'TrainingLog';   // 1 Zeile pro Einheit (JSON, für die App)
const SET_SHEET = 'TrainingSets';  // 1 Zeile pro Satz (flach, für Auswertung/Dashboard)

function out_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
function sheet_(name, header) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(name);
  if (!sh) { sh = ss.insertSheet(name); sh.appendRow(header); sh.setFrozenRows(1); }
  return sh;
}
function authorized_(token) {
  const expected = PropertiesService.getScriptProperties().getProperty('TOKEN');
  return expected && token === expected;
}

function doGet(e) {
  if (!authorized_(e.parameter.token)) return out_({ error: 'unauthorized' });
  const sh = sheet_(LOG_SHEET, ['id', 'date', 'tag', 'updated', 'json']);
  const values = sh.getDataRange().getValues().slice(1);
  const logs = values.filter(r => r[0]).map(r => ({ id: String(r[0]), data: JSON.parse(r[4]) }));
  return out_({ logs: logs });
}

function doPost(e) {
  let body;
  try { body = JSON.parse(e.postData.contents); } catch (err) { return out_({ error: 'bad_json' }); }
  if (!authorized_(body.token)) return out_({ error: 'unauthorized' });
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = body.data || {};
    const log = sheet_(LOG_SHEET, ['id', 'date', 'tag', 'updated', 'json']);
    const ids = log.getRange(1, 1, log.getLastRow(), 1).getValues().map(r => String(r[0]));
    const row = [body.id, d.date, d.tag, new Date(d.updated || Date.now()), JSON.stringify(d)];
    const idx = ids.indexOf(String(body.id));
    if (idx > 0) log.getRange(idx + 1, 1, 1, row.length).setValues([row]);
    else log.appendRow(row);

    const sets = sheet_(SET_SHEET, ['id', 'date', 'tag', 'exercise', 'muscle', 'set', 'kg', 'reps']);
    const last = sets.getLastRow();
    if (last > 1) {
      const col = sets.getRange(2, 1, last - 1, 1).getValues();
      for (let i = col.length - 1; i >= 0; i--) if (String(col[i][0]) === String(body.id)) sets.deleteRow(i + 2);
    }
    const rows = (body.rows || []).map(r => [body.id].concat(r));
    if (rows.length) sets.getRange(sets.getLastRow() + 1, 1, rows.length, 8).setValues(rows);
  } finally {
    lock.releaseLock();
  }
  return out_({ ok: true });
}

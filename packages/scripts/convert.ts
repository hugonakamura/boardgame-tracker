import fs from 'fs';
import csv from 'csv-parser';
import fsExtra from 'fs-extra';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sessions: any[] = [];
let lastSeenDate = '';

const csvFilePath = path.join(__dirname, 'sessions.csv');
const dbPath = path.join(__dirname, '../../packages/json-server/db.json');

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    // ignore second line
    if (row.game === 'TOTAL (hours)' || !row.game) {
      return;
    }

    // remember last day seen
    if (row.day && row.day.trim() !== '') {
      lastSeenDate = row.day;
    }

    sessions.push({
      id: crypto.randomUUID(),
      date: lastSeenDate,
      game: row.game.trim(),
      duration: parseInt(row['duration (min)']) || 0,
      outcome: row.result,
      scenario: row.quest || '',
      hero: row['player deck'] || '',
      villain: row['enemy deck'] || '',
      isMatch: row.isMatch === 'TRUE'
    });
  })
  .on('end', async () => {
    try {
      const currentDb = await fsExtra.readJson(dbPath);
      currentDb.sessions = sessions;

      await fsExtra.writeJson(dbPath, currentDb, { spaces: 2 });
      console.log('✅ Successfully converted CSV to db.json');
    } catch (err) {
      console.error('❌ Error updating db.json:', err);
    }
  });
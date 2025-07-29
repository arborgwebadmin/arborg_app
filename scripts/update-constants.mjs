import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const constantsPath = path.join(__dirname, '../constants/index.js');

// Helper → "2025M07"
function monthCode(d = new Date()) {
  return `${d.getFullYear()}M${String(d.getMonth() + 1).padStart(2, '0')}`;
}

async function fetchPerSqMeter(code) {
  const res = await fetch(
    'https://px.hagstofa.is:443/pxis/api/v1/is/Efnahagur/visitolur/2_byggingarvisitala/byggingarvisitala/VIS13501.px',
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        query: [{ code: 'Mánuður', selection: { filter: 'item', values: [code] } }],
        response: { format: 'json' },
      }),
    },
  ).then(r => r.json());

  return Number(res.data[0].values[0]);
}

function bumpConstants(perSqMeter, visTxt) {
  let src = fs.readFileSync(constantsPath, 'utf8');
  src = src.replace(/PER_SQ_METER:\s*\d+(?:\.\d+)?,/, `PER_SQ_METER: ${perSqMeter},`);
  src = src.replace(/VISITOLU_TXT\s*:\s*['"][^'"]+['"]/, `VISITOLU_TXT : '${visTxt}'`);
  fs.writeFileSync(constantsPath, src);
}

(async () => {
  const perSqMeter = await fetchPerSqMeter(monthCode());
  const visTxt = `1. ${new Date().toLocaleString('is-IS', { month: 'long' })} ${new Date().getFullYear()}`;
  bumpConstants(perSqMeter, visTxt);
  console.log('✅  Updated constants', { perSqMeter, visTxt });
})();

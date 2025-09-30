// api/cron/lodagjold.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { put } from '@vercel/blob';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const expected = process.env.CRON_SECRET || '';
    const auth = (req.headers.authorization as string) || '';
    if (expected && auth !== `Bearer ${expected}`) return res.status(401).send('unauthorized');

    const codeOverride = typeof req.query.code === 'string' ? req.query.code : undefined;
    const suffix       = typeof req.query.suffix === 'string' ? req.query.suffix : undefined;

    const now  = new Date();
    const code = codeOverride || `${now.getFullYear()}M${String(now.getMonth() + 1).padStart(2, '0')}`;

    const body = {
      query: [{ code: 'Mánuður', selection: { filter: 'item', values: [code] } }],
      response: { format: 'json' },
    };

    const api = 'https://px.hagstofa.is/pxis/api/v1/is/Efnahagur/visitolur/2_byggingarvisitala/byggingarvisitala/VIS13501.px';
    const resp = await fetch(api, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!resp.ok) return res.status(502).send(`Hagstofa request failed: ${resp.status} ${resp.statusText}`);

    const json  = await resp.json();
    const value = Number(json?.data?.[0]?.values?.[0]);
    if (!Number.isFinite(value)) return res.status(500).send('Unexpected response from Hagstofa');

    const data = {
      PER_SQ_METER: value,
      VISITOLU_TXT: `1. ${now.toLocaleString('is-IS', { month: 'long' })} ${now.getFullYear()}`,
    };

    const token = process.env.ARBORG_BLOB_READ_WRITE_TOKEN;
    if (!token) return res.status(500).send('Blob token missing (set ARBORG_BLOB_READ_WRITE_TOKEN)');

    const filename = suffix ? `latest-${suffix}.json` : 'latest.json';
    const result = await put(`lodagjold/${filename}`, JSON.stringify(data), {
      access: 'public',
      contentType: 'application/json; charset=utf-8',
      addRandomSuffix: false,
      token,
    });

    return res.status(200).json({ ok: true, url: result.url, code, ...data });
  } catch (err: any) {
    return res.status(500).send(`Internal error: ${err?.message || 'unknown'}`);
  }
}

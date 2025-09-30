// /api/cron/lodagjold.ts
import { put } from '@vercel/blob';

export const runtime = 'edge'; // or remove for Node runtime

export default async function handler(req: Request) {
  // optional: protect endpoint
  const expected = process.env.CRON_SECRET;
  if (expected && req.headers.get('authorization') !== `Bearer ${expected}`) {
    return new Response('unauthorized', { status: 401 });
  }

  const now  = new Date();
  const code = `${now.getFullYear()}M${String(now.getMonth()+1).padStart(2,'0')}`;

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
  if (!resp.ok) return new Response(`Hagstofa request failed: ${resp.status}`, { status: 502 });

  const json  = await resp.json();
  const value = Number(json?.data?.[0]?.values?.[0]);
  if (!Number.isFinite(value)) return new Response('Unexpected response', { status: 500 });

  const data = {
    PER_SQ_METER: value,
    VISITOLU_TXT: `1. ${now.toLocaleString('is-IS', { month: 'long' })} ${now.getFullYear()}`,
  };

  const res = await put('lodagjold/latest.json', JSON.stringify(data), {
    access: 'public',
    contentType: 'application/json; charset=utf-8',
    addRandomSuffix: false,
    // the SDK will read BLOB_READ_WRITE_TOKEN from env automatically,
    // but you can be explicit if you prefer:
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  return new Response(JSON.stringify({ ok: true, url: res.url, code, ...data }), {
    headers: { 'content-type': 'application/json' },
  });
}

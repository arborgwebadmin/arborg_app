export async function getLodagjold () {
  const url = `${process.env.BLOB_PUBLIC_BASE}/lodagjold/latest.json`;
  const res = await fetch(url, { next: { revalidate: 60 * 60 } }); // cache 1 h
  if (!res.ok) throw new Error('lodagjöld blob missing');
  return res.json();
}

export async function loadDocument(key: string) {
	const res = await fetch(`http://localhost:4000/api/documents/${encodeURIComponent(key)}`);
	if (!res.ok) throw new Error('Failed to load');
	return res.json();
}

export async function saveDocument(key: string, content: unknown) {
	await fetch(`http://localhost:4000/api/documents/${encodeURIComponent(key)}` , {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ content })
	});
}

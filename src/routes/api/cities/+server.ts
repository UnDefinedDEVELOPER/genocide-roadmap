import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request }) => {
	/* const authHeader = request.headers.get('Authorization');

	if (authHeader !== 'Myauthheader') {
		return new Response(JSON.stringify({ message: 'Invalid credentials' }, { status: 401 }));
	} */

	const res = await fetch('http://localhost:3000/cities');
	const data = await res.json();

	return new Response(JSON.stringify(data), { status: 200 });
};

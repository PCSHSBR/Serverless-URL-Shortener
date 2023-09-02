import { admin } from '$lib/server/firebase';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getFirebaseTokenFromRequest } from '$lib/server/utils';

/**
 * create a new dynamic link
 */
export const POST: RequestHandler = async ({ request }) => {
	const firebaseToken = getFirebaseTokenFromRequest(request);
	const { link, domain } = await request.json();
	console.table({ link, domain });
	// if (!link) {
	// 	throw error(400, 'missing link');
	// }

	admin.auth().verifyIdToken(firebaseToken).then((decodedToken) => {
		const uid = decodedToken.uid;
		console.log({ uid });
	}).catch((error) => {
		console.log({ error });
	});

	return json({ link, domain });
};

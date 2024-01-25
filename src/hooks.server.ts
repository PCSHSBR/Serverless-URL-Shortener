import { error, type Handle } from '@sveltejs/kit';
import { admin } from "$lib/server/firebase";

export const handle: Handle = async ({ event, resolve }) => {
	const userIdToken = event.request.headers.get('Authorization')?.split('Bearer ')[1] || event.url.searchParams.get('token');
	if (userIdToken) {
		try {
			const decodedToken = await admin.auth().verifyIdToken(userIdToken)
			const user = await admin.auth().getUser(decodedToken.uid);
			event.locals.user = user;
		} catch (e) {
			throw error(401, 'Unauthorized');
		}
	};
	const response = await resolve(event);
	return response;
};
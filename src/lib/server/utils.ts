import { error } from '@sveltejs/kit';

export function getFirebaseTokenFromRequest(request: Request) {
  const token = request.headers.get('authorization')
  if (!token) throw error(401, 'Unauthorized');
  if (!token.startsWith('Bearer ')) throw error(401, 'Unauthorized');
  return token.split(' ')[1];
}
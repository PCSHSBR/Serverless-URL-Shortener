/**
 * Browser's fetch API wrapper
 */

import { browser } from '$app/environment';
import { auth } from './firebase';

export async function fetch(input: RequestInfo, init?: RequestInit) {
  if (!browser) return;
  const idToken = await auth.currentUser?.getIdToken()
  const headers = new Headers(init?.headers);
  headers.set('Authorization', `Bearer ${idToken}`);
  // merge headers
  init = { ...init, headers };
  return window.fetch(input, init);
}
// See https://kit.svelte.dev/docs/types#app

import type { UserRecord } from 'firebase-admin/lib/auth/user-record';

// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			user?: UserRecord;
		}
		// interface Error {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};

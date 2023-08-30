/**
 * Checks if url is valid
 * @param url url to check
 * @returns true if url is valid, false otherwise
 */
export function isURL(url: string): boolean {
	try {
		new URL(url);
		return true;
	} catch (e) {
		return false;
	}
}

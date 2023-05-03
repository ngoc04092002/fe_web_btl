export function getPathNameFirebase(url: string): string {
	const ibe = url.indexOf('%2F');
	const ila = url.indexOf('?');
	const res = url.slice(ibe + 3, ila);
	return res;
}

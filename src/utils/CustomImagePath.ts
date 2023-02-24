export function getImage(path: string): string {
	return `${process.env.PUBLIC_URL}/images/${path}`;
}

export function formatRoomId(id1: string, id2: string): string {
	return [id1, id2].sort((a, b) => a.localeCompare(b)).join('-');
}

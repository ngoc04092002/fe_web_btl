export function formatPhoneNumber(phoneNumberString: string, isShowing: boolean) {
	var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
	var match = cleaned.match(/^(\d{4})(\d{3})(\d{3})$/);
	if (match) {
		return `${match[1]} ${match[2]} ${isShowing ? match[3] : 'xxx'}`;
	}
	return null;
}

export function convertToVND(number: number): string {
	const names = ['tỷ', 'triệu', 'nghìn', ''];

	// Tách giá trị số thành các phần theo từng nhóm 3 chữ số
	const groups = [];
	let i = 1000;
	while (number > 1000) {
		const remainder = number % i;
		groups.unshift(remainder);
		number = Math.floor(number / i);
	}
	groups.unshift(number);

	let beginIndex = 4 - groups.length < 0 ? 0 : 4 - groups.length;
	let currency = '';
	for (let i = beginIndex; i < 4; i++) {
		if (groups[i - beginIndex] !== 0) {
			currency += groups[i - beginIndex] + ' ' + names[i] + ' ';
		}
	}
	currency += 'đồng';

	return currency;
}

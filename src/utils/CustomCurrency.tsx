export function convertToVND(number: number) {
	// Tách phần nguyên và phần thập phân
	const integerPart = Math.floor(number);
	const decimalPart = number - integerPart;

	// Tách giá trị số thành các phần theo từng nhóm 3 chữ số
	const groups = [];
	let remaining = integerPart;
	while (remaining > 0) {
		groups.unshift(remaining % 1000);
		remaining = Math.floor(remaining / 1000);
	}

	// Đưa giá trị số của từng phần thành số nghìn đồng triệu trăm
	const names = ['nghìn đồng', 'triệu đồng', 'tỷ đồng', 'nghìn tỷ đồng', 'triệu tỷ đồng'];
	const convertedGroups = [];
	for (let i = 0; i < groups.length; i++) {
		const group = groups[i];
		if (group === 0) {
			continue;
		}
		const name = names[i];
		const convertedGroup = convertGroup(group) + ' ' + name;
		convertedGroups.push(convertedGroup);
	}

	// Kết hợp các phần đã chuyển đổi để tạo thành giá trị số hoàn chỉnh
	let result = convertedGroups.join(' ');
	if (decimalPart > 0) {
		result += ' phẩy ' + convertDecimal(decimalPart);
	}

	return result;
}

function convertGroup(number: number) {
	const ones = ['', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
	const tens = [
		'',
		'mười',
		'hai mươi',
		'ba mươi',
		'bốn mươi',
		'năm mươi',
		'sáu mươi',
		'bảy mươi',
		'tám mươi',
		'chín mươi',
	];

	let result = '';
	const hundreds = Math.floor(number / 100);
	if (hundreds > 0) {
		result += ones[hundreds] + ' trăm';
	}

	const tensAndOnes = number % 100;
	if (tensAndOnes > 0) {
		if (hundreds > 0) {
			result += ' ';
		}
		if (tensAndOnes < 10) {
			result += ones[tensAndOnes];
		} else if (tensAndOnes < 20) {
			result += 'mười ' + ones[tensAndOnes % 10];
		} else {
			result += tens[Math.floor(tensAndOnes / 10)] + ' ' + ones[tensAndOnes % 10];
		}
	}

	return result;
}

function convertDecimal(number: number) {
	const ones = ['', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
	const tens = [
		'',
		'mười',
		'hai mươi',
		'ba mươi',
		'bốn mươi',
		'năm mươi',
		'sáu mươi',
		'bảy mươi',
		'tám mươi',
		'chín mươi',
	];

	let result = '';
	const decimalPlaces = 2;
	for (let i = 0; i < decimalPlaces; i++) {
		const digit = Math.floor(number * 10 ** (i + 1)) % 10;
		if (result.length > 0 && digit > 0) {
			result += ' ';
		}
		result += tens[digit];
		const onesDigit = Math.floor(number * 10 ** i) % 10;
		if (onesDigit > 0 && result.length > 0) {
			result += ' ';
		}
		result += ones[onesDigit];
	}

	return result;
}

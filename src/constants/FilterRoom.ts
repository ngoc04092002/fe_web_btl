export const initFilterRoom: { action: string; title: string; child: [] | string[] }[] = [
	{
		action: 'acreage',
		title: 'Diện tích',
		child: ['<20', '20 - 40', '40 - 60', '60 - 80', '>80'],
	},
	{
		action: 'roomNumber',
		title: 'Số phòng',
		child: ['1', '2', '3', '4', '5', '6+'],
	},
	{
		action: 'price',
		title: 'Giá',
		child: ['<2 Triệu', '2 Triệu - 6 Triệu', '>6 Triệu - 10 Triệu', '>10 Triệu'],
	},
	{
		action: 'timestamp',
		title: 'Thời gian đăng',
		child: ['1', '3', '5', '7', '15', '30'],
	},
];

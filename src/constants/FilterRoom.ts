import { IRequestPostRoom } from '@/types/pages/IDashBoard';

export const initFilterRoom: {
	action: string;
	title: string;
	child: [] | string[];
	unit: string;
}[] = [
	{
		action: 'acreage',
		title: 'Diện tích',
		child: ['<20', '20 - 40', '40 - 60', '60 - 80', '>80'],
		unit: 'm^2',
	},
	{
		action: 'roomNumber',
		title: 'Số phòng',
		child: ['1', '2', '3', '4', '5', '6+'],
		unit: '',
	},
	{
		action: 'price',
		title: 'Giá',
		child: ['<2', '2 - 6', '6 - 10', '>10'],
		unit: 'Triệu',
	},
	{
		action: 'timestamp',
		title: 'Thời gian đăng',
		child: ['1', '3', '5', '7', '15', '30'],
		unit: 'Ngày trước',
	},
];

export const initialTextFiledPostRoom: {
	id: string;
	label: string;
	unit?: string;
	type?: string;
}[] = [
	{
		id: 'title',
		type: 'text',
		label: 'tiêu đề',
	},
	{
		id: 'des',
		type: 'text',
		label: 'miêu tả',
	},
	{
		id: 'address',
		type: 'text',
		label: 'địa chỉ',
	},
	{
		id: 'phone',
		type: 'text',
		label: 'số điện thoại',
	},
	{
		id: 'price',
		type: 'text',
		label: 'Giá',
		unit: 'đ',
	},
	{
		id: 'sale',
		type: 'text',
		label: 'Sale',
		unit: '%',
	},
	{
		id: 'bedRoom',
		type: 'text',
		label: 'Phòng ngủ',
		unit: '',
	},
	{
		id: 'bathroom',
		type: 'text',
		label: 'Phòng tắm',
		unit: '',
	},
	{
		id: 'acreage',
		label: 'Diện tích',
		unit: 'm^2',
		type: 'text',
	},
	{
		id: 'limitNumberPeople',
		label: 'Giới hạn số người',
		type: 'number',
		unit: '',
	},
];

export const initValuePostRoom: IRequestPostRoom = {
	title: '',
	des: '',
	address: '',
	phone: '',
	price: '',
	sale: '',
	bedRoom: '',
	bathroom: '',
	acreage: '',
	limitNumberPeople: 0,
	roomType: '',
};
export const i18PostRoom: { [key: string]: string } = {
	'bathroom': 'Phòng tắm',
	'sale': 'Giảm giá',
	'bedRoom': 'Phòng ngủ',
	'phone': 'Số điện thoại',
	'roomType': 'Kiểu phòng',
	'limitNumberPeople': 'Giới hạn người ở',
};

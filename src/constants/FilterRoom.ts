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
}[] = [
	{
		id: 'title',
		label: 'tiêu đề',
	},
	{
		id: 'des',
		label: 'miêu tả',
	},
	{
		id: 'address',
		label: 'địa chỉ',
	},
	{
		id: 'phone',
		label: 'số điện thoại',
	},
	{
		id: 'price',
		label: 'Giá',
		unit: 'đ',
	},
	{
		id: 'sale',
		label: 'Sale',
		unit: '$',
	},
	{
		id: 'bedRoom',
		label: 'Phòng ngủ',
		unit: '',
	},
	{
		id: 'bathroom',
		label: 'Phòng tắm',
		unit: '',
	},
	{
		id: 'acreage',
		label: 'Diện tích',
		unit: 'm^2',
	},
	{
		id: 'limitNumberPeople',
		label: 'Giới hạn số người',
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

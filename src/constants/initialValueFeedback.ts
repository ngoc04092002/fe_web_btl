import { IClientFeedback } from '@/types/pages/IDashBoard';

export const FeedbackInfor = [
	{
		id: 'name',
		label: 'Họ & tên',
	},
	{
		id: 'phone',
		label: 'Số điện thoại',
	},
	{
		id: 'email',
		label: 'Email',
	},
	{
		id: 'content',
		label: 'Nội dung',
	},
];

export const initValueFeedbackInfo: IClientFeedback = {
	name: '',
	phone: '',
	email: '',
	content: '',
};

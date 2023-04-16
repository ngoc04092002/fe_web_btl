import { ISignUpCheckbox, ISignUpText } from '@/types/pages/ISignUp';

export const dataFormGroupText: ISignUpText[] = [
	{
		id: 'group_form_username',
		label: 'username',
		placeholder: 'Nhập tên của bạn',
		styleDiv: '',
		styleLabel: 'w-36',
		type: 'text',
		i18Label: 'Tên đăng nhập',
	},
	{
		id: 'group_form_email',
		label: 'email',
		placeholder: 'Nhập email của bạn',
		styleDiv: '',
		styleLabel: 'w-36',
		type: 'text',
		i18Label: 'Email',
	},
	{
		id: 'group_form_address',
		label: 'address',
		placeholder: 'Ngõ, xóm, phường, thị xã, tỉnh (thành phố)',
		styleDiv: '',
		type: 'text',
		styleLabel: 'w-36',
		i18Label: 'Địa chỉ',
	},
];
export const dataFormGroupCheckBox: ISignUpCheckbox[] = [
	{
		id: 'group_form_male',
		label: 'male',
		styleDiv: 'mr-2 h-fit',
		type: 'checkbox',
		i18Label: 'Nam',
	},
	{
		id: 'group_form_female',
		label: 'female',
		type: 'checkbox',
		i18Label: 'Nữ',
		styleDiv: 'h-fit',
	},
];

export const dataFormGroupTextEditProfile: ISignUpText[] = [
	{
		id: 'username',
		label: 'username',
		placeholder: 'Nhập tên của bạn',
		styleDiv: 'mr-3 flex-wrap',
		styleLabel: 'w-28 whitespace-nowrap',
		type: 'text',
		i18Label: 'Tên đăng nhập',
	},
	{
		id: 'email',
		label: 'email',
		placeholder: 'Nhập email của bạn',
		styleDiv: '',
		styleLabel: 'w-28',
		type: 'text',
		i18Label: 'Email',
	},
	{
		id: 'address',
		label: 'address',
		placeholder: 'Ngõ, xóm, phường, thị xã, tỉnh (thành phố)',
		styleDiv: 'flex-wrap',
		type: 'text',
		styleLabel: 'w-28',
		i18Label: 'Địa chỉ',
	},
	{
		id: 'sdt',
		label: 'sdt',
		placeholder: '0123456789',
		styleDiv: 'flex-wrap',
		type: 'text',
		styleLabel: 'w-28',
		i18Label: 'Số điện thoại',
	},
];

export const dataFormGroupEditProfile: ISignUpCheckbox[] = [
	{
		id: 'male',
		label: 'male',
		styleDiv: 'mr-2 h-fit',
		type: 'checkbox',
		i18Label: 'Nam',
	},
	{
		id: 'female',
		label: 'female',
		type: 'checkbox',
		i18Label: 'Nữ',
		styleDiv: 'h-fit',
	},
];

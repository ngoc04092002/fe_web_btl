import { ISignUpCheckbox, ISignUpText } from '@/types/pages/ISignUp';

export const dataFormGroupText: ISignUpText[] = [
	{
		id: 'group_form_username',
		label: 'username',
		placeholder: 'Nhập tên của bạn',
		styleDiv: 'mb-5',
		styleLabel: 'w-36',
		type: 'text',
		i18Label: 'Tên đăng nhập',
	},
	{
		id: 'group_form_email',
		label: 'email',
		placeholder: 'Nhập email của bạn',
		styleDiv: 'mb-5',
		styleLabel: 'w-36',
		type: 'text',
		i18Label: 'Email',
	},
	{
		id: 'group_form_address',
		label: 'address',
		placeholder: 'ngõ, xóm, phường, thị xã, tỉnh (thành phố)',
		styleDiv: 'mb-5',
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

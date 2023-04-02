import { IFormSignUp, IFormSignIn } from '@/types/components/AuthLayoutWrapper/type';
import { IFormEditPassword, IFromEditProfile } from '@/types/pages/IDashBoard';

export const initialSignupalues: IFormSignUp = {
	group_form_username: '',
	group_form_email: '',
	group_form_address: '',
	group_form_male: true,
	group_form_female: false,
	password1: '',
	password2: '',
};

export const initialSigninValues: IFormSignIn = {
	group_form_email: '',
	group_form_password: '',
};

export const initialFormEditProfile: IFromEditProfile = {
	username: '',
	address: '',
	avatar: '',
	email: '',
	male: true,
	female: false,
	sdt: '',
};

export const initialFormEditPassword: IFormEditPassword = {
	oldPassword: '',
	password: '',
	verifyPassword: '',
};

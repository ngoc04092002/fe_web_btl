import * as yup from 'yup';
export const schemaSignup = yup
	.object({
		group_form_username: yup.string().required('Trường này bắt buộc'),
		group_form_email: yup.string().email('Email không hợp lệ').required('Trường này bắt buộc'),
		group_form_address: yup.string().required('Trường này bắt buộc'),
		group_form_male: yup.string().required('Bắt buộc'),
		group_form_female: yup.string().required('Bắt buộc'),
		password1: yup.string().required('Trường này bắt buộc').min(8, 'Mật khẩu ít nhất phải 8 ký tự'),
		password2: yup
			.string()
			.oneOf([yup.ref('password1')], 'Mật khẩu không khớp')
			.required('Trường này bắt buộc')
			.min(8, 'Mật khẩu ít nhất phải 8 ký tự'),
	})
	.required();

export const schemaSignin = yup
	.object({
		group_form_email: yup.string().email('Email không hợp lệ').required('Trường này bắt buộc'),
		group_form_password: yup
			.string()
			.required('Trường này bắt buộc')
			.min(8, 'Mật khẩu ít nhất phải 8 ký tự'),
	})
	.required();

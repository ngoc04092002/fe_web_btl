import * as yup from 'yup';
export const schemaSignup = yup
	.object({
		group_form_username: yup
			.string()
			.trim()
			.max(1024, 'Chỉ cho phép giới hạn 1024 ký tự')
			.required('Trường này bắt buộc'),
		group_form_email: yup
			.string()
			.trim()
			.max(1024, 'Chỉ cho phép giới hạn 1024 ký tự')
			.matches(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+\b/i, 'Email không hợp lệ')
			.required('Trường này bắt buộc'),
		group_form_address: yup
			.string()
			.trim()
			.max(1024, 'Chỉ cho phép giới hạn 1024 ký tự')
			.required('Trường này bắt buộc'),
		group_form_male: yup.boolean().required('Bắt buộc'),
		group_form_female: yup.boolean().required('Bắt buộc'),
		password1: yup
			.string()
			.required('Trường này bắt buộc')
			.trim()
			.max(1024, 'Chỉ cho phép giới hạn 1024 ký tự')
			.min(8, 'Mật khẩu ít nhất phải 8 ký tự'),
		password2: yup
			.string()
			.trim()
			.max(1024, 'Chỉ cho phép giới hạn 1024 ký tự')
			.oneOf([yup.ref('password1')], 'Mật khẩu không khớp')
			.required('Trường này bắt buộc')
			.min(8, 'Mật khẩu ít nhất phải 8 ký tự'),
	})
	.required();

export const schemaSignin = yup
	.object({
		group_form_email: yup
			.string()
			.trim()
			.required('Trường này bắt buộc')
			.max(1024, 'Chỉ cho phép giới hạn 1024 ký tự')
			.matches(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+\b/i, 'Email không hợp lệ'),
		group_form_password: yup
			.string()
			.trim()
			.max(1024, 'Chỉ cho phép giới hạn 1024 ký tự')
			.required('Trường này bắt buộc')
			.min(8, 'Mật khẩu ít nhất phải 8 ký tự'),
	})
	.required();

export const schemaFormEditProfie = yup
	.object({
		username: yup.string().trim().max(1024, 'Chỉ cho phép giới hạn 1024 ký tự'),
		email: yup
			.string()
			.trim()
			.max(1024, 'Chỉ cho phép giới hạn 1024 ký tự')
			.matches(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+\b/i, 'Email không hợp lệ'),
		address: yup.string().trim().max(1024, 'Chỉ cho phép giới hạn 1024 ký tự'),
		male: yup.boolean(),
		female: yup.boolean(),
		gender: yup.string().trim().max(1024, 'Chỉ cho phép giới hạn 1024 ký tự'),
		sdt: yup.string().trim().max(1024, 'Chỉ cho phép giới hạn 1024 ký tự'),
		avatar: yup.string().trim().max(1024, 'Chỉ cho phép giới hạn 1024 ký tự'),
	})
	.required();
export const schemaFormEditPassword = yup
	.object({
		password: yup
			.string()
			.trim()
			.max(1024, 'Chỉ cho phép giới hạn 1024 ký tự')
			.required('Trường này bắt buộc')
			.min(8, 'Mật khẩu ít nhất phải 8 ký tự'),
		verifyPassword: yup
			.string()
			.trim()
			.max(1024, 'Chỉ cho phép giới hạn 1024 ký tự')
			.oneOf([yup.ref('password')], 'Mật khẩu không khớp')
			.required('Trường này bắt buộc')
			.min(8, 'Mật khẩu ít nhất phải 8 ký tự'),
	})
	.required();

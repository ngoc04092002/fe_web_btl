import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState, useMemo, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Form, Link } from 'react-router-dom';

import AuthContainer from '@/components/AuthLayoutWrapper';
import FormGroup from '@/components/AuthLayoutWrapper/FormGroup';
import { initialSignupalues } from '@/constants/InitialValuesAuth';
import { schemaSignup } from '@/constants/SchemaYups';
import { IFormSignUp, RegisterId } from '@/types/components/AuthLayoutWrapper/type';
import {
	initializePasswordValue,
	ISignUpCheckbox,
	ISignUpPassword,
	ISignUpText,
} from '@/types/pages/ISignUp';

const SignUp = () => {
	const [visiblePassword, setVisiblePassword] = useState<initializePasswordValue>({
		'password1': false,
		'password2': false,
	});

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<IFormSignUp>({
		defaultValues: initialSignupalues,
		resolver: yupResolver(schemaSignup),
	});
	const onSubmit: SubmitHandler<IFormSignUp> = (data) => console.log(data);

	const handleVisibilityChange: (value: string) => void = (id: string) => {
		setVisiblePassword((prev: initializePasswordValue) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	const dataFormGroupText: ISignUpText[] = useMemo(
		() => [
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
		],
		[],
	);

	const dataFormGroupPassword: ISignUpPassword[] = useMemo(
		() => [
			{
				id: 'password1',
				label: 'password',
				placeholder: 'Nhập mật khẩu của bạn',
				styleDiv: 'mb-5',
				styleInput: 'pr-8',
				styleLabel: 'w-36',
				type: visiblePassword.password1 ? 'text' : 'password',
				isVisible: visiblePassword.password1,
				i18Label: 'Mật khẩu',
			},
			{
				id: 'password2',
				label: 'password2',
				placeholder: 'Nhập lại mật khẩu của bạn',
				styleDiv: 'mb-5',
				styleInput: 'pr-8',
				styleLabel: 'w-36',
				type: visiblePassword.password2 ? 'text' : 'password',
				isVisible: visiblePassword.password2,
				i18Label: 'Nhập lại mật khẩu',
			},
		],
		[visiblePassword.password1, visiblePassword.password2],
	);

	const dataFormGroupCheckBox: ISignUpCheckbox[] = useMemo(
		() => [
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
		],
		[],
	);

	useEffect(() => {
		document.title = 'Sign Up';
	}, []);
	return (
		<AuthContainer id='sign-up'>
			<Form
				onSubmit={handleSubmit(onSubmit)}
				method='post'
				className='w-full h-full select-none p-3 flex items-center flex-col'
			>
				<h1 className='capitalize font-bold text-3xl mb-10'>Đăng ký</h1>
				{!!dataFormGroupText &&
					dataFormGroupText.map((text) => (
						<FormGroup
							key={text.id}
							id={text.id}
							label={text.label}
							placeholder={text.placeholder}
							styleDiv={text.styleDiv}
							styleLabel={text.styleLabel}
							type={text.type}
							styleError='left-36 text-xs -bottom-4'
							i18Label={text.i18Label}
							errors={errors}
							{...register(text.id as RegisterId)}
						/>
					))}
				{!!dataFormGroupPassword &&
					dataFormGroupPassword.map((pass) => (
						<FormGroup
							key={pass.id}
							id={pass.id}
							label={pass.label}
							placeholder={pass.placeholder}
							styleDiv={pass.styleDiv}
							styleInput={pass.styleInput}
							styleLabel={pass.styleLabel}
							type={pass.type}
							styleError='left-36 text-xs -bottom-4'
							i18Label={pass.i18Label}
							errors={errors}
							{...register(pass.id as RegisterId)}
						>
							<p
								onClick={() => handleVisibilityChange('password1')}
								className='absolute right-2 cursor-pointer pb-1'
							>
								{pass.isVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
							</p>
						</FormGroup>
					))}
				<div className='flex items-center self-baseline h-4 w-48 pt-2'>
					{!!dataFormGroupCheckBox &&
						dataFormGroupCheckBox.map((checkBox) => (
							<FormGroup
								key={checkBox.id}
								id={checkBox.id}
								label={checkBox.label}
								styleDiv={checkBox.styleDiv}
								styleInput='flex-none'
								type={checkBox.type}
								styleError='left-0 text-xs -bottom-4'
								i18Label={checkBox.i18Label}
								errors={errors}
								{...register(checkBox.id as RegisterId)}
							/>
						))}
				</div>

				<Link
					to='/sign-in'
					className='self-end cursor-pointer font-semibold hover:text-[#939393]'
				>
					Đăng nhập
				</Link>
				<button
					type='submit'
					className='mt-3 rounded-xl w-full cursor-pointer p-[0.65rem] text-white font-semibold bg-[#02dcff] hover:bg-[#56e8ffe0]'
				>
					Đăng ký
				</button>
			</Form>
		</AuthContainer>
	);
};

export default SignUp;

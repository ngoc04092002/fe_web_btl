import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import React, { useState, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Form, Link } from 'react-router-dom';

import AuthContainer from '@/components/AuthLayoutWrapper';
import FormGroup from '@/components/AuthLayoutWrapper/FormGroup';
import { signUpUser } from '@/config/axiosActions';
import { initialSignupalues } from '@/constants/InitialValuesAuth';
import { schemaSignup } from '@/constants/SchemaYups';
import { dataFormGroupCheckBox, dataFormGroupText } from '@/constants/SignUpConstant';
import HeadTitle from '@/hooks/Head';
import { IFormSignUp, RegisterId } from '@/types/components/AuthLayoutWrapper/type';
import { initializePasswordValue, ISignUpPassword } from '@/types/pages/ISignUp';
import { getToast } from '@/utils/CustomToast';

const SignUp = () => {
	HeadTitle('Sign Up');

	const [visiblePassword, setVisiblePassword] = useState<initializePasswordValue>({
		'password1': false,
		'password2': false,
	});

	const { mutate, isLoading } = useMutation<
		AxiosResponse<string, any>,
		AxiosError,
		IFormSignUp,
		unknown
	>({
		mutationFn: (formData: IFormSignUp) => {
			const res = signUpUser({
				username: formData.group_form_username,
				email: formData.group_form_email,
				address: formData.group_form_address,
				gender: formData.group_form_male ? 'male' : 'female',
				password: formData.password1,
			});
			return res;
		},
	});

	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm<IFormSignUp>({
		defaultValues: initialSignupalues,
		resolver: yupResolver(schemaSignup),
	});
	const onSubmit: SubmitHandler<IFormSignUp> = async (data) => {
		mutate(data, {
			onError: (res: AxiosError) => {
				getToast(res.response?.data as string, 'error');
			},
			onSuccess: (res) => {
				getToast(res.data, 'success');
				reset();
			},
		});
	};

	const handleVisibilityChange: (value: string) => void = (id: string) => {
		setVisiblePassword((prev: initializePasswordValue) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	const dataFormGroupPassword: ISignUpPassword[] = useMemo(
		() => [
			{
				id: 'password1',
				label: 'password',
				placeholder: 'Nh???p m???t kh???u c???a b???n',
				styleDiv: 'mb-5',
				styleInput: 'pr-8',
				styleLabel: 'w-36',
				type: visiblePassword.password1 ? 'text' : 'password',
				isVisible: visiblePassword.password1,
				i18Label: 'M???t kh???u',
			},
			{
				id: 'password2',
				label: 'password2',
				placeholder: 'Nh???p l???i m???t kh???u c???a b???n',
				styleDiv: 'mb-5',
				styleInput: 'pr-8',
				styleLabel: 'w-36',
				type: visiblePassword.password2 ? 'text' : 'password',
				isVisible: visiblePassword.password2,
				i18Label: 'Nh???p l???i m???t kh???u',
			},
		],
		[visiblePassword.password1, visiblePassword.password2],
	);

	return (
		<AuthContainer id='sign-up'>
			<Form
				onSubmit={handleSubmit(onSubmit)}
				method='post'
				className='w-full h-full select-none p-3 flex items-center flex-col'
			>
				<h1 className='capitalize font-bold text-3xl mb-10'>????ng k??</h1>
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
								{...register(checkBox.id as RegisterId, {
									onChange(e) {
										const myId = e.target.id;
										const allCheckBox = document.querySelectorAll('input[type="checkbox"]');
										const input1 = allCheckBox[0] as HTMLInputElement;
										const input2 = allCheckBox[1] as HTMLInputElement;
										if (e.target.checked) {
											if (myId === 'male') {
												input2.checked = false;
											} else {
												input1.checked = false;
											}
										} else {
											if (myId === 'male' && !input2.checked) {
												input2.checked = true;
											} else {
												input1.checked = true;
											}
										}
									},
								})}
							/>
						))}
				</div>

				<Link
					to='/sign-in'
					className='self-end cursor-pointer font-semibold hover:text-[#939393]'
				>
					????ng nh???p
				</Link>
				<button
					disabled={isLoading}
					type='submit'
					className={`mt-3 rounded-xl w-full cursor-pointer p-[0.65rem] text-white font-semibold ${
						isLoading ? 'bg-[#ccc]' : 'bg-[#02dcff] hover:bg-[#56e8ffe0]'
					}`}
				>
					{isLoading ? 'Loading...' : '????ng k??'}
				</button>
			</Form>
		</AuthContainer>
	);
};

export default SignUp;

import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import React, { FC, useContext, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';

import FormGroup from '@/components/AuthLayoutWrapper/FormGroup';
import Button from '@/components/helpers/ButtonWrapper';
import { schemaFormEditPassword } from '@/constants/SchemaYups';
import { initialFormEditPassword } from '@/constants/initiallValues';
import { AuthContext } from '@/context/AuthProvider';
import { updatePassword } from '@/infrastructure/dashboardActions';
import { DashBoardFormIdEditPassword, IFormEditPassword } from '@/types/pages/IDashBoard';
import { ISignUpPassword } from '@/types/pages/ISignUp';
import { IUser } from '@/types/pages/types';
import { getToast } from '@/utils/CustomToast';

type Props = {};

const EditPassword: FC<Props> = () => {
	const { user } = useContext(AuthContext);
	const [visiblePassword, setVisiblePassword] = useState<{ [key: string]: boolean }>({
		'oldPassword': false,
		'password': false,
		'verifyPassword': false,
	});

	const { mutate, isLoading } = useMutation<
		AxiosResponse<string, any>,
		AxiosError,
		IFormEditPassword,
		unknown
	>({
		mutationFn: (formData: IFormEditPassword) => {
			const res = updatePassword({
				email: (user as IUser)?.email, //fix
				oldPassword: formData.oldPassword,
				password: formData.password,
			});

			return res;
		},
	});

	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm<IFormEditPassword>({
		defaultValues: initialFormEditPassword,
		resolver: yupResolver(schemaFormEditPassword),
	});

	const onSubmit: (value: IFormEditPassword) => void = (data) => {
		mutate(data, {
			onError: (res: AxiosError) => {
				getToast(res.response?.data as string, 'error');
			},
			onSuccess: (res) => {
				if (res.data === 'success') {
					getToast('Cập nhật thành công!', 'success');
					reset();
				}
			},
		});
	};

	const handleVisibilityChange: (value: string) => void = (id: string) => {
		setVisiblePassword((prev: { [key: string]: boolean }) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	const dataFormGroupPassword: ISignUpPassword[] = useMemo(
		() => [
			{
				id: 'oldPassword',
				label: 'oldPassword',
				placeholder: 'Nhập mật khẩu của bạn',
				styleDiv: 'mb-10 flex-wrap',
				styleInput: 'pr-8 border-solid border-2 border-[#005aff47]',
				styleLabel: 'w-36',
				type: visiblePassword.oldPassword ? 'text' : 'password',
				isVisible: visiblePassword.oldPassword,
				i18Label: 'Mật khẩu cũ',
			},
			{
				id: 'password',
				label: 'password',
				placeholder: 'Nhập mật khẩu của bạn',
				styleDiv: 'mb-10 flex-wrap',
				styleInput: 'pr-8 border-solid border-2 border-[#005aff47]',
				styleLabel: 'w-36',
				type: visiblePassword.password ? 'text' : 'password',
				isVisible: visiblePassword.password,
				i18Label: 'Mật khẩu mới',
			},
			{
				id: 'verifyPassword',
				label: 'verifyPassword',
				placeholder: 'Nhập lại mật khẩu của bạn',
				styleDiv: 'mb-5 flex-wrap',
				styleInput: 'pr-8 border-solid border-2 border-[#005aff47]',
				styleLabel: 'w-36',
				type: visiblePassword.verifyPassword ? 'text' : 'password',
				isVisible: visiblePassword.verifyPassword,
				i18Label: 'Nhập lại mật khẩu',
			},
		],
		[visiblePassword.oldPassword, visiblePassword.password, visiblePassword.verifyPassword],
	);
	return (
		<Form
			onSubmit={handleSubmit(onSubmit)}
			method='post'
			className='flex items-center md:px-10 px-4 justify-between flex-wrap'
			hidden
		>
			<div className='mx-auto md:w-[66%] w-full flex flex-col'>
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
							styleError='sm-500:left-36 left-0 text-xs sm-500:-bottom-4 -bottom-[2.4rem]'
							i18Label={pass.i18Label}
							errors={errors}
							{...register(pass.id as DashBoardFormIdEditPassword)}
						>
							<p
								onClick={() => handleVisibilityChange(pass.id)}
								className='absolute cursor-pointer md:right-[10px] sm-500:top-[5px] top-[28px] right-[7px]'
							>
								{pass.isVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
							</p>
						</FormGroup>
					))}
				<Button
					styles='mt-4 self-end'
					isLoading={isLoading}
				>
					Xác nhận
				</Button>
			</div>
		</Form>
	);
};

export default EditPassword;

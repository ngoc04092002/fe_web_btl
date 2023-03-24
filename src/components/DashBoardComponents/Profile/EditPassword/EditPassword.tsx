import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';

import FormGroup from '@/components/AuthLayoutWrapper/FormGroup';
import Button from '@/components/helpers/ButtonWrapper';
import { schemaFormEditPassword } from '@/constants/SchemaYups';
import { initialFormEditPassword } from '@/constants/initiallValues';
import { DashBoardFormId } from '@/types/components/AuthLayoutWrapper/type';
import { IFormEditPassword } from '@/types/pages/IDashBoard';
import { ISignUpPassword } from '@/types/pages/ISignUp';

type Props = {};

const EditPassword: FC<Props> = () => {
	const [visiblePassword, setVisiblePassword] = useState<{ [key: string]: boolean }>({
		'password': false,
		'verifyPassword': false,
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
		console.log(data);
		reset();
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
				id: 'password',
				label: 'password',
				placeholder: 'Nhập mật khẩu của bạn',
				styleDiv: 'mb-10 flex-wrap',
				styleInput: 'pr-8 border-solid border-2 border-[#005aff47]',
				styleLabel: 'w-36',
				type: visiblePassword.password ? 'text' : 'password',
				isVisible: visiblePassword.password,
				i18Label: 'Mật khẩu',
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
		[visiblePassword.password, visiblePassword.verifyPassword],
	);
	return (
		<Form
			onSubmit={handleSubmit(onSubmit)}
			method='post'
			className='flex items-center md:px-10 px-4 justify-between flex-wrap'
		>
			<div className='mx-auto w-[66%] flex flex-col'>
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
							{...register(pass.id as DashBoardFormId)}
						>
							<p
								onClick={() => handleVisibilityChange(pass.id)}
								className='absolute cursor-pointer sm:right-[10px] sm:top-[4px] top-[26px] right-[-18px]'
							>
								{pass.isVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
							</p>
						</FormGroup>
					))}
				<Button styles='mt-4 self-end'>Xác nhận</Button>
			</div>
		</Form>
	);
};

export default EditPassword;

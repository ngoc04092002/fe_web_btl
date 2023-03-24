import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';

import FormGroup from '@/components/AuthLayoutWrapper/FormGroup';
import Button from '@/components/helpers/ButtonWrapper';
import { schemaFormEditProfie } from '@/constants/SchemaYups';
import { initialFormEditProfile } from '@/constants/initiallValues';
import { IFromEditProfile } from '@/types/pages/IDashBoard';
import { getImage } from '@/utils/CustomImagePath';

type Props = {};

const EditProfile: FC<Props> = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm<IFromEditProfile>({
		defaultValues: initialFormEditProfile,
		resolver: yupResolver(schemaFormEditProfie),
	});

	const onSubmit: (value: IFromEditProfile) => void = (data) => {
		console.log(data);
		reset();
	};
	return (
		<Form
			onSubmit={handleSubmit(onSubmit)}
			method='post'
			className='flex items-center md:px-10 px-4 justify-between flex-wrap'
		>
			<div className='flex flex-col items-center mx-auto mb-8'>
				<div>
					<img
						src={getImage('user.png')}
						alt='user'
						className='w-60 h-60 object-cover object-center mb-6'
					/>
				</div>
				<Button>Thay đổi</Button>
			</div>
			<div className='mx-auto w-[66%] flex flex-col'>
				<FormGroup
					key={'username'}
					id={'username'}
					label={'username'}
					placeholder={'Nhập tên của bạn'}
					styleLabel={'w-28 whitespace-nowrap'}
					type={'text'}
					styleInput={'border-solid border-2 border-[#005aff47] '}
					styleDiv={'mr-3 mb-8 flex-wrap'}
					styleError='left-36 text-xs -bottom-4'
					i18Label={'Tên đăng nhập'}
					errors={errors}
					{...register('username')}
				/>
				<FormGroup
					key={'email'}
					id={'email'}
					label={'email'}
					placeholder={'Nhập email của bạn'}
					styleLabel={'w-28'}
					type={'text'}
					styleDiv={'mb-8 flex-wrap'}
					styleInput={'border-solid border-2 border-[#005aff47]'}
					styleError='left-36 text-xs -bottom-4'
					i18Label={'Email'}
					errors={errors}
					{...register('email')}
				/>
				<FormGroup
					key={'address'}
					id={'address'}
					label={'address'}
					placeholder={'Ngõ, xóm, phường, thị xã, tỉnh (thành phố)'}
					styleDiv={'mb-8 flex-wrap'}
					styleInput={'border-solid border-2 border-[#005aff47]'}
					styleLabel={'w-28'}
					type={'text'}
					styleError='left-36 text-xs -bottom-4'
					i18Label={'Địa chỉ'}
					errors={errors}
					{...register('address')}
				/>
				<FormGroup
					key={'sdt'}
					id={'sdt'}
					label={'sdt'}
					placeholder={'0123456789'}
					styleDiv={'mb-8 flex-wrap'}
					styleLabel={'w-28'}
					styleInput={'border-solid border-2 border-[#005aff47]'}
					type={'text'}
					styleError='left-36 text-xs -bottom-4'
					i18Label={'Số điện thoại'}
					errors={errors}
					{...register('sdt')}
				/>
				<Button styles='mt-4 self-end'>Xác nhận</Button>
			</div>
		</Form>
	);
};

export default EditProfile;

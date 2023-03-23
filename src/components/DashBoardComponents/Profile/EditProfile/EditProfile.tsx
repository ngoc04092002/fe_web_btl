import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';

import FormGroup from '@/components/AuthLayoutWrapper/FormGroup';
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
				<div className='cursor-pointer px-4 py-2 font-semibold bg-[#01adba] text-white hover:bg-[#1cbcc7]'>
					Thay đổi
				</div>
			</div>
			<div className='mx-auto w-[66%]'>
				<FormGroup
					key={'username'}
					id={'username'}
					label={'username'}
					placeholder={'Nhập tên của bạn'}
					styleLabel={'w-31 whitespace-nowrap'}
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
					placeholder={'Nhập tên của bạn'}
					styleLabel={'w-31'}
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
					placeholder={'Nhập tên của bạn'}
					styleDiv={'mb-8 flex-wrap'}
					styleInput={'border-solid border-2 border-[#005aff47]'}
					styleLabel={'w-31'}
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
					placeholder={'Nhập tên của bạn'}
					styleDiv={'mb-8 flex-wrap'}
					styleLabel={'w-31'}
					styleInput={'border-solid border-2 border-[#005aff47]'}
					type={'text'}
					styleError='left-36 text-xs -bottom-4'
					i18Label={'Số điện thoại'}
					errors={errors}
					{...register('sdt')}
				/>
			</div>
		</Form>
	);
};

export default EditProfile;

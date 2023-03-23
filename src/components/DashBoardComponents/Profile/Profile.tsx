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

const Profile: FC<Props> = () => {
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
		<div className='w-full bg-white rounded-md p-3 mb-20 shadow-lg'>
			<h1 className='text-[1.3rem] font-medium text-center mb-12'>Thông tin cá nhân</h1>
			<Form
				onSubmit={handleSubmit(onSubmit)}
				method='post'
				className='flex items-center px-12 justify-between flex-wrap'
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
				<div>
					<div className='flex items-center justify-between mb-8'>
						<FormGroup
							key={'username'}
							id={'username'}
							label={'username'}
							placeholder={'Nhập tên của bạn'}
							styleLabel={'w-31'}
							type={'text'}
							styleInput={'min-w-[17rem] border-solid border-2 border-[#005aff47]'}
							styleDiv={'mr-3 '}
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
							styleInput={'min-w-[17rem]'}
							styleError='left-36 text-xs -bottom-4'
							i18Label={'Tên đăng nhập'}
							errors={errors}
							{...register('email')}
						/>
					</div>
					<FormGroup
						key={'address'}
						id={'address'}
						label={'address'}
						placeholder={'Nhập tên của bạn'}
						styleDiv={'mb-8'}
						styleLabel={'w-31'}
						type={'text'}
						styleError='left-36 text-xs -bottom-4'
						i18Label={'Tên đăng nhập'}
						errors={errors}
						{...register('address')}
					/>
					<FormGroup
						key={'sdt'}
						id={'sdt'}
						label={'sdt'}
						placeholder={'Nhập tên của bạn'}
						styleDiv={'mb-8'}
						styleLabel={'w-31'}
						type={'text'}
						styleError='left-36 text-xs -bottom-4'
						i18Label={'Tên đăng nhập'}
						errors={errors}
						{...register('sdt')}
					/>
				</div>
			</Form>
		</div>
	);
};

export default Profile;

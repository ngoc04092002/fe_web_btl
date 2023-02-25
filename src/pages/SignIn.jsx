import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AuthContainer from '@/components/AuthLayoutWrapper';
import FormGroup from '@/components/AuthLayoutWrapper/FormGroup';
import { getImage } from '@/utils/CustomImagePath';

const SignIn = () => {
	const [visiblePassword, setVisiblePassword] = useState(false);

	const handleVisibilityChange = () => {
		setVisiblePassword(!visiblePassword);
	};
	return (
		<AuthContainer id='sign-in'>
			<div className='w-full lg:w-[45%] lg:h-full h-[60%] overflow-hidden'>
				<img
					src={getImage('vali.gif')}
					alt='vali'
					className='select-none w-full h-full object-center object-cover lg:rounded-l-2xl rounded-t-2xl lg:rounded-tr-none'
				/>
			</div>
			<div className='w-[55%] h-full select-none p-3 flex items-center flex-col'>
				<h1 className='capitalize font-bold text-3xl mb-12'>Đăng nhập</h1>
				<FormGroup
					id='group_form_email'
					label='email'
					placeholder='Nhập email của bạn'
					styleDiv='mb-10'
					styleLabel='w-[4.6rem]'
					type='text'
					i18Label='Email'
				/>
				<FormGroup
					id='group_form__password'
					label='password'
					placeholder='Nhập mật khẩu của bạn'
					styleDiv='mb-5'
					styleLabel='w-[4.6rem]'
					styleInput='pr-8'
					type={visiblePassword ? 'text' : 'password'}
					i18Label='Mật khẩu'
				>
					<p
						onClick={handleVisibilityChange}
						className='absolute right-2 cursor-pointer pb-1'
					>
						{visiblePassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
					</p>
				</FormGroup>
				<div className='flex items-center justify-between w-full px-3 mt-3'>
					<Link
						to='/forget-password'
						className='inline-block cursor-pointer font-semibold hover:text-blue-400 text-blue-600'
					>
						Quên mật khẩu?
					</Link>
					<Link
						to='/sign-up'
						className='inline-block cursor-pointer font-semibold hover:text-[#939393]'
					>
						Đăng ký
					</Link>
				</div>
				<button className='mt-3 rounded-xl w-full cursor-pointer p-[0.65rem] text-white font-semibold bg-[#02dcff] hover:bg-[#62eaffe0]'>
					Đăng nhập
				</button>
				<div className='bg-white flex items-center w-full h-10 px-2 rounded-lg cursor-pointer select-none lg:mt-2 mt-1'>
					<img
						src={getImage('google.png')}
						alt='google'
						className='h-full object-cover object-center mr-3'
					/>
					<span className='tracking-[0.3em]'>Google</span>
				</div>
			</div>
		</AuthContainer>
	);
};

export default SignIn;

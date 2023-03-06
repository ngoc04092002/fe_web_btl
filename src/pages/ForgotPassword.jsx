import { ArrowRightOutlined, MailOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const regex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}'); // validate email

const ForgotPassword = () => {
	const [acceptCond, setAcceptCond] = useState(false);
	const [email, setEmail] = useState('');

	const handleAcceptSend = () => {
		if (!regex.test(email)) {
			toast.warn('Email không hợp lệ!', {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
			return;
		}
		setAcceptCond(!acceptCond);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSendEmail = () => {
		console.log(email);
	};

	// set head
	useEffect(() => {
		document.title = 'Forgot Password';
	}, []);
	return (
		<section
			data-testid='forgot_password'
			className='w-full h-screen flex items-center justify-center px-3'
		>
			<div className='bg-white h-56 shadow-2xl w-96 rounded-xl p-3'>
				<h1 className='capitalize font-bold text-2xl text-center mb-8'>
					<MailOutlined className='align-baseline mr-2' />
					Nhập email của bạn
				</h1>
				<div className='flex items-center relative h-10 ring-1 mb-7'>
					<ArrowLeftOutlined
						id='left_outlined'
						onClick={handleAcceptSend}
						className={`absolute h-full pt-2.5 w-10 duration-300 ${
							acceptCond ? 'left-80 opacity-100' : 'left-0 opacity-100'
						} bg-blue-600 cursor-pointer text-white`}
					/>
					<ArrowRightOutlined
						id='right_outlined'
						onClick={handleAcceptSend}
						className={`absolute h-full pt-2.5 w-10 duration-300 ${
							acceptCond ? 'left-80 opacity-0 invisible' : 'left-0 opacity-100 visible'
						} bg-blue-600 cursor-pointer text-white`}
					/>
					<input
						type='text'
						placeholder='Email: yahoo@gmail.com'
						name='email'
						id='email'
						onChange={handleEmailChange}
						disabled={acceptCond}
						className={`flex-1 ${
							acceptCond ? 'pr-12 pl-3 bg-[#ccc]' : 'pr-3 pl-12'
						} caret-blue-500 h-full`}
					/>
				</div>
				<Link
					to={acceptCond ? '' : '/sign-in'}
					onClick={acceptCond && handleSendEmail}
					className='self-end w-full text-center bg-blue-600 hover:bg-blue-500 text-white cursor-pointer inline-block font-semibold h-10 rounded-lg pt-[6px]'
				>
					{acceptCond ? 'Gửi' : 'Đăng nhập'}
				</Link>
			</div>
		</section>
	);
};

export default ForgotPassword;

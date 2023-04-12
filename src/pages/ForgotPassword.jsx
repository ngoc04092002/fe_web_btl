import { ArrowRightOutlined, MailOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Loading from '@/components/Loading/Loading';
import HeadTitle from '@/hooks/Head';
import { sendMail } from '@/infrastructure/authActions';
import { getToast } from '@/utils/CustomToast';

const regex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}'); // validate email

const ForgotPassword = () => {
	HeadTitle('Forgot Password');
	const [acceptCond, setAcceptCond] = useState(false);
	const [email, setEmail] = useState('');

	const { mutate, isLoading } = useMutation({
		mutationFn: (email) => {
			const res = sendMail(email);
			return res;
		},
	});

	const handleAcceptSend = () => {
		if (!regex.test(email)) {
			getToast('Email không hợp lệ!', 'warn');
			return;
		}
		setAcceptCond(!acceptCond);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSendEmail = () => {
		mutate(email, {
			onError: (res) => {
				if (res?.response?.data) {
					getToast(res.response.data, 'error');
				} else {
					getToast('', 'network bad');
				}
			},
			onSuccess: (res) => {
				if (res.data === 'success') {
					getToast('Gửi thành công hãy kiểm tra email!!', 'success');
					setAcceptCond(() => false);
					setEmail('');
				}
			},
		});
	};

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
					className={`${
						isLoading ? 'bg-[#ccc] cursor-default' : 'bg-blue-600 hover:bg-blue-500 cursor-pointer'
					} self-end w-full text-center text-white  inline-block font-semibold h-10 rounded-lg pt-[6px]`}
				>
					{acceptCond ? isLoading ? <Loading /> : 'Gửi' : 'Đăng nhập'}
				</Link>
			</div>
		</section>
	);
};

export default ForgotPassword;

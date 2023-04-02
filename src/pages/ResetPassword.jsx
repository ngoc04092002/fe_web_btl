import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

import Loading from '@/components/Loading/Loading';
import HeadTitle from '@/hooks/Head';
import { resetPassword } from '@/infrastructure/authActions';
import { getToast } from '@/utils/CustomToast';

// eslint-disable-next-line no-restricted-globals
const { origin } = location;

const ResetPassword = () => {
	HeadTitle('reset-password');
	const { e } = useParams();

	const { data, isLoading, isError, error, isSuccess } = useQuery({
		queryKey: ['reset-password', e],
		queryFn: () => resetPassword(e),
	});

	if (isError) {
		if (typeof error.response?.data === 'string') {
			getToast(error.response?.data, 'error');
			return;
		}
		getToast('', 'network bad');
		return;
	}

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className='w-fit mx-auto my-[100px]'>
			{isSuccess && data.data === 'success' && (
				<>
					<h1>Mật khẩu mới của bạn là: 12345678</h1>
					<a
						href={`${origin}/sign-in`}
						className='underline text-blue-700 p-4'
					>
						Đăng nhập
					</a>
				</>
			)}
		</div>
	);
};

export default ResetPassword;

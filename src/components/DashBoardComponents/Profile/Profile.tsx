import React, { FC, useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { AuthContext } from '@/context/AuthProvider';
import { IUser } from '@/types/pages/types';
import { getImage } from '@/utils/CustomImagePath';

type Props = {};

const Profile: FC<Props> = () => {
	const { user } = useContext(AuthContext);
	const location = useLocation();
	const isEdit: boolean = location.pathname.includes('edit');

	const userInfo: { type: string; value: string }[] = [
		{
			type: 'Tên đăng nhập',
			value: (user as IUser)?.username,
		},
		{
			type: 'Email',
			value: (user as IUser)?.email,
		},
		{
			type: 'Địa chỉ',
			value: (user as IUser)?.address || '',
		},
		{
			type: 'Số điện thoại',
			value: (user as IUser)?.sdt || '',
		},
		{
			type: 'Giới tính',
			value: (user as IUser)?.gender === 'male' ? 'Name' : 'Nữ',
		},
	];
	return (
		<div className='w-full bg-white rounded-md p-3 mb-20 shadow-lg'>
			<h1 className='text-[1.3rem] font-medium text-center mb-12'>Thông tin cá nhân</h1>
			{isEdit ? (
				<Outlet />
			) : (
				<div className='flex items-center px-10 justify-between flex-wrap'>
					<div className='mx-auto mb-8'>
						<div>
							<img
								src={(user as IUser)?.avatar || getImage('user.png')}
								alt='user'
								className='w-60 h-60 object-cover object-center mb-6'
							/>
						</div>
					</div>
					<div className='mx-auto'>
						<ul className='text-xl'>
							{userInfo.map((u, index) => (
								<li
									className='mb-5 flex items-center flex-wrap'
									key={index}
								>
									<p className='mr-4'>{u.type}:</p>
									<p className='font-semibold'>{u.value}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default Profile;

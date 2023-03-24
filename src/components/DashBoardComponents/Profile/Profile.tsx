import React, { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { getImage } from '@/utils/CustomImagePath';

type Props = {};

const Profile: FC<Props> = () => {
	const location = useLocation();
	const isEdit: boolean = location.pathname.includes('edit');
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
								src={getImage('user.png')}
								alt='user'
								className='w-60 h-60 object-cover object-center mb-6'
							/>
						</div>
					</div>
					<div>a</div>
				</div>
			)}
		</div>
	);
};

export default Profile;

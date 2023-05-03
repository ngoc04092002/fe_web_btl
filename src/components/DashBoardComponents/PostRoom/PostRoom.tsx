import React, { useContext, useLayoutEffect } from 'react';
import { Outlet, useNavigate, useOutlet } from 'react-router-dom';

import './post-room.scss';
import { AuthContext } from '@/context/AuthProvider';
import { getToast } from '@/utils/CustomToast';

type Props = {};

const PostRoom = (props: Props) => {
	const { user } = useContext(AuthContext);
	const outlet = useOutlet();
	const navigation = useNavigate();
	useLayoutEffect(() => {
		if (Object.keys(user)) {
			if (!(user as any)?.sdt?.trim()) {
				getToast('Bạn cần cập nhật số điện thoại', 'warn');
				navigation('/dash-board/profile');
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{outlet ? (
				<Outlet />
			) : (
				<div className='post_room bg-white p-4 w-full mb-12'>
					<h1 className='font-bold text-lg mb-4'>Các bài đăng phòng</h1>
				</div>
			)}
		</>
	);
};

export default PostRoom;

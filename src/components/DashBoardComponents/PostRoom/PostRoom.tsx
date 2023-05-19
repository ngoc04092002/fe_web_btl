import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate, useOutlet } from 'react-router-dom';

import './post-room.scss';
import ListPostRoom from './ListPostRoom';

import { AuthContext } from '@/context/AuthProvider';
import { IUser } from '@/types/pages/types';
import { getToast } from '@/utils/CustomToast';

type Props = {};

const PostRoom = (props: Props) => {
	const { user } = useContext(AuthContext);
	const outlet = useOutlet();
	const navigation = useNavigate();
	useEffect(() => {
		if (Object.keys(user).length) {
			if (!(user as IUser)?.sdt?.trim()) {
				getToast('Bạn cần cập nhật số điện thoại', 'warn');
				navigation('/dash-board/profile');
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!Object.keys(user).length) {
		return <></>;
	}

	return <>{outlet ? <Outlet /> : <ListPostRoom userId={(user as IUser)?.id as number} />}</>;
};

export default PostRoom;

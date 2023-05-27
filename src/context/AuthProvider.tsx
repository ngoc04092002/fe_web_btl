/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React, { FC, createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getUserInfo } from '@/infrastructure/authActions';
import { IAuthContext, PropsAuth } from '@/types/context/type';
import { IUser } from '@/types/pages/types';
import { getToast } from '@/utils/CustomToast';

export const AuthContext = createContext<IAuthContext>({
	user: {},
	setUser: () => {},
});

const userFetch = {
	username: 'Vũ Văn Ngọc',
	email: 'vungoc23387@gmail.com',
	address: 'Ngõ 25, số nhà 13, Từ Sơn, Bắc Ninh',
	sdt: '0338787233',
	gender: 'male',
	avatar: 'https://tse1.explicit.bing.net/th?id=OIP.Xwquh7b39vo0RocyWVTvuQHaHH&pid=Api&P=0',
};

const AuthProvider: FC<PropsAuth> = ({ children }) => {
	const accessToken = localStorage.getItem('accessToken') || '';
	// const [user, setUser] = useState<{} | IUser>(userFetch);
	const [user, setUser] = useState<IUser | {}>({});
	const navigate = useNavigate();

	useEffect(() => {
		function getUser() {
			if (accessToken && !Object.keys(user).length) {
				getUserInfo(accessToken)
					.then((data) => {
						setUser(data.data);
					})
					.catch((e) => {
						console.log(e);
						localStorage.clear();
						setUser({});
						localStorage.removeItem('accessToken');
						getToast(e?.response?.data, 'error');
						navigate('/sign-in');
					});
			}
		}
		getUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

import React, { FC, createContext, useState, useEffect } from 'react';

import { getUserInfo, refreshToken } from '@/infrastructure/authActions';
import { IAuthContext, PropsAuth } from '@/types/context/type';
import { IUser } from '@/types/pages/types';

export const AuthContext = createContext<IAuthContext>({
	user: {},
	setUser: () => {},
});

const AuthProvider: FC<PropsAuth> = ({ children }) => {
	const [user, setUser] = useState<{} | IUser>({});

	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken');
		async function getUser() {
			// const re = await refreshToken();
			// if (re.data === 'no') {
			// 	localStorage.clear();
			// 	setUser({});
			// 	return;
			// }

			if (accessToken && !Object.keys(user).length) {
				const res = await getUserInfo(accessToken);
				setUser(res.data);
			}
		}
		getUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

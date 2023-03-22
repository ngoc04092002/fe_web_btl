import React, { FC, createContext, useState, useEffect } from 'react';

import { getUserInfo } from '@/infrastructure/authActions';
import { IAuthContext, PropsAuth } from '@/types/context/type';
import { IUser } from '@/types/pages/types';

export const AuthContext = createContext<IAuthContext>({
	user: {},
	setUser: () => {},
});

const AuthProvider: FC<PropsAuth> = ({ children }) => {
	const [user, setUser] = useState<{} | IUser>({});

	console.log(user);

	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken');
		async function getUser() {
			if (accessToken) {
				console.log(user);
				const res = await getUserInfo(accessToken);
				setUser(res.data);
			}
		}
		return () => {
			getUser();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

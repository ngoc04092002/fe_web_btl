import { getAuth, UserInfo } from 'firebase/auth';
import React, { FC, createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getUserInfo } from '@/infrastructure/authActions';
import { IAuthContext, PropsAuth } from '@/types/context/type';
import { IUser } from '@/types/pages/types';

export const AuthContext = createContext<IAuthContext>({
	user: {},
	setUser: () => {},
});

const AuthProvider: FC<PropsAuth> = ({ children }) => {
	const navigation = useNavigate();
	const auth = getAuth();
	const [user, setUser] = useState<{} | (UserInfo & IUser)>({});
	// const isUserExist = Object.keys(user).length;

	useEffect(() => {
		const unsubscribed = auth.onIdTokenChanged((u) => {
			if (u?.uid) {
				localStorage.setItem('accessToken', u.refreshToken);
				setUser(u);
				navigation('/');
				return;
			}
		});

		return () => {
			unsubscribed();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if ((user as UserInfo)?.uid || (user as UserInfo)?.uid === undefined) {
			return;
		}
		const accessToken = localStorage.getItem('accessToken');
		async function getUser() {
			if (accessToken) {
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

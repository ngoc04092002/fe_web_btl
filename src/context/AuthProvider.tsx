import { getAuth, UserInfo } from 'firebase/auth';
import React, { FC, createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { IAuthContext, PropsAuth } from '@/types/context/type';
import { IUser } from '@/types/pages/types';
export const AuthContext = createContext<IAuthContext>({
	user: {},
	setUser: () => {},
});

const AuthProvider: FC<PropsAuth> = ({ children }) => {
	const navigation = useNavigate();
	const [user, setUser] = useState<{} | UserInfo | IUser>({});

	const auth = getAuth();
	useEffect(() => {
		const unsubscribed = auth.onIdTokenChanged((u) => {
			if (u?.uid) {
				localStorage.setItem('accessToken', u.refreshToken);
				setUser(u);
				return;
			}
			setUser({});
			localStorage.clear();
			navigation('/sign-in');
		});

		return () => {
			unsubscribed();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

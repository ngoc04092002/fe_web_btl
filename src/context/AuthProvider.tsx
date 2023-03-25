// import { useQuery } from '@tanstack/react-query';
import React, { FC, createContext, useState } from 'react';

// import Loading from '@/components/Loading';
// import { getUserInfo, refreshToken } from '@/infrastructure/authActions';
import { IAuthContext, PropsAuth } from '@/types/context/type';
import { IUser } from '@/types/pages/types';

export const AuthContext = createContext<IAuthContext>({
	user: {},
	setUser: () => {},
});

const AuthProvider: FC<PropsAuth> = ({ children }) => {
	const [user, setUser] = useState<{} | IUser>({});
	// const { data, isLoading } = useQuery({
	// 	queryKey: ['refresh-cookie'],
	// 	queryFn: () => refreshToken(),
	// 	staleTime: 10 * 60 * 1000,
	// 	cacheTime: 20 * 60 * 1000,
	// });

	// useEffect(() => {
	// 	const accessToken = localStorage.getItem('accessToken');
	// 	async function getUser() {
	// 		if (data?.data === 'no') {
	// 			localStorage.clear();
	// 			setUser({});
	// 			return;
	// 		}

	// 		if (accessToken && !Object.keys(user).length) {
	// 			const res = await getUserInfo(accessToken);
	// 			setUser(res.data);
	// 		}
	// 	}
	// 	getUser();
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [data]);

	// if (isLoading) {
	// 	return <Loading />;
	// }

	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

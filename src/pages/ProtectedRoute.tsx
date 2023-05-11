import React, { useContext, useLayoutEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { AuthContext } from '@/context/AuthProvider';

const ProtectedRoute = () => {
	const navigation = useNavigate();
	const { setUser } = useContext(AuthContext);
	useLayoutEffect(() => {
		if (!localStorage.getItem('accessToken')) {
			localStorage.clear();
			setUser({});
			navigation('/sign-in');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return <Outlet />;
};

export default ProtectedRoute;

import React, { useLayoutEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
	const navigation = useNavigate();

	useLayoutEffect(() => {
		if (!localStorage.getItem('accessToken')) {
			navigation('/sign-in');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return <Outlet />;
};

export default ProtectedRoute;

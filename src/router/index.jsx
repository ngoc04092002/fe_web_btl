import { createBrowserRouter, Outlet } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

import ErrorAuthLayout from './AuthLayout/Error';

const AuthLayout = () => {
	return <Outlet />;
};

export const routers = createBrowserRouter([
	{
		element: <AuthLayout />,
		errorElement: <ErrorAuthLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: () => {
					//call api
					return {
						id: 1,
						name: 'test',
					};
				},
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
]);

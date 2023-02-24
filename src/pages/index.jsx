import { createBrowserRouter, Outlet } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import Register from './Register';

const AuthLayout = () => {
	return <Outlet />;
};

export const routers = createBrowserRouter([
	{
		element: <AuthLayout />,
		errorElement: <NotFound />,
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

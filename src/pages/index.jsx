import { createBrowserRouter, Outlet } from 'react-router-dom';

import ForgotPassword from './ForgotPassword';
import Home from './Home';
import NotFound from './NotFound';
import SignIn from './SignIn';
import SignUp from './SignUp';

const AuthLayout = () => {
	return <Outlet />;
};

export const routes = createBrowserRouter([
	{
		element: <AuthLayout />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/sign-up',
				element: <SignUp />,
			},
			{
				path: '/sign-in',
				element: <SignIn />,
			},
			{
				path: '/forgot-password',
				element: <ForgotPassword />,
			},
			{
				path: '/',
				element: <Home />,
			},
		],
	},
]);

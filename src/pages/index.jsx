import { createBrowserRouter, Outlet } from 'react-router-dom';

import ForgotPassword from './ForgotPassword';
import Home from './Home';
import NotFound from './NotFound';
import ProtectedRoute from './ProtectedRoute';
import SignIn from './SignIn';
import SignUp from './SignUp';

import IntroduceObj from '@/components/IntroduceObj';
import AuthProvider from '@/context/AuthProvider';

const AuthLayout = () => {
	return (
		<AuthProvider>
			<Outlet />
		</AuthProvider>
	);
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
				element: <ProtectedRoute />,
				children: [
					{
						path: '/',
						element: <Home />,
						children: [
							{
								path: '/',
								element: <IntroduceObj />,
							},
						],
					},
				],
			},
		],
	},
]);

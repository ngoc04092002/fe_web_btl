import { createBrowserRouter, Outlet } from 'react-router-dom';

import DashBoard from './Dashboard';
import Profile from './Dashboard/Profile';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import NotFound from './NotFound';
import ProtectedRoute from './ProtectedRoute';
import SignIn from './SignIn';
import SignUp from './SignUp';

import DashBoardMain from '@/components/DashBoardComponents/DashBoardMain';
import WrapperElm from '@/components/WrapperElm';
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
								element: <WrapperElm />,
							},
							{
								path: '/dash-board/',
								element: <DashBoard />,
								children: [
									{
										path: 'profile',
										element: <Profile />,
									},
									{
										path: '',
										element: <DashBoardMain />,
									},
								],
							},
						],
					},
				],
			},
		],
	},
]);

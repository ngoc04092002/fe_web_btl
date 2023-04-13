import { useEffect, useState } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';

import DashBoard from './Dashboard';
import FeedBack from './FeedBack';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import News from './News';
import NotFound from './NotFound';
import ProtectedRoute from './ProtectedRoute';
import ResetPassword from './ResetPassword';
import SignIn from './SignIn';
import SignUp from './SignUp';

import {
	CalendarContainer,
	DashBoardMain,
	EditPassword,
	EditProfile,
	Profile,
	WrapperElm,
} from '@/components';
import Loading from '@/components/Loading/Loading';
import { AuthProvider, ContextWrapper } from '@/context';

const AuthLayout = () => {
	const [load, setLoad] = useState(true);

	useEffect(() => {
		function isLoaded() {
			setLoad(false);
		}
		window.addEventListener('load', isLoaded);
		return () => {
			window.removeEventListener('load', isLoaded);
		};
	}, []);

	if (load) {
		return <Loading />;
	}
	return (
		<AuthProvider>
			<ContextWrapper>
				<Outlet />
			</ContextWrapper>
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
				path: '/reset-password/:e',
				element: <ResetPassword />,
			},
			{
				path: 'news/:topic?/:category?',
				element: <News />,
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
								path: 'feedback',
								element: <FeedBack />,
							},
							{
								path: 'dash-board',
								element: <DashBoard />,
								children: [
									{
										path: '',
										element: <DashBoardMain />,
									},
									{
										path: 'profile',
										element: <Profile />,
										children: [
											{
												path: 'edit-password',
												element: <EditPassword />,
											},
											{
												path: 'edit-profile',
												element: <EditProfile />,
											},
										],
									},
									{
										path: 'calendar',
										element: <CalendarContainer />,
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

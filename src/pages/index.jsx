import { createBrowserRouter, Outlet } from 'react-router-dom';

import Profile from '../components/DashBoardComponents/Profile';

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

import CalendarContainer from '@/components/Calendar';
import DashBoardMain from '@/components/DashBoardComponents/DashBoardMain';
import EditPassword from '@/components/DashBoardComponents/Profile/EditPassword';
import EditProfile from '@/components/DashBoardComponents/Profile/EditProfile';
import WrapperElm from '@/components/WrapperElm';
import AuthProvider from '@/context/AuthProvider';
import ContextWrapper from '@/context/ContextWrapper';

const AuthLayout = () => {
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

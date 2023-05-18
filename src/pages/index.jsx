import { useEffect, useState } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';

import { Admin, FeedBackForgotPassword, ANews } from './Admin';
import { ChatMessagePage, ClientFeedback, DashBoard, OrdersDash } from './Dashboard';
import FeedBack from './FeedBack';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import { Account, MainInduction, RentRoom } from './Inductions';
import LaterView from './LaterView';
import News from './News';
import NotFound from './NotFound';
import ProtectedRoute from './ProtectedRoute';
import QA from './QA';
import ResetPassword from './ResetPassword';
import SearchDetailRoom from './SearchDetailRoom';
import SignIn from './SignIn';
import SignUp from './SignUp';

import {
	AddPostRoom,
	CalendarContainer,
	DashBoardMain,
	EditPassword,
	EditProfile,
	PostRoom,
	Profile,
	QuillText,
	RoomItem,
	WrapperElm,
} from '@/components';
import Loading from '@/components/Loading';
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
		return <Loading styles='!color-main' />;
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
				path: '/reset-password/:e',
				element: <ResetPassword />,
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
				path: 'news/:topic?/:category?',
				element: <News />,
			},
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
						path: 'view-later',
						element: <LaterView />,
					},
					{
						path: 'search-room',
						element: <SearchDetailRoom />,
					},
					{
						path: 'room-item/:id',
						element: <RoomItem />,
					},
					{
						path: 'Q-A/:id?',
						element: <QA />,
					},
					{
						path: 'inductions',
						element: <MainInduction />,
						children: [
							{
								path: 'account',
								element: <Account />,
							},
							{
								path: 'rent-room',
								element: <RentRoom />,
							},
						],
					},
					{
						element: <ProtectedRoute />,
						children: [
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
										path: 'post-room',
										element: <PostRoom />,
										children: [
											{
												path: 'add-post-room',
												element: <AddPostRoom />,
											},
										],
									},
									{
										path: 'calendar',
										element: <CalendarContainer />,
									},
									{
										path: 'comments',
										element: <ClientFeedback />,
									},
									{
										path: 'chat-message',
										element: <ChatMessagePage />,
									},
									{
										path: 'orders',
										element: <OrdersDash />,
									},
									{
										path: 'admin',
										element: <Admin />,
										children: [
											{
												path: 'feedback-forgot-password',
												element: <FeedBackForgotPassword />,
											},
											{
												path: 'add-news',
												element: <QuillText />,
											},
											{
												path: 'news',
												element: <ANews />,
											},
										],
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

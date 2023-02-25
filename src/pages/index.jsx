import { createBrowserRouter, Outlet, Route, createRoutesFromElements } from 'react-router-dom';

import ForgotPassword from './ForgotPassword';
import Home from './Home';
import NotFound from './NotFound';
import SignIn from './SignIn';
import SignUp from './SignUp';

const AuthLayout = () => {
	return <Outlet />;
};

export const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route
			element={<AuthLayout />}
			errorElement={<NotFound />}
		>
			<Route
				path='/sign-in'
				element={<SignIn />}
			/>
			<Route
				path='/sign-up'
				element={<SignUp />}
			/>
			<Route
				path='/forget-password'
				element={<ForgotPassword />}
			/>
			<Route
				path='/'
				element={<Home />}
			/>
			<Route
				path='*'
				element={<NotFound />}
			/>
		</Route>,
	),
);

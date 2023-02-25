import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
// eslint-disable-next-line import/order
import ReactDOM from 'react-dom/client';

import './styles/globals.scss';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Loading from './components/Loading';
import { routes } from './pages/index';
import { store } from './store/store';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider
					router={routes}
					fallbackElement={<Loading />}
				/>
				<ToastContainer />
			</QueryClientProvider>
		</Provider>
	</React.StrictMode>,
);

import React from 'react';
// eslint-disable-next-line import/order
import ReactDOM from 'react-dom/client';

import './styles/globals.css';
import { Provider } from 'react-redux';

import App from './pages/App';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);

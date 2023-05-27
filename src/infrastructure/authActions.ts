import { AxiosResponse } from 'axios';

import { http } from '@/config/axiosConfig';
import { IFormSignInUser, IUser, IUserLogged } from '@/types/pages/types';

export const signUpUser: (payload: IUser) => Promise<AxiosResponse<string, any>> = (
	payload: IUser,
) => {
	const pathname = window.location.pathname;
	return http.post<string>('sign-up', payload, {
		params: {
			pathname: pathname,
		},
	});
};

export const signInUser: (payload: IFormSignInUser) => Promise<AxiosResponse<IUserLogged, any>> = (
	payload: IFormSignInUser,
) => {
	const pathname = window.location.pathname;
	return http.post<IUserLogged>('sign-in', payload, {
		params: {
			pathname: pathname,
		},
	});
};

export const signInWithSocial: (payload: IUser) => Promise<AxiosResponse<IUserLogged, any>> = (
	payload: IUser,
) => {
	const pathname = window.location.pathname;
	return http.post<IUserLogged>('sign-in-social', payload, {
		params: {
			pathname: pathname,
		},
	});
};

export const getUserInfo: (payload: string) => Promise<AxiosResponse<IUserLogged, any>> = (
	payload: string,
) => {
	const pathname = window.location.pathname;
	return http.get<IUserLogged>('get-user-info', {
		params: { pathname: pathname, access: payload },
	});
};

export const sendMail: (payload: string) => Promise<AxiosResponse<string, any>> = (
	payload: string,
) => {
	const pathname = window.location.pathname;
	return http.get<string>('forgot-password', {
		params: { pathname: pathname, email: payload },
	});
};

export const resetPassword: (payload: string) => Promise<AxiosResponse<string, any>> = (
	payload: string,
) => {
	const pathname = window.location.pathname;
	return http.get<string>('reset-password', {
		params: { pathname: pathname, e: payload },
	});
};

export const accessReset: (requestBody: {
	email: string;
	password: string;
}) => Promise<AxiosResponse<boolean, any>> = (requestBody: { email: string; password: string }) => {
	const pathname = window.location.pathname;
	return http.post('access-reset', requestBody, {
		params: {
			pathname: pathname,
		},
	});
};

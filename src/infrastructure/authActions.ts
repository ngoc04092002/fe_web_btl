import { AxiosResponse } from 'axios';

import http from '@/config/axiosConfig';
import { IFormSignInUser, IUser, IUserLogged } from '@/types/pages/types';

export const signUpUser: (payload: IUser) => Promise<AxiosResponse<string, any>> = (
	payload: IUser,
) => {
	return http.post<string>('sign-up', payload);
};

export const signInUser: (payload: IFormSignInUser) => Promise<AxiosResponse<IUserLogged, any>> = (
	payload: IFormSignInUser,
) => {
	return http.post<IUserLogged>('sign-in', payload);
};

export const signInWithSocial: (payload: IUser) => Promise<AxiosResponse<IUserLogged, any>> = (
	payload: IUser,
) => {
	return http.post<IUserLogged>('sign-in-social', payload);
};

export const refreshToken: (payload: string) => Promise<AxiosResponse<string, any>> = (payload) => {
	return http.get<string>('refresh-cookie', { params: { token: payload } });
};

export const getUserInfo: (payload: string) => Promise<AxiosResponse<IUserLogged, any>> = (
	payload: string,
) => {
	return http.get<IUserLogged>('get-user-info', {
		params: { access: payload },
	});
};

export const sendMail: (payload: string) => Promise<AxiosResponse<string, any>> = (
	payload: string,
) => {
	return http.get<string>('forgot-password', {
		params: { email: payload },
	});
};

export const resetPassword: (payload: string) => Promise<AxiosResponse<string, any>> = (
	payload: string,
) => {
	return http.get<string>('reset-password', {
		params: { e: payload },
	});
};

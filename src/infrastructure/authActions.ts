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

export const getUserInfo: (payload: string) => Promise<AxiosResponse<IUserLogged, any>> = (
	payload: string,
) => {
	return http.get<IUserLogged>('get-user-info', {
		params: { access: payload },
	});
};

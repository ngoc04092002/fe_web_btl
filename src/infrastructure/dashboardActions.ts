import { AxiosResponse } from 'axios';

import http from '@/config/axiosConfig';
import {
	INewsMainData,
	INewsResponse,
	IParamsFilterNews,
	IParamsSearchNews,
} from '@/types/components/News/types';
import { IEWaitingR, IFormEditPassword } from '@/types/pages/IDashBoard';
import { IFeedback, IUser, IUserLogged } from '@/types/pages/types';

export const updatePassword: (
	payload: Omit<IFormEditPassword, 'verifyPassword'> & Pick<IUser, 'email'>,
) => Promise<AxiosResponse<string, any>> = (
	payload: Omit<IFormEditPassword, 'verifyPassword'> & Pick<IUser, 'email'>,
) => {
	return http.put<string>('update-password', payload);
};

export const updateProfile: (
	payload: IUserLogged,
	oldEmail: string,
) => Promise<AxiosResponse<IUserLogged, any>> = (payload: IUserLogged, oldEmail: string) => {
	return http.put<IUserLogged>('update-client-info', payload, { params: { oldEmail } });
};

export const getAllFeedbacks: () => Promise<AxiosResponse<IFeedback[], any>> = () => {
	return http.get<IFeedback[]>('get-all-feedback');
};

export const getAllEWaitingRs: () => Promise<AxiosResponse<IEWaitingR[], any>> = () => {
	return http.get<IEWaitingR[]>('get-all-ewaitingr');
};

export const deleteIds: (path: string, ids: number[]) => Promise<AxiosResponse<boolean, any>> = (
	path: string,
	ids: number[],
) => {
	return http.post<boolean>(path, ids);
};

export const getAllNews: () => Promise<AxiosResponse<INewsResponse[], any>> = () => {
	return http.get<INewsResponse[]>('getAll-news-post');
};

export const getNewsById: (id: number) => Promise<AxiosResponse<INewsResponse, any>> = (
	id: number,
) => {
	return http.get<INewsResponse>(`news/${id}`);
};

export const createNews: (payload: INewsMainData) => Promise<AxiosResponse<boolean, any>> = (
	payload: INewsMainData,
) => {
	return http.post<boolean>('save-news', payload);
};

export const filterNews: (
	params: IParamsFilterNews,
) => Promise<AxiosResponse<INewsResponse[], any>> = (params: IParamsFilterNews) => {
	return http.get('get-news-post-limit', { params: params });
};
export const searchNews: (
	params: IParamsSearchNews,
) => Promise<AxiosResponse<INewsResponse[], any>> = (params: IParamsSearchNews) => {
	return http.get('search-news', { params: params });
};

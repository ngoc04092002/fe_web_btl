import { AxiosResponse } from 'axios';

import http from '@/config/axiosConfig';
import {
	INewsMainData,
	INewsResponse,
	IParamsFilterNews,
	IParamsSearchNews,
} from '@/types/components/News/types';
import {
	IEWaitingR,
	IFilterPostRoomParams,
	IFormEditPassword,
	IPostRoomReportResponse,
	IPostRoomResponse,
	IRequestPostRoom,
} from '@/types/pages/IDashBoard';
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

export const createPostRoom: (payload: IRequestPostRoom) => Promise<AxiosResponse<boolean, any>> = (
	payload: IRequestPostRoom,
) => {
	return http.post<boolean>('save-post-room', payload);
};

export const updatePostRoom: (
	payload: IPostRoomResponse,
) => Promise<AxiosResponse<IPostRoomResponse, any>> = (payload: IPostRoomResponse) => {
	return http.put<IPostRoomResponse>('update-post-room', payload);
};

export const filterPostRoom: (
	params: IFilterPostRoomParams,
) => Promise<AxiosResponse<IPostRoomResponse[], any>> = (params: IFilterPostRoomParams) => {
	return http.get('filter-post-room', { params: params });
};
export const getPostRoomById: (id: number) => Promise<AxiosResponse<IPostRoomResponse, any>> = (
	id: number,
) => {
	return http.get<IPostRoomResponse>(`room-item/${id}`);
};

export const getAllPostRoomOfUser: (
	userid: number,
) => Promise<AxiosResponse<IPostRoomResponse[], any>> = (userid: number) => {
	return http.get<IPostRoomResponse[]>('get-post_room-user', { params: { id: userid } });
};

export const getPostRoomReport: (
	userid: number,
) => Promise<AxiosResponse<IPostRoomReportResponse, any>> = (userid: number) => {
	return http.get<IPostRoomReportResponse>('get-post_room-report', { params: { id: userid } });
};

export const getPostRoomAmountByMonth: (userid: number) => Promise<AxiosResponse<number[], any>> = (
	userid: number,
) => {
	return http.get<number[]>('get-post_room-amount', { params: { id: userid } });
};

export const deletePostRoom: (id: number) => Promise<AxiosResponse<boolean, any>> = (
	id: number,
) => {
	return http.delete<boolean>(`delete-post-room/${id}`);
};

export const getPostRoomIds: () => Promise<AxiosResponse<number[], any>> = () => {
	return http.get('get-ids');
};

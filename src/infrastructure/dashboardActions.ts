import { AxiosResponse } from 'axios';

import { http } from '@/config/axiosConfig';
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
	const pathname = window.location.pathname;

	return http.put<string>('update-password', payload, {
		params: {
			pathname: pathname,
		},
	});
};

export const updateProfile: (
	payload: IUserLogged,
	oldEmail: string,
) => Promise<AxiosResponse<IUserLogged, any>> = (payload: IUserLogged, oldEmail: string) => {
	const pathname = window.location.pathname;

	return http.put<IUserLogged>('update-client-info', payload, {
		params: { pathname: pathname, oldEmail },
	});
};

export const getAllFeedbacks: () => Promise<AxiosResponse<IFeedback[], any>> = () => {
	const pathname = window.location.pathname;

	return http.get<IFeedback[]>('get-all-feedback', {
		params: {
			pathname: pathname,
		},
	});
};

export const getAllEWaitingRs: () => Promise<AxiosResponse<IEWaitingR[], any>> = () => {
	const path = window.location.pathname;

	return http.get<IEWaitingR[]>('get-all-ewaitingr', {
		params: {
			pathname: path,
		},
	});
};

export const deleteIds: (path: string, ids: number[]) => Promise<AxiosResponse<boolean, any>> = (
	path: string,
	ids: number[],
) => {
	const pathname = window.location.pathname;

	return http.post<boolean>(path, ids, {
		params: {
			pathname: pathname,
		},
	});
};

export const getAllNews: () => Promise<AxiosResponse<INewsResponse[], any>> = () => {
	const pathname = window.location.pathname;

	return http.get<INewsResponse[]>('getAll-news-post', {
		params: {
			pathname: pathname,
		},
	});
};

export const getNewsById: (id: number) => Promise<AxiosResponse<INewsResponse, any>> = (
	id: number,
) => {
	const pathname = window.location.pathname;

	return http.get<INewsResponse>(`news/${id}`, {
		params: {
			pathname: pathname,
		},
	});
};

export const createNews: (payload: INewsMainData) => Promise<AxiosResponse<boolean, any>> = (
	payload: INewsMainData,
) => {
	const pathname = window.location.pathname;

	return http.post<boolean>('save-news', payload, {
		params: {
			pathname: pathname,
		},
	});
};

export const filterNews: (
	params: IParamsFilterNews,
) => Promise<AxiosResponse<INewsResponse[], any>> = (params: IParamsFilterNews) => {
	const pathname = window.location.pathname;

	return http.get('get-news-post-limit', {
		params: { pathname: pathname, ...params },
	});
};
export const searchNews: (
	params: IParamsSearchNews,
) => Promise<AxiosResponse<INewsResponse[], any>> = (params: IParamsSearchNews) => {
	const pathname = window.location.pathname;

	return http.get('search-news', {
		params: { pathname: pathname, ...params },
	});
};

export const createPostRoom: (payload: IRequestPostRoom) => Promise<AxiosResponse<boolean, any>> = (
	payload: IRequestPostRoom,
) => {
	const pathname = window.location.pathname;

	return http.post<boolean>('save-post-room', payload, {
		params: {
			pathname: pathname,
		},
	});
};

export const updatePostRoom: (
	payload: IPostRoomResponse,
) => Promise<AxiosResponse<IPostRoomResponse, any>> = (payload: IPostRoomResponse) => {
	const pathname = window.location.pathname;

	return http.put<IPostRoomResponse>('update-post-room', payload, {
		params: {
			pathname: pathname,
		},
	});
};

export const filterPostRoom: (
	params: IFilterPostRoomParams,
) => Promise<AxiosResponse<IPostRoomResponse[], any>> = (params: IFilterPostRoomParams) => {
	const pathname = window.location.pathname;

	return http.get('filter-post-room', {
		params: { pathname: pathname, ...params },
	});
};
export const getPostRoomById: (id: number) => Promise<AxiosResponse<IPostRoomResponse, any>> = (
	id: number,
) => {
	const pathname = window.location.pathname;

	return http.get<IPostRoomResponse>(`room-item/${id}`, {
		params: {
			pathname: pathname,
		},
	});
};

export const getAllPostRoomOfUser: (
	userid: number,
) => Promise<AxiosResponse<IPostRoomResponse[], any>> = (userid: number) => {
	const pathname = window.location.pathname;

	return http.get<IPostRoomResponse[]>('get-post_room-user', {
		params: { id: userid, pathname: pathname },
	});
};

export const getPostRoomReport: (
	userid: number,
) => Promise<AxiosResponse<IPostRoomReportResponse, any>> = (userid: number) => {
	const pathname = window.location.pathname;

	return http.get<IPostRoomReportResponse>('get-post_room-report', {
		params: { id: userid, pathname: pathname },
	});
};

export const getPostRoomAmountByMonth: (userid: number) => Promise<AxiosResponse<number[], any>> = (
	userid: number,
) => {
	const pathname = window.location.pathname;

	return http.get<number[]>('get-post_room-amount', {
		params: { id: userid, pathname: pathname },
	});
};

export const deletePostRoom: (id: number) => Promise<AxiosResponse<boolean, any>> = (
	id: number,
) => {
	const pathname = window.location.pathname;

	return http.delete<boolean>(`delete-post-room/${id}`, {
		params: {
			pathname: pathname,
		},
	});
};

export const getPostRoomIds: () => Promise<AxiosResponse<number[], any>> = () => {
	const pathname = window.location.pathname;

	return http.get('get-ids', {
		params: {
			pathname: pathname,
		},
	});
};

export const getAllClient: () => Promise<
	AxiosResponse<Exclude<IUserLogged, 'token' | 'created_at'>[], any>
> = () => {
	// eslint-disable-next-line max-lines
	const pathname = window.location.pathname;
	return http.get('getAll-clients', {
		params: {
			pathname: pathname,
		},
	});
};

export const deleteClientById: (id: number) => Promise<AxiosResponse<boolean, any>> = (
	id: number,
) => {
	const pathname = window.location.pathname;
	return http.delete(`delete-client/${id}`, {
		params: {
			pathname: pathname,
		},
	});
};

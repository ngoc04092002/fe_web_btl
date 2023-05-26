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

const pathname = window.location.pathname;

export const updatePassword: (
	payload: Omit<IFormEditPassword, 'verifyPassword'> & Pick<IUser, 'email'>,
) => Promise<AxiosResponse<string, any>> = (
	payload: Omit<IFormEditPassword, 'verifyPassword'> & Pick<IUser, 'email'>,
) => {
	return http.put<string>('update-password', payload, {
		headers: {
			'path-name': pathname,
		},
	});
};

export const updateProfile: (
	payload: IUserLogged,
	oldEmail: string,
) => Promise<AxiosResponse<IUserLogged, any>> = (payload: IUserLogged, oldEmail: string) => {
	return http.put<IUserLogged>('update-client-info', payload, {
		params: { oldEmail },
		headers: {
			'path-name': pathname,
		},
	});
};

export const getAllFeedbacks: () => Promise<AxiosResponse<IFeedback[], any>> = () => {
	return http.get<IFeedback[]>('get-all-feedback', {
		headers: {
			'path-name': pathname,
		},
	});
};

export const getAllEWaitingRs: () => Promise<AxiosResponse<IEWaitingR[], any>> = () => {
	return http.get<IEWaitingR[]>('get-all-ewaitingr', {
		headers: {
			'path-name': pathname,
		},
	});
};

export const deleteIds: (path: string, ids: number[]) => Promise<AxiosResponse<boolean, any>> = (
	path: string,
	ids: number[],
) => {
	return http.post<boolean>(path, ids, {
		headers: {
			'path-name': pathname,
		},
	});
};

export const getAllNews: () => Promise<AxiosResponse<INewsResponse[], any>> = () => {
	return http.get<INewsResponse[]>('getAll-news-post', {
		headers: {
			'path-name': pathname,
		},
	});
};

export const getNewsById: (id: number) => Promise<AxiosResponse<INewsResponse, any>> = (
	id: number,
) => {
	return http.get<INewsResponse>(`news/${id}`, {
		headers: {
			'path-name': pathname,
		},
	});
};

export const createNews: (payload: INewsMainData) => Promise<AxiosResponse<boolean, any>> = (
	payload: INewsMainData,
) => {
	return http.post<boolean>('save-news', payload, {
		headers: {
			'path-name': pathname,
		},
	});
};

export const filterNews: (
	params: IParamsFilterNews,
) => Promise<AxiosResponse<INewsResponse[], any>> = (params: IParamsFilterNews) => {
	return http.get('get-news-post-limit', {
		params: params,
		headers: {
			'path-name': pathname,
		},
	});
};
export const searchNews: (
	params: IParamsSearchNews,
) => Promise<AxiosResponse<INewsResponse[], any>> = (params: IParamsSearchNews) => {
	return http.get('search-news', {
		params: params,
		headers: {
			'path-name': pathname,
		},
	});
};

export const createPostRoom: (payload: IRequestPostRoom) => Promise<AxiosResponse<boolean, any>> = (
	payload: IRequestPostRoom,
) => {
	return http.post<boolean>('save-post-room', payload, {
		headers: {
			'path-name': pathname,
		},
	});
};

export const updatePostRoom: (
	payload: IPostRoomResponse,
) => Promise<AxiosResponse<IPostRoomResponse, any>> = (payload: IPostRoomResponse) => {
	return http.put<IPostRoomResponse>('update-post-room', payload, {
		headers: {
			'path-name': pathname,
		},
	});
};

export const filterPostRoom: (
	params: IFilterPostRoomParams,
) => Promise<AxiosResponse<IPostRoomResponse[], any>> = (params: IFilterPostRoomParams) => {
	return http.get('filter-post-room', {
		params: params,
		headers: {
			'path-name': pathname,
		},
	});
};
export const getPostRoomById: (id: number) => Promise<AxiosResponse<IPostRoomResponse, any>> = (
	id: number,
) => {
	return http.get<IPostRoomResponse>(`room-item/${id}`, {
		headers: {
			'path-name': pathname,
		},
	});
};

export const getAllPostRoomOfUser: (
	userid: number,
) => Promise<AxiosResponse<IPostRoomResponse[], any>> = (userid: number) => {
	return http.get<IPostRoomResponse[]>('get-post_room-user', {
		params: { id: userid },
		headers: {
			'path-name': pathname,
		},
	});
};

export const getPostRoomReport: (
	userid: number,
) => Promise<AxiosResponse<IPostRoomReportResponse, any>> = (userid: number) => {
	return http.get<IPostRoomReportResponse>('get-post_room-report', {
		params: { id: userid },
		headers: {
			'path-name': pathname,
		},
	});
};

export const getPostRoomAmountByMonth: (userid: number) => Promise<AxiosResponse<number[], any>> = (
	userid: number,
) => {
	return http.get<number[]>('get-post_room-amount', {
		params: { id: userid },
		headers: {
			'path-name': pathname,
		},
	});
};

export const deletePostRoom: (id: number) => Promise<AxiosResponse<boolean, any>> = (
	id: number,
) => {
	return http.delete<boolean>(`delete-post-room/${id}`, {
		headers: {
			'path-name': pathname,
		},
	});
};

export const getPostRoomIds: () => Promise<AxiosResponse<number[], any>> = () => {
	return http.get('get-ids', {
		headers: {
			'path-name': pathname,
		},
	});
};

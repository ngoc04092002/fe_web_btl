import { AxiosResponse } from 'axios';

import { http } from '@/config/axiosConfig';
import {
	ICommentChild,
	IComments,
	IQAReport,
	IQAResponse,
	IRequestBodyQA,
	IToggleLike,
	IFilterQA,
} from '@/types/pages/IQA';

export const getAllQa: () => Promise<AxiosResponse<IRequestBodyQA[], any>> = () => {
	const pathname = window.location.pathname;

	return http.get('get-all-QA', {
		params: {
			pathname: pathname,
		},
	});
};

export const getAllQaByUser: (userId: number) => Promise<AxiosResponse<IRequestBodyQA[], any>> = (
	userId: number,
) => {
	const pathname = window.location.pathname;

	return http.get('get-all-QA-user', {
		params: { pathname: pathname, id: userId },
	});
};

export const createQA: (body: IRequestBodyQA) => Promise<AxiosResponse<boolean, any>> = (
	body: IRequestBodyQA,
) => {
	const pathname = window.location.pathname;

	return http.post('save-QA', body, {
		params: {
			pathname: pathname,
		},
	});
};

export const filterQA: (params: IFilterQA) => Promise<AxiosResponse<IQAResponse[], any>> = (
	params: IFilterQA,
) => {
	const pathname = window.location.pathname;

	return http.get('filter-qa', {
		params: { pathname: pathname, ...params },
	});
};

export const createComment: (
	body: Omit<IComments, 'id'>,
) => Promise<AxiosResponse<IComments, any>> = (body: Omit<IComments, 'id'>) => {
	const pathname = window.location.pathname;

	return http.post('save-comment', body, {
		params: {
			pathname: pathname,
		},
	});
};

export const createCommentChild: (
	body: Omit<ICommentChild, 'id'>,
) => Promise<AxiosResponse<ICommentChild, any>> = (body: Omit<ICommentChild, 'id'>) => {
	const pathname = window.location.pathname;

	return http.post('save-comment-child', body, {
		params: {
			pathname: pathname,
		},
	});
};

export const toggleLike: (body: IToggleLike) => Promise<AxiosResponse<number, any>> = (
	body: IToggleLike,
) => {
	const pathname = window.location.pathname;

	return http.post('toggle-like', body, {
		params: {
			pathname: pathname,
		},
	});
};

export const deleteQa: (id: number) => Promise<AxiosResponse<boolean, any>> = (id: number) => {
	const pathname = window.location.pathname;

	return http.delete<boolean>(`delete-QA/${id}`, {
		params: {
			pathname: pathname,
		},
	});
};

export const updateQa: (body: IQAReport) => Promise<AxiosResponse<boolean, any>> = (
	body: IQAReport,
) => {
	const pathname = window.location.pathname;

	return http.put<boolean>('update-qa', body, {
		params: {
			pathname: pathname,
		},
	});
};

export const deleteComment: (id: number) => Promise<AxiosResponse<boolean, any>> = (id: number) => {
	const pathname = window.location.pathname;

	return http.delete<boolean>(`delete-comment/${id}`, {
		params: {
			pathname: pathname,
		},
	});
};

export const deleteCommentChild: (id: number) => Promise<AxiosResponse<boolean, any>> = (
	id: number,
) => {
	const pathname = window.location.pathname;

	return http.delete<boolean>(`delete-comment-child/${id}`, {
		params: {
			pathname: pathname,
		},
	});
};

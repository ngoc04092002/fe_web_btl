import { AxiosResponse } from 'axios';

import http from '@/config/axiosConfig';
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
	return http.get('get-all-QA');
};

export const getAllQaByUser: (userId: number) => Promise<AxiosResponse<IRequestBodyQA[], any>> = (
	userId: number,
) => {
	return http.get('get-all-QA-user', { params: { id: userId } });
};

export const createQA: (body: IRequestBodyQA) => Promise<AxiosResponse<boolean, any>> = (
	body: IRequestBodyQA,
) => {
	return http.post('save-QA', body);
};

export const filterQA: (params: IFilterQA) => Promise<AxiosResponse<IQAResponse[], any>> = (
	params: IFilterQA,
) => {
	return http.get('filter-qa', { params });
};

export const createComment: (
	body: Omit<IComments, 'id'>,
) => Promise<AxiosResponse<IComments, any>> = (body: Omit<IComments, 'id'>) => {
	return http.post('save-comment', body);
};

export const createCommentChild: (
	body: Omit<ICommentChild, 'id'>,
) => Promise<AxiosResponse<ICommentChild, any>> = (body: Omit<ICommentChild, 'id'>) => {
	return http.post('save-comment-child', body);
};

export const toggleLike: (body: IToggleLike) => Promise<AxiosResponse<number, any>> = (
	body: IToggleLike,
) => {
	return http.post('toggle-like', body);
};

export const deleteQa: (id: number) => Promise<AxiosResponse<boolean, any>> = (id: number) => {
	return http.delete<boolean>(`delete-QA/${id}`);
};

export const updateQa: (body: IQAReport) => Promise<AxiosResponse<boolean, any>> = (
	body: IQAReport,
) => {
	return http.put<boolean>('update-qa', body);
};

export const deleteComment: (id: number) => Promise<AxiosResponse<boolean, any>> = (id: number) => {
	return http.delete<boolean>(`delete-comment/${id}`);
};

export const deleteCommentChild: (id: number) => Promise<AxiosResponse<boolean, any>> = (
	id: number,
) => {
	return http.delete<boolean>(`delete-comment-child/${id}`);
};

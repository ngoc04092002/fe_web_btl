import { AxiosResponse } from 'axios';

import http from '@/config/axiosConfig';
import {
	ICommentChild,
	IComments,
	IQAResponse,
	IRequestBodyQA,
	IToggleLike,
	iFilterQA,
} from '@/types/pages/IQA';

export const createQA: (body: IRequestBodyQA) => Promise<AxiosResponse<boolean, any>> = (
	body: IRequestBodyQA,
) => {
	return http.post('save-QA', body);
};

export const filterQA: (params: iFilterQA) => Promise<AxiosResponse<IQAResponse[], any>> = (
	params: iFilterQA,
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

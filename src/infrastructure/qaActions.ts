import { AxiosResponse } from 'axios';

import http from '@/config/axiosConfig';
import { IComments, IQAResponse, IRequestBodyQA, iFilterQA } from '@/types/pages/IQA';

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
) => Promise<AxiosResponse<boolean, any>> = (body: Omit<IComments, 'id'>) => {
	return http.post('save-comment', body);
};

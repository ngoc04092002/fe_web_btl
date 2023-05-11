import { AxiosResponse } from 'axios';

import http from '@/config/axiosConfig';
import { IQAReponse, IRequestBodyQA, iFilterQA } from '@/types/pages/IQA';

export const createQA: (body: IRequestBodyQA) => Promise<AxiosResponse<boolean, any>> = (
	body: IRequestBodyQA,
) => {
	return http.post('save-QA', body);
};

export const filterQA: (params: iFilterQA) => Promise<AxiosResponse<IQAReponse[], any>> = (
	params: iFilterQA,
) => {
	return http.get('filter-qa', { params });
};

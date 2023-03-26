import { AxiosResponse } from 'axios';

import http from '@/config/axiosConfig';
import { IFeedback } from '@/types/pages/types';

export const sendFeedback: (payload: IFeedback) => Promise<AxiosResponse<boolean, any>> = (
	payload: IFeedback,
) => {
	return http.post<boolean>('send-feedback', payload);
};

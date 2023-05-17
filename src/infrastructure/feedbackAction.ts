import { AxiosResponse } from 'axios';

import http from '@/config/axiosConfig';
import { IClientFeedback } from '@/types/pages/IDashBoard';
import { IFeedbackReportData } from '@/types/pages/IFeedBack';
import { IFeedback } from '@/types/pages/types';

export const sendFeedback: (payload: IFeedback) => Promise<AxiosResponse<boolean, any>> = (
	payload: IFeedback,
) => {
	return http.post<boolean>('send-feedback', payload);
};

export const getFeedbackReportInfo: () => Promise<AxiosResponse<IFeedbackReportData, any>> = () => {
	return http.get<IFeedbackReportData>('feedback-report-info');
};

export const createClientFeedback: (
	payload: IClientFeedback,
) => Promise<AxiosResponse<boolean, any>> = (payload: IClientFeedback) => {
	return http.post<boolean>('send-client-feedback', payload);
};

export const getClientFeedbackReportInfo: (
	id: number,
) => Promise<AxiosResponse<IClientFeedback[], any>> = (id) => {
	return http.get<IClientFeedback[]>('get-client-feedback', { params: { id } });
};

export const deleteClientFeedback: (id: number) => Promise<AxiosResponse<boolean, any>> = (
	id: number,
) => {
	return http.delete<boolean>(`delete-client-feedback/${id}`);
};

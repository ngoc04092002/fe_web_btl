import { AxiosResponse } from 'axios';

import { http } from '@/config/axiosConfig';
import { IClientFeedback } from '@/types/pages/IDashBoard';
import { IFeedbackReportData } from '@/types/pages/IFeedBack';
import { IFeedback } from '@/types/pages/types';

export const sendFeedback: (payload: IFeedback) => Promise<AxiosResponse<boolean, any>> = (
	payload: IFeedback,
) => {
	const pathname = window.location.pathname;

	return http.post<boolean>('send-feedback', payload, {
		params: {
			pathname: pathname,
		},
	});
};

export const getFeedbackReportInfo: () => Promise<AxiosResponse<IFeedbackReportData, any>> = () => {
	const pathname = window.location.pathname;

	return http.get<IFeedbackReportData>('feedback-report-info', {
		params: {
			pathname: pathname,
		},
	});
};

export const createClientFeedback: (
	payload: IClientFeedback,
) => Promise<AxiosResponse<boolean, any>> = (payload: IClientFeedback) => {
	const pathname = window.location.pathname;

	return http.post<boolean>('send-client-feedback', payload, {
		params: {
			pathname: pathname,
		},
	});
};

export const getClientFeedbackReportInfo: (
	id: number,
) => Promise<AxiosResponse<IClientFeedback[], any>> = (id) => {
	const pathname = window.location.pathname;

	return http.get<IClientFeedback[]>('get-client-feedback', {
		params: { pathname: pathname, id },
	});
};

export const deleteClientFeedback: (id: number) => Promise<AxiosResponse<boolean, any>> = (
	id: number,
) => {
	const pathname = window.location.pathname;

	return http.delete<boolean>(`delete-client-feedback/${id}`, {
		params: {
			pathname: pathname,
		},
	});
};

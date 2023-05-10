import { AxiosResponse } from 'axios';

import http from '@/config/axiosConfig';
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

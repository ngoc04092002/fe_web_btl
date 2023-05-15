import { useQuery } from '@tanstack/react-query';

import {
	getClientFeedbackReportInfo,
	getFeedbackReportInfo,
} from '@/infrastructure/feedbackAction';
import { IClientFeedback } from '@/types/pages/IDashBoard';
import { IFeedbackReportData } from '@/types/pages/IFeedBack';

export function FetchApiGetFeedbackReportInfo(idAdmin: boolean) {
	const { data, isLoading } = useQuery({
		queryKey: ['feedback-report-info'],
		queryFn: () => getFeedbackReportInfo(),
		staleTime: 60 * 1000,
		cacheTime: 2 * 60 * 1000,
		enabled: idAdmin,
	});

	const res: IFeedbackReportData | undefined = data?.data;

	return {
		res,
		isLoading,
	};
}

export function FetchApiGetClientFeedbackReportInfo(id: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['get-client-feedback', id],
		queryFn: () => getClientFeedbackReportInfo(id),
		staleTime: 60 * 1000,
		cacheTime: 2 * 60 * 1000,
	});

	const res: IClientFeedback[] | undefined = data?.data;

	return {
		res,
		isLoading,
	};
}

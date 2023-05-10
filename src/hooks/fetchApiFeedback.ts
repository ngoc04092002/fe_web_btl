import { useQuery } from '@tanstack/react-query';

import { getFeedbackReportInfo } from '@/infrastructure/feedbackAction';
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

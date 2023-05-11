import { useQuery } from '@tanstack/react-query';

import { filterQA } from '@/infrastructure/qaActions';
import { IQAReponse, iFilterQA } from '@/types/pages/IQA';

export function FetchApiFilterQA(params: iFilterQA) {
	const { data, isLoading } = useQuery({
		queryKey: ['filter-qa', params],
		queryFn: () => filterQA(params),
		staleTime: 60 * 1000,
		cacheTime: 2 * 60 * 1000,
	});

	const res: IQAReponse[] | undefined = data?.data;

	return {
		res,
		isLoading,
	};
}

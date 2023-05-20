import { useQuery } from '@tanstack/react-query';

import { filterQA, getAllQa, getAllQaByUser } from '@/infrastructure/qaActions';
import { IQAResponse, IRequestBodyQA, iFilterQA } from '@/types/pages/IQA';

export function FetchApiFilterQA(params: iFilterQA) {
	const { data, isLoading } = useQuery({
		queryKey: ['filter-qa', params],
		queryFn: () => filterQA(params),
		staleTime: 5 * 60 * 1000,
		cacheTime: 7 * 60 * 1000,
	});

	const res: IQAResponse[] | undefined = data?.data;

	return {
		res,
		isLoading,
	};
}

export function FetchApiGetAllQa() {
	const { data, isLoading } = useQuery({
		queryKey: ['get-all-QA'],
		queryFn: () => getAllQa(),
	});

	const res: IRequestBodyQA[] | undefined = data?.data;

	return {
		res,
		isLoading,
	};
}

export function FetchApiGetAllQaByUser(userId: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['get-all-QA-user', userId],
		queryFn: () => getAllQaByUser(userId),
		enabled: typeof userId === 'number' && userId !== 0,
	});

	const res: IRequestBodyQA[] | undefined = data?.data;

	return {
		res,
		isLoading,
	};
}

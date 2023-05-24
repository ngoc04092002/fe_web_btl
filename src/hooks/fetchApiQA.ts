import { useQuery } from '@tanstack/react-query';

import { filterQA, getAllQa, getAllQaByUser } from '@/infrastructure/qaActions';
import { IQAResponse, IRequestBodyQA, IFilterQA } from '@/types/pages/IQA';

export function FetchApiFilterQA(params: IFilterQA) {
	const { data, isLoading } = useQuery({
		queryKey: ['filter-qa', params],
		queryFn: () => filterQA(params),
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

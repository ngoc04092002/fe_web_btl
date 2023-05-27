import { useQuery } from '@tanstack/react-query';

import { filterNews, getAllNews, getNewsById, searchNews } from '@/infrastructure/dashboardActions';
import { INewsResponse } from '@/types/components/News/types';

export function FetchApiFilterNews(pageLimit: number, page: number, topic = '', type = '') {
	const { data, isLoading } = useQuery({
		queryKey: ['get-news-post-limit', pageLimit, page, topic, type],
		queryFn: () => filterNews({ limit: pageLimit, offset: page * pageLimit, topic, type }),
		staleTime: 30 * 1000,
		cacheTime: 60 * 1000,
	});

	const res: INewsResponse[] | undefined = data?.data;

	return {
		res,
		isLoading,
	};
}
export function FetchApiSearchNews(pageLimit: number, page: number, s = '') {
	const { data, isLoading } = useQuery({
		queryKey: ['search-news', pageLimit, page, s],
		queryFn: () => searchNews({ limit: pageLimit, offset: page * pageLimit, s }),
		staleTime: 30 * 1000,
		cacheTime: 60 * 1000,
	});

	const res: INewsResponse[] | undefined = data?.data;

	return {
		res,
		isLoading,
	};
}
export function FetchApiGetAllNews() {
	const { data, isLoading } = useQuery({
		queryKey: ['getAll-news-post'],
		queryFn: () => getAllNews(),
	});

	const res: INewsResponse[] | undefined = data?.data;

	return {
		res,
		isLoading,
	};
}

export function FetchApiGetNewsById(id: number) {
	const { data, isLoading } = useQuery({
		queryKey: [`news/${id}`, id],
		queryFn: () => getNewsById(id),
		staleTime: 30 * 1000,
		cacheTime: 60 * 1000,
		enabled: typeof id === 'number',
	});

	const res: INewsResponse | undefined = data?.data;

	return {
		res,
		isLoading,
	};
}

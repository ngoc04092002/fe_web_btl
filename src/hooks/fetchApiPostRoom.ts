import { useQuery } from '@tanstack/react-query';

import {
	filterPostRoom,
	getAllPostRoomOfUser,
	getPostRoomById,
} from '@/infrastructure/dashboardActions';
import { IFilterPostRoomParams, IPostRoomResponse } from '@/types/pages/IDashBoard';

export function FetchApiGetPostRoomById(id: number) {
	const { data, isLoading } = useQuery({
		queryKey: [`news/${id}`, id],
		queryFn: () => getPostRoomById(id),
		staleTime: 10 * 60 * 1000,
		cacheTime: 20 * 60 * 1000,
		enabled: typeof id === 'number' && id !== 0,
	});

	const res: IPostRoomResponse | undefined = data?.data;

	return {
		res,
		isLoading,
	};
}
export function FetchApiFilterPostRoom(params: IFilterPostRoomParams) {
	const { data, isLoading } = useQuery({
		queryKey: ['filter-post-room', params],
		queryFn: () => filterPostRoom(params),
		staleTime: 30 * 1000,
		cacheTime: 60 * 1000,
	});
	const res: IPostRoomResponse[] | [] = data?.data || [];

	return {
		res,
		isLoading,
	};
}

export function FetchApiGetAllPostRoomOfUser(id: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['get-post_room-user', id],
		queryFn: () => getAllPostRoomOfUser(id),
		staleTime: 10 * 60 * 1000,
		cacheTime: 20 * 60 * 1000,
		enabled: typeof id === 'number',
	});

	const res: IPostRoomResponse[] | [] = data?.data || [];

	return {
		res,
		isLoading,
	};
}

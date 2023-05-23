import { useQuery } from '@tanstack/react-query';

import { getAllUsersChatMessageTo, getRidMessages } from '@/infrastructure/chatMessageAction';
import { CreateMessageRequest, IChatMessageUserInfo } from '@/types/components/ChatMessage/type';

export function FetchApiGetRidMessages(rid: string) {
	const { data, isLoading } = useQuery({
		queryKey: ['get-msg', rid],
		queryFn: () => getRidMessages(rid),
		enabled: !!rid,
	});
	const res: CreateMessageRequest[] | [] = data?.data || [];

	return {
		res,
		isLoading,
	};
}

export function FetchApiGetAllUsersChatMessageTo(to: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['get-users', to],
		queryFn: () => getAllUsersChatMessageTo(to.toString()),
		enabled: typeof to === 'number' && to !== 0,
	});
	const res: IChatMessageUserInfo[] | [] = data?.data || [];

	return {
		res,
		isLoading,
	};
}

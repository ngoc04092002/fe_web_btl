import { useQuery } from '@tanstack/react-query';

import { getRidMessages } from '@/infrastructure/chatMessageAction';
import { MessageResponse } from '@/types/components/ChatMessage/type';

export function FetchApiGetRidMessages(rid: string) {
	const { data, isLoading } = useQuery({
		queryKey: ['get-msg', rid],
		queryFn: () => getRidMessages(rid),
		staleTime: 30 * 1000,
		cacheTime: 60 * 1000,
	});
	const res: MessageResponse[] | [] = data?.data || [];

	return {
		res,
		isLoading,
	};
}

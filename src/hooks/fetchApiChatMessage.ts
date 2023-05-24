import { useQuery } from '@tanstack/react-query';

import {
	findMessageRep,
	getAllUsersChatMessageTo,
	getRidMessages,
	getStatusRoom,
} from '@/infrastructure/chatMessageAction';
import {
	CreateMessageRequest,
	IChatMessageUserInfo,
	ISeemModal,
} from '@/types/components/ChatMessage/type';

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

export function FetchApiGetStatusRoom(rid: string) {
	const { data, isLoading } = useQuery({
		queryKey: ['get-status-room', rid],
		queryFn: () => getStatusRoom(rid),
		enabled: !!rid,
	});
	const res: ISeemModal | undefined = data?.data;

	return {
		res,
		isLoading,
	};
}

export function FetchApiFindMessageRep(userId: string) {
	const { data, isLoading } = useQuery({
		queryKey: ['check-miss-msg', userId],
		queryFn: () => findMessageRep(userId),
		enabled: !!userId,
	});
	const res: boolean = !!data?.data;

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

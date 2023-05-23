import { AxiosResponse } from 'axios';

import http from '@/config/axiosConfig';
import { CreateMessageRequest, IChatMessageUserInfo } from '@/types/components/ChatMessage/type';

export const getRidMessages: (
	rid: string,
) => Promise<AxiosResponse<CreateMessageRequest[], any>> = (rid: string) => {
	return http.get<CreateMessageRequest[]>('get-msg', {
		params: { rid },
	});
};

export const getAllUsersChatMessageTo: (
	to: string,
) => Promise<AxiosResponse<IChatMessageUserInfo[], any>> = (to: string) => {
	return http.get<IChatMessageUserInfo[]>('get-users', {
		params: { to },
	});
};

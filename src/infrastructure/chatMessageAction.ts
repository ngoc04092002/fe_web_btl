import { AxiosResponse } from 'axios';

import http from '@/config/axiosConfig';
import { CreateMessageRequest } from '@/types/components/ChatMessage/type';

export const getRidMessages: (
	rid: string,
) => Promise<AxiosResponse<CreateMessageRequest[], any>> = (rid: string) => {
	return http.get<CreateMessageRequest[]>('get-msg', {
		params: { rid },
	});
};

import { AxiosResponse } from 'axios';

import http from '@/config/axiosConfig';
import { MessageResponse } from '@/types/components/ChatMessage/type';

export const getRidMessages: (rid: string) => Promise<AxiosResponse<MessageResponse[], any>> = (
	rid: string,
) => {
	return http.get<MessageResponse[]>('get-msg', {
		params: { rid },
	});
};

import { AxiosResponse } from 'axios';

import { http } from '@/config/axiosConfig';
import {
	CreateMessageRequest,
	IChatMessageUserInfo,
	ISeemModal,
} from '@/types/components/ChatMessage/type';

export const getRidMessages: (
	rid: string,
) => Promise<AxiosResponse<CreateMessageRequest[], any>> = (rid: string) => {
	const pathname = window.location.pathname;
	return http.get<CreateMessageRequest[]>('get-msg', {
		params: { rid, pathname: pathname },
	});
};

export const getAllUsersChatMessageTo: (
	to: string,
) => Promise<AxiosResponse<IChatMessageUserInfo[], any>> = (to: string) => {
	const pathname = window.location.pathname;
	return http.get<IChatMessageUserInfo[]>('get-users', {
		params: { to, pathname: pathname },
	});
};

export const getStatusRoom: (rid: string) => Promise<AxiosResponse<ISeemModal, any>> = (
	rid: string,
) => {
	const pathname = window.location.pathname;
	return http.get<ISeemModal>('get-status-room', {
		params: { rid, pathname: pathname },
	});
};

export const findMessageRep: (userId: string) => Promise<AxiosResponse<boolean, any>> = (
	userId: string,
) => {
	const pathname = window.location.pathname;
	return http.get<boolean>('check-miss-msg', {
		params: { userId, pathname: pathname },
	});
};

export const toggleStatusRoom: (payload: ISeemModal) => Promise<AxiosResponse<ISeemModal, any>> = (
	payload: ISeemModal,
) => {
	const pathname = window.location.pathname;
	return http.post<ISeemModal>('toggle-status', payload, {
		params: {
			pathname: pathname,
		},
	});
};

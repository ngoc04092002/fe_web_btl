import { AxiosResponse } from 'axios';

import http from '@/config/axiosConfig';
import {
	CreateMessageRequest,
	IChatMessageUserInfo,
	ISeemModal,
} from '@/types/components/ChatMessage/type';

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

export const getStatusRoom: (rid: string) => Promise<AxiosResponse<ISeemModal, any>> = (
	rid: string,
) => {
	return http.get<ISeemModal>('get-status-room', {
		params: { rid },
	});
};

export const findMessageRep: (userId: string) => Promise<AxiosResponse<boolean, any>> = (
	userId: string,
) => {
	return http.get<boolean>('check-miss-msg', {
		params: { userId },
	});
};

export const toggleStatusRoom: (payload: ISeemModal) => Promise<AxiosResponse<ISeemModal, any>> = (
	payload: ISeemModal,
) => {
	return http.post<ISeemModal>('toggle-status', payload);
};

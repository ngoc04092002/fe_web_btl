import { AxiosResponse } from 'axios';

import http from '@/config/axiosConfig';
import { IEWaitingR, IFormEditPassword } from '@/types/pages/IDashBoard';
import { IFeedback, IUser, IUserLogged } from '@/types/pages/types';

export const updatePassword: (
	payload: Omit<IFormEditPassword, 'verifyPassword'> & Pick<IUser, 'email'>,
) => Promise<AxiosResponse<string, any>> = (
	payload: Omit<IFormEditPassword, 'verifyPassword'> & Pick<IUser, 'email'>,
) => {
	return http.put<string>('update-password', payload);
};

export const updateProfile: (
	payload: IUserLogged,
	oldEmail: string,
) => Promise<AxiosResponse<IUserLogged, any>> = (payload: IUserLogged, oldEmail: string) => {
	return http.put<IUserLogged>('update-client-info', payload, { params: { oldEmail } });
};

export const getAllFeedbacks: () => Promise<AxiosResponse<IFeedback[], any>> = () => {
	return http.get<IFeedback[]>('get-all-feedback');
};

export const getAllEWaitingRs: () => Promise<AxiosResponse<IEWaitingR[], any>> = () => {
	return http.get<IEWaitingR[]>('get-all-ewaitingr');
};

export const deleteIds: (path: string, ids: number[]) => Promise<AxiosResponse<boolean, any>> = (
	path: string,
	ids: number[],
) => {
	return http.post<boolean>(path, ids);
};

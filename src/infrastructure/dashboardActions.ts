import { AxiosResponse } from 'axios';

import http from '@/config/axiosConfig';
import { IFormEditPassword } from '@/types/pages/IDashBoard';
import { IUser } from '@/types/pages/types';

export const updatePassword: (
	payload: Omit<IFormEditPassword, 'verifyPassword'> & Pick<IUser, 'email'>,
) => Promise<AxiosResponse<string, any>> = (
	payload: Omit<IFormEditPassword, 'verifyPassword'> & Pick<IUser, 'email'>,
) => {
	return http.put<string>('update-password', payload);
};

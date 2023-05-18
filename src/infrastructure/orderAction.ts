import { AxiosResponse } from 'axios';

import http from '@/config/axiosConfig';
import { IBill } from '@/types/components/Order/type';

export const createBill: (payload: IBill) => Promise<AxiosResponse<boolean, any>> = (
	payload: IBill,
) => {
	return http.post<boolean>('save-bill', payload);
};

export const getOrders: (id: number) => Promise<AxiosResponse<IBill[], any>> = (id: number) => {
	return http.get<IBill[]>('get-all-bills', { params: { id } });
};

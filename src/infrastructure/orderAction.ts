import { AxiosResponse } from 'axios';

import { http } from '@/config/axiosConfig';
import { IBill } from '@/types/components/Order/type';

export const createBill: (payload: IBill) => Promise<AxiosResponse<boolean, any>> = (
	payload: IBill,
) => {
	const pathname = window.location.pathname;

	return http.post<boolean>('save-bill', payload, {
		params: {
			pathname: pathname,
		},
	});
};

export const getOrders: (id: number) => Promise<AxiosResponse<IBill[], any>> = (id: number) => {
	const pathname = window.location.pathname;

	return http.get<IBill[]>('get-all-bills', {
		params: { pathname: pathname, id },
	});
};

export const verifyRent: (billId: number, rid: number) => Promise<AxiosResponse<boolean, any>> = (
	billId: number,
	rid: number,
) => {
	const pathname = window.location.pathname;

	return http.post<boolean>(`verify-rent/${billId}/${rid}`, {
		params: {
			pathname: pathname,
		},
	});
};

export const deleteOrder: (id: number) => Promise<AxiosResponse<boolean, any>> = (id: number) => {
	const pathname = window.location.pathname;

	return http.delete<boolean>(`delete-bill/${id}`, {
		params: {
			pathname: pathname,
		},
	});
};

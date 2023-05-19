import { useQuery } from '@tanstack/react-query';

import { getOrders } from '@/infrastructure/orderAction';
import { IBill } from '@/types/components/Order/type';

export function GetOrders(id: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['search-news', id],
		queryFn: () => getOrders(id),
	});

	const res: IBill[] | undefined = data?.data;

	return {
		res,
		isLoading,
	};
}

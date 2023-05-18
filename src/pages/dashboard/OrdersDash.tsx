import React, { useContext } from 'react';

import { AuthContext } from '@/context/AuthProvider';
import { GetOrders } from '@/hooks/fetchApiOrders';
import { IUser } from '@/types/pages/types';

type Props = {};

const OrdersDash = (props: Props) => {
	const { user } = useContext(AuthContext);
	if (!user) {
		return <></>;
	}
	const { res, isLoading } = GetOrders((user as IUser)?.id as number);

	console.log(res, isLoading);
	return <div>OrdersDash</div>;
};

export default OrdersDash;

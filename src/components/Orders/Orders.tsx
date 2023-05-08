import React, { FC } from 'react';

import CardRoom2 from '../CardRoom/CardRoom2';

type Props = {};

const Orders: FC<Props> = () => {
	return (
		<div>
			<CardRoom2 />
			<CardRoom2 />
		</div>
	);
};

export default Orders;

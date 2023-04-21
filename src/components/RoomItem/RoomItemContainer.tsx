import React, { FC } from 'react';

import RoomItem from './RoomItem';

type Props = {};

const RoomItemContainer: FC<Props> = () => {
	return (
		<div>
			<RoomItem />
		</div>
	);
};

export default RoomItemContainer;

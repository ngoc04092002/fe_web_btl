import React, { FC, useState } from 'react';

import CardRoom2 from '../CardRoom/CardRoom2';

type Props = {};

const Orders: FC<Props> = () => {
	const roomLocal = localStorage.getItem('rooms');
	const rooms: any = roomLocal ? JSON.parse(roomLocal) : [];
	const [roomData, setRoomData] = useState(rooms);
	return (
		<div>
			{roomData &&
				!!roomData.length &&
				roomData.map((room: { id: React.Key | null | undefined }) => (
					<CardRoom2
						key={room.id}
						room={room}
						setRoomData={setRoomData}
					/>
				))}
		</div>
	);
};

export default Orders;

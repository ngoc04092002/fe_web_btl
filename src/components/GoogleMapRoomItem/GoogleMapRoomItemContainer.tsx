import React, { FC } from 'react';

import GoogleMapRoomItem from './GoogleMapRoomItem';


type Props = {};

const GoogleMapRoomItemContainer: FC<Props> = () => {
	return (
		<div>
			<GoogleMapRoomItem />
		</div>
	);
};

export default GoogleMapRoomItemContainer;

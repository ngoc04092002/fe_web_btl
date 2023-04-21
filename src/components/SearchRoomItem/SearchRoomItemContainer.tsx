import React, { FC } from 'react';

import SearchRoomItem from './SearchRoomItem';

type Props = {};

const SearchRoomItemContainer: FC<Props> = () => {
	return (
		<div>
			<SearchRoomItem />
		</div>
	);
};

export default SearchRoomItemContainer;

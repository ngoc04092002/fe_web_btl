import React, { FC } from 'react';

import SearchRoomItem from './SearchRoomItem';

import { IPostRoomResponse } from '@/types/pages/IDashBoard';

type Props = {
	data: IPostRoomResponse[] | [];
};

const SearchRoomItemContainer: FC<Props> = ({ data }) => {
	return (
		<div>
			<SearchRoomItem data={data} />
		</div>
	);
};

export default SearchRoomItemContainer;

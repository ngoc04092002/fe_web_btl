import React, { FC } from 'react';

import FilterRoom from './FilterRoom';

type Props = {
	styles?: string;
};

const FilterRoomContainer: FC<Props> = ({ styles }) => {
	return (
		<div className={styles}>
			<FilterRoom />
		</div>
	);
};

export default FilterRoomContainer;

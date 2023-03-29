import React, { FC } from 'react';

import BackdropNewsSearch from './BackdropNewsSearch';

type Props = {
	hanleShowSearch: React.MouseEventHandler<HTMLElement>;
	showSearch: boolean;
};

const BackdropNewsSearchContainer: FC<Props> = ({ hanleShowSearch, showSearch }) => {
	return (
		<div>
			<BackdropNewsSearch
				hanleShowSearch={hanleShowSearch}
				showSearch={showSearch}
			/>
		</div>
	);
};

export default BackdropNewsSearchContainer;

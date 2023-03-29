import React, { FC } from 'react';

import HeaderNews from './HeaderNews';

type Props = {
	hanleShowSearch: React.MouseEventHandler<HTMLElement>;
};

const HeaderNewsContainer: FC<Props> = ({ hanleShowSearch }) => {
	return (
		<div className='drop-shadow-lg bg-white'>
			<HeaderNews hanleShowSearch={hanleShowSearch} />
		</div>
	);
};

export default HeaderNewsContainer;

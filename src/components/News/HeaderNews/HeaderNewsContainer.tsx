import React, { FC } from 'react';

import HeaderNews from './HeaderNews';

type Props = {};

const HeaderNewsContainer: FC<Props> = () => {
	return (
		<div className='drop-shadow-lg bg-white'>
			<HeaderNews />
		</div>
	);
};

export default HeaderNewsContainer;

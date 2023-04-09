import React, { FC } from 'react';

import BodyNews from './BodyNews';

type Props = {};

const BodyNewsContainer: FC<Props> = () => {
	return (
		<div className='py-8 px-2 md:px-8 lg:px-16 mb-12'>
			<BodyNews />
		</div>
	);
};

export default BodyNewsContainer;

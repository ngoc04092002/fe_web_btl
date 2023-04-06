import React, { FC } from 'react';

import BodyNews from './BodyNews';

type Props = {};

const BodyNewsContainer: FC<Props> = () => {
	return (
		<div className='py-8 px-16'>
			<BodyNews />
		</div>
	);
};

export default BodyNewsContainer;

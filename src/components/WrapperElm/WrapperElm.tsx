import React, { FC } from 'react';

import DailyNews from '../introNews/DailyNews';

type Props = {};

const WrapperElm: FC<Props> = () => {
	return (
		<div className='mt-12'>
			<DailyNews />
		</div>
	);
};

export default WrapperElm;

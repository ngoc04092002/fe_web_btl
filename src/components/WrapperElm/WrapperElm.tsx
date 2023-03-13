import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import DailyNews from '../introNews/DailyNews';
import HotNews from '../introNews/HotNews';

type Props = {};

const WrapperElm: FC<Props> = () => {
	return (
		<div className='mt-12'>
			<DailyNews />
			<HotNews />
			<Link to='vourcher'>
				<img
					className='mt-12 w-full object-center object-fill h-48'
					src='https://cdn.mogi.vn/banner/2023/6_10913aaf-a15b-4cc0-a1b4-10e86ac87010.png'
					alt='vourcher'
				/>
			</Link>
		</div>
	);
};

export default WrapperElm;

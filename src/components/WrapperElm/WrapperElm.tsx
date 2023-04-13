import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import PaginationUtility from '../PaginationUtility';
import DailyNews from '../introNews/DailyNews';
import HotNews from '../introNews/HotNews';

type Props = {};

const WrapperElm: FC<Props> = () => {
	return (
		<div className='mt-12 pb-12'>
			<DailyNews />
			<HotNews title='Dự án nổi bật' />
			<Link to='vourcher'>
				<picture>
					<source
						media='(min-width: 992px)'
						srcSet='https://cdn.mogi.vn/banner/2023/6_9fb051d4-9ddb-4d54-a730-8bc2d79bd33e.png'
					/>
					<source
						media='(min-width: 767px)'
						srcSet='https://cdn.mogi.vn/banner/2023/6_9fb051d4-9ddb-4d54-a730-8bc2d79bd33e.png'
					/>
					<source
						media='(min-width: 320px)'
						srcSet='https://cdn.mogi.vn/banner/2023/6_9fb051d4-9ddb-4d54-a730-8bc2d79bd33e.png'
					/>
					<img
						src='https://cdn.mogi.vn/banner/2023/6_9fb051d4-9ddb-4d54-a730-8bc2d79bd33e.png'
						alt='Flowers'
						style={{ height: 'auto', marginTop: '2rem'}}
					/>
				</picture>
			</Link>
			<HotNews
				title='Bất động sản cho thuê'
				isRent
			/>
			<PaginationUtility />
		</div>
	);
};

export default WrapperElm;

import { RightOutlined } from '@ant-design/icons';
// import classNames from 'classnames/bind';
import React, { FC } from 'react';

import CardRoom1 from '../CardRoom/CardRoom1';

import NewsContainer from './NewsContainer';
// import styles from './news.module.scss';

import { IRoomInfo } from '@/types/components/type';
// const cx = classNames.bind(styles);
type Props = {
	title: string;
	dataNews: IRoomInfo[] | [];
};

const HotNews: FC<Props> = ({ title, dataNews }) => {
	return (
		<NewsContainer title={title}>
			<div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 relative'>
				{!!dataNews.length &&
					dataNews.map((d, index) => (
						<CardRoom1
							d={d}
							key={index}
						/>
					))}
				<div className='absolute -right-[16px] top-1/2 -translate-y-1/2 lg:block hidden'>
					<a href='/search-room'>
						<RightOutlined className='text-[30px] bg-white rounded-full w-[46px] h-[46px] flex items-center justify-center shadow-sm-cs' />
					</a>
				</div>
			</div>
		</NewsContainer>
	);
};

export default HotNews;

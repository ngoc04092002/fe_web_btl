import { RightOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import NewsContainer from './NewsContainer';
import styles from './news.module.scss';

import { IRoomInfo } from '@/types/components/type';
const cx = classNames.bind(styles);
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
						<Link
							key={index}
							to='/'
							className='rounded-lg shadow-006 h-[17.6rem]'
						>
							<div>
								<img
									className='rounded-t-lg h-44 w-full object-center object-cover'
									src={d.src}
									alt='bds'
								/>
							</div>
							<div className={`${cx('how_news-rent')}`}>
								<p className={`${cx('des')} text-sm font-medium`}>{d.des}</p>
								<div className={`${cx('propers')}`}>
									{!!d?.acreage && (
										<span className='font-bold'>
											{d.acreage} m<sub className='align-super'>2</sub>
										</span>
									)}
									{!!d?.bathRoom && <span>{d.bathRoom} WC</span>}
									{!!d?.bedRoom && <span>{d.bedRoom} VP</span>}
								</div>
								<p className='color-main text-[1.3rem] font-semibold'>{d.price}</p>
							</div>
						</Link>
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

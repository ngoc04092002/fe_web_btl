import classNames from 'classnames/bind';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './news.module.scss';
const cx = classNames.bind(styles);
type Props = {};

const HotNews: FC<Props> = () => {
	return (
		<section className='mt-12'>
			<h1 className='mx-0 mb-4 text-[1.3rem] font-bold font-[emoji]'>Dự án nổi bật</h1>
			<div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3'>
				<Link
					to='/'
					className='rounded-lg shadow-006 h-[17rem]'
				>
					<div>
						<img
							className='rounded-t-lg h-44 w-full object-center object-cover'
							src='https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg'
							alt='bds'
						/>
					</div>
					<div className={`${cx('hot_news-des')}`}>
						<p className='text-lg font-bold'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. No
						</p>
						<p className='text-base text-[#837676]'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. No
						</p>
						<p className='color-main text-[1.3rem] font-semibold'>Từ 3 tỷ 55 triệu</p>
					</div>
				</Link>
				<Link
					to='/'
					className='rounded-lg shadow-006 h-[17rem]'
				>
					<div>
						<img
							className='rounded-t-lg h-44 w-full object-center object-cover'
							src='https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg'
							alt='bds'
						/>
					</div>
					<div className={`${cx('hot_news-des')}`}>
						<p className='text-lg font-bold'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. No
						</p>
						<p className='text-base text-[#837676]'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. No
						</p>
						<p className='color-main text-[1.3rem] font-semibold'>Từ 3 tỷ 55 triệu</p>
					</div>
				</Link>
				<Link
					to='/'
					className='rounded-lg shadow-006 h-[17rem]'
				>
					<div>
						<img
							className='rounded-t-lg h-44 w-full object-center object-cover'
							src='https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg'
							alt='bds'
						/>
					</div>
					<div className={`${cx('hot_news-des')}`}>
						<p className='text-lg font-bold'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. No
						</p>
						<p className='text-base text-[#837676]'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. No
						</p>
						<p className='color-main text-[1.3rem] font-semibold'>Từ 3 tỷ 55 triệu</p>
					</div>
				</Link>
				<Link
					to='/'
					className='rounded-lg shadow-006 h-[17rem]'
				>
					<div>
						<img
							className='rounded-t-lg h-44 w-full object-center object-cover'
							src='https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg'
							alt='bds'
						/>
					</div>
					<div className={`${cx('hot_news-des')}`}>
						<p className='text-lg font-bold'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. No
						</p>
						<p className='text-base text-[#837676]'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. No
						</p>
						<p className='color-main text-[1.3rem] font-semibold'>Từ 3 tỷ 55 triệu</p>
					</div>
				</Link>
				<Link
					to='/'
					className='rounded-lg shadow-006 h-[17rem]'
				>
					<div>
						<img
							className='rounded-t-lg h-44 w-full object-center object-cover'
							src='https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg'
							alt='bds'
						/>
					</div>
					<div className={`${cx('hot_news-des')}`}>
						<p className='text-lg font-bold'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. No
						</p>
						<p className='text-base text-[#837676]'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. No
						</p>
						<p className='color-main text-[1.3rem] font-semibold'>Từ 3 tỷ 55 triệu</p>
					</div>
				</Link>
			</div>
		</section>
	);
};

export default HotNews;

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
	isRent?: boolean;
};

const HotNews: FC<Props> = ({ title, isRent = false }) => {
	const dataHotNews: IRoomInfo[] = [
		{
			src: 'https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg',
			title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. No',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. No',
			price: 'Từ 3 tỷ 55 triệu',
		},
		{
			src: 'https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg',
			title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. No',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. No',
			price: 'Từ 3 tỷ 55 triệu',
		},
		{
			src: 'https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg',
			title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. No',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. No',
			price: 'Từ 3 tỷ 55 triệu',
		},
		{
			src: 'https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg',
			title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. No',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. No',
			price: 'Từ 3 tỷ 55 triệu',
		},
		{
			src: 'https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg',
			title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. No',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. No',
			price: 'Từ 3 tỷ 55 triệu',
		},
	];

	const dataHotNewsRent: IRoomInfo[] = [
		{
			src: 'https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt quia quaerat consectetur consequuntur sapiente recusandae illum quibusdam tempora aliquamcommodi doloremque facere, sed nemo corporis. Vero ex alias quos.',
			bathRoom: '2',
			bedRoom: '1',
			acreage: '70',
			price: 'Từ 3 tỷ 55 triệu',
		},
		{
			src: 'https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt quia quaerat consectetur consequuntur sapiente recusandae illum quibusdam tempora aliquamcommodi doloremque facere, sed nemo corporis. Vero ex alias quos.',
			bathRoom: '2',
			bedRoom: '1',
			acreage: '70',
			price: 'Từ 3 tỷ 55 triệu',
		},
		{
			src: 'https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt quia quaerat consectetur consequuntur sapiente recusandae illum quibusdam tempora aliquamcommodi doloremque facere, sed nemo corporis. Vero ex alias quos.',
			bathRoom: '2',
			bedRoom: '1',
			acreage: '70',
			price: 'Từ 3 tỷ 55 triệu',
		},
		{
			src: 'https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt quia quaerat consectetur consequuntur sapiente recusandae illum quibusdam tempora aliquamcommodi doloremque facere, sed nemo corporis. Vero ex alias quos.',
			bathRoom: '2',
			bedRoom: '1',
			acreage: '70',
			price: 'Từ 3 tỷ 55 triệu',
		},
		{
			src: 'https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt quia quaerat consectetur consequuntur sapiente recusandae illum quibusdam tempora aliquamcommodi doloremque facere, sed nemo corporis. Vero ex alias quos.',
			bathRoom: '2',
			bedRoom: '1',
			acreage: '70',
			price: 'Từ 3 tỷ 55 triệu',
		},
	];
	return (
		<NewsContainer title={title}>
			<div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 relative'>
				{!isRent &&
					!!dataHotNews.length &&
					dataHotNews.map((d, index) => (
						<Link
							key={index}
							to='/'
							className='rounded-lg shadow-006 h-[17rem]'
						>
							<div>
								<img
									className='rounded-t-lg h-44 w-full object-center object-cover'
									src={d.src}
									alt='bds'
								/>
							</div>
							<div className={`${cx('hot_news-des')}`}>
								<p className='text-lg font-bold'>{d.title}</p>
								<p className='text-base text-[#837676]'>{d.des}</p>
								<p className='color-main text-[1.3rem] font-semibold'>{d.price}</p>
							</div>
						</Link>
					))}

				{isRent &&
					!!dataHotNewsRent.length &&
					dataHotNewsRent.map((d, index) => (
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
									<span className='font-bold'>
										{d.acreage} m<sub className='align-super'>2</sub>
									</span>
									<span>{d.bathRoom} WC</span>
									<span>{d.bedRoom} VP</span>
								</div>
								<p className='color-main text-[1.3rem] font-semibold'>{d.price}</p>
							</div>
						</Link>
					))}
				<div className='absolute -right-[16px] top-1/2 -translate-y-1/2 lg:block hidden'>
					<a href='/'>
						<RightOutlined className='text-[30px] bg-white rounded-full w-[46px] h-[46px] flex items-center justify-center shadow-sm-cs' />
					</a>
				</div>
			</div>
		</NewsContainer>
	);
};

export default HotNews;

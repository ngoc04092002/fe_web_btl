import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import PaginationUtility from '../PaginationUtility';
import DailyNews from '../introNews/DailyNews';
import HotNews from '../introNews/HotNews';

import { IRoomInfo } from '@/types/components/type';

type Props = {};

const WrapperElm: FC<Props> = () => {
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
		<div className='mt-12 pb-12'>
			<DailyNews />
			<HotNews
				title='Dự án nổi bật'
				dataNews={dataHotNews}
			/>
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
						style={{ height: 'auto', marginTop: '2rem' }}
					/>
				</picture>
			</Link>
			<HotNews
				title='Bất động sản cho thuê'
				dataNews={dataHotNewsRent}
			/>
			<PaginationUtility />
		</div>
	);
};

export default WrapperElm;

import { FolderOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import React, { FC, useState } from 'react';

import styles from './search-room-item.module.scss';

import { BookMarkHaveStarIcon } from '@/assets/icons';
import { IPostRoomResponse } from '@/types/pages/IDashBoard';

type Props = {
	data: IPostRoomResponse;
};
const cx = classNames.bind(styles);

const Item: FC<Props> = ({ data }) => {
	const [favorite, setFavorite] = useState(false);

	const handleFavoriteCLick = () => {
		setFavorite(!favorite);
	};
	return (
		<>
			<BookMarkHaveStarIcon className='top-0 right-0 absolute w-5 h-5 fill-[#ff9200]' />
			<div className='relative w-2/6'>
				{data?.src?.[0]?.src.includes('mp4') ? (
					<video
						className='h-full rounded-lg w-full'
						src={data?.src?.[0]?.src}
					/>
				) : (
					<img
						className='aspect-[4/3] cus-screen:h-[165px] h-[100px] rounded-lg w-full'
						src={data?.src?.[0]?.src}
						alt=''
					/>
				)}

				<div className='absolute right-2 bottom-0 text-white'>
					<FolderOutlined className='text-[1.8rem]' />
					<span className='absolute right-1/2 translate-x-1/2 bottom-1 text-xs'>
						{data.src?.length}
					</span>
				</div>
				<small className='mt-2 cus-screen:hidden block text-center'>
					{dayjs(data.createdAt).format('DD/MM/YYYY')}
				</small>
			</div>
			<div className={`${cx('search_room-info')} pl-3 w-4/6`}>
				<h1 className='vertical-2 text-[#3c4146] font-semibold mb-2'>
					<a href={`/room-item/${data.id}`}>{data.title}</a>
				</h1>
				<p className='text-[#657786] text-sm'>{data.address}</p>
				<ul className='flex items-center cus-screen:my-3 my-1'>
					<li className='mr-2 font-semibold text-sm'>
						{data.acreage} m <sup>2</sup>
					</li>
					<li className='mr-2'>{data.bedRoom} PN</li>
					<li>{data.bathroom} WC</li>
				</ul>
				<div className='flex items-center'>
					<h2 className='text-[#0499a8] font-bold text-lg mr-4'>{data.price}</h2>
					<h2 className='font-bold text-lg'>
						Sale:{' '}
						<span className='text-[#0499a8]'>
							{data.sale}
							<small>%</small>
						</span>
					</h2>
				</div>
				<small className='mt-2 cus-screen:block hidden'>
					{dayjs(data.createdAt).format('DD/MM/YYYY')}
				</small>
				{favorite ? (
					<HeartFilled
						onClick={handleFavoriteCLick}
						className='text-2xl cursor-pointer absolute right-2 bottom-0 z-10 text-red-600'
					/>
				) : (
					<HeartOutlined
						onClick={handleFavoriteCLick}
						className='text-2xl cursor-pointer absolute right-2 bottom-0 z-10'
					/>
				)}
			</div>
		</>
	);
};

export default Item;

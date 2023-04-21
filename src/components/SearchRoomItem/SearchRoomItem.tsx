import { FolderOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC, useState } from 'react';

import styles from './search-room-item.module.scss';

import { BookMarkHaveStarIcon } from '@/assets/icons';
type Props = {};

const cx = classNames.bind(styles);

const SearchRoomItem: FC<Props> = () => {
	const [favorite, setFavorite] = useState(false);

	const handleFavoriteCLick = () => {
		setFavorite(!favorite);
	};

	return (
		<div>
			<ul>
				<li className='pt-4 mb-4 border-0 border-t border-solid border-t-[#ccc] relative flex items-center justify-between'>
					<BookMarkHaveStarIcon className='top-0 right-0 absolute w-5 h-5 fill-[#ff9200]' />
					<div className='relative w-2/6'>
						<img
							className='aspect-[4/3] cus-screen:h-[165px] h-[100px] rounded-lg w-full'
							src='https://marketingaccesspass.com/wp-content/uploads/2015/10/Podcast-Website-Design-Background-Image.jpg'
							alt=''
						/>
						<div className='absolute right-2 bottom-0 text-white'>
							<FolderOutlined className='text-[1.8rem]' />
							<span className='absolute right-1/2 translate-x-1/2 bottom-1 text-xs'>6</span>
						</div>
						<small className='mt-2 cus-screen:hidden block text-center'>06/04/2023</small>
					</div>
					<div className={`${cx('search_room-info')} pl-3 w-4/6`}>
						<h1 className='vertical-2 text-[#3c4146] font-semibold mb-2'>
							<a href='/room-item'>
								Duplex ban công NEW siêu đẹp. Full Nội Thất Xịn_Ngay Bảy Hiền, CV LTRDuplex ban công
								NEW siêu đẹp. Full Nội Thất Xịn_Ngay Bảy Hiền, CV LTR
							</a>
						</h1>
						<p className='text-[#657786] text-sm'>Quận Tân Bình, TPHCM</p>
						<ul className='flex items-center cus-screen:my-3 my-1'>
							<li className='mr-2 font-semibold text-sm'>
								25 m <sup>2</sup>
							</li>
							<li className='mr-2'>1 PN</li>
							<li>1 WC</li>
						</ul>
						<h2 className='text-[#0499a8] font-bold text-lg'>5 triệu 500 nghìn</h2>
						<small className='mt-2 cus-screen:block hidden'>06/04/2023</small>
						{favorite ? (
							<HeartFilled
								onClick={handleFavoriteCLick}
								className='text-2xl cursor-pointer absolute right-2 bottom-2 z-10 text-red-600'
							/>
						) : (
							<HeartOutlined
								onClick={handleFavoriteCLick}
								className='text-2xl cursor-pointer absolute right-2 bottom-2 z-10'
							/>
						)}
					</div>
				</li>
			</ul>
		</div>
	);
};

export default SearchRoomItem;

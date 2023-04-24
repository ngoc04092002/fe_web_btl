import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CardUserInfo from '../CardUserInfo';

import './room-item.scss';

type Props = {};

const RoomItem: FC<Props> = () => {
	const { id } = useParams();

	console.log(id);
	return (
		<div className='room_item-container mx-4 lg:px-4 xl:px-24'>
			<div className='text-end mr-4'>
				<a
					href='/search-room'
					className='room_item-return mr-4 py-2 pr-4 pl-2'
				>
					Về danh sách
				</a>
				<a
					href='/room-item'
					className='room_item-next py-2 pl-4 pr-2'
				>
					Tin sau
				</a>
			</div>
			<div className='grid grid-cols-3 gap-4 mt-8'>
				<div className='room_item-swiper cus-screen:col-span-2 col-span-3 relative'>
					<Swiper
						pagination={{
							type: 'fraction',
						}}
						navigation={true}
						modules={[Pagination, Navigation]}
						className='mySwiper'
					>
						<SwiperSlide>
							<img
								src='https://cloud.mogi.vn/images/2022/10/24/094/f830ea1cc9f04a47bdcbd5db992cee5c.jpg'
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='https://marketingaccesspass.com/wp-content/uploads/2015/10/Podcast-Website-Design-Background-Image.jpg'
								alt=''
							/>
						</SwiperSlide>
					</Swiper>
				</div>
				<CardUserInfo />
			</div>
		</div>
	);
};

export default RoomItem;

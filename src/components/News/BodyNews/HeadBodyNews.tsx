import React, { FC } from 'react';
import { Autoplay, Navigation, EffectCreative } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './body-news.css';

type Props = {};

const HeadBodyNews: FC<Props> = () => {
	return (
		<div className='w-full'>
			<div className='flex flex-row items-center w-full justify-between'>
				<h1 className='bg-[#1cbcc7] py-1 px-2 uppercase text-[12px] font-bold text-white whitespace-nowrap mr-4'>
					tin mới nhất
				</h1>
				<Swiper
					style={{
						height: '26px',
						width: '100%',
						display: 'flex',
						alignItems: 'center',
					}}
					spaceBetween={30}
					centeredSlides={false}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					loop={true}
					effect={'creative'}
					creativeEffect={{
						prev: {
							opacity: 0,
							translate: [0, 0, -50],
						},
						next: {
							translate: ['100%', 0, 0],
							opacity: 1,
						},
					}}
					navigation={true}
					modules={[Autoplay, Navigation, EffectCreative]}
					className='mySwiper'
				>
					<SwiperSlide style={{ fontSize: 12, width: 'fit-content' }}>Slide 1</SwiperSlide>
					<SwiperSlide style={{ fontSize: 12, width: 'fit-content' }}>Slide 2</SwiperSlide>
					<SwiperSlide style={{ fontSize: 12, width: 'fit-content' }}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque saepe aspernatur
						illo dignissimos molestiae labore adipisci nulla, recusandae molestias debitis, alias
						repellat maiores consequuntur possimus totam a. Harum, esse voluptate.
					</SwiperSlide>
				</Swiper>
			</div>
			<div></div>
		</div>
	);
};

export default HeadBodyNews;

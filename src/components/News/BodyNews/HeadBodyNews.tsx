import React, { FC } from 'react';
import { Autoplay, Navigation, EffectCreative } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './body-news.scss';
import NewsHomeHot from '../components/NewsHomeHot/NewsHomeHot';

type Props = {};

const HeadBodyNews: FC<Props> = () => {
	return (
		<div className='body_news-container w-full'>
			<div className='flex flex-col md:flex-row items-center w-full justify-between select-none'>
				<h1 className='bg-[#1cbcc7] py-1 px-2 uppercase text-[12px] font-bold text-white whitespace-nowrap mr-4 md:mb-0 mb-3'>
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
					<SwiperSlide style={{ fontSize: 16 }}>
						o Thái Tuế Là Gì? Ý Nghĩa, Các Tuổi Phạm Thái Tuế Trong Năm 2023 Sao Tử Vi là gì? Luận
						giải ý nghĩa sao Tử Vi tại các cung mệnh
					</SwiperSlide>
					<SwiperSlide style={{ fontSize: 16 }}>
						Cắt Tóc Ngày Nào Tốt? Lịch Cắt Tóc 2023 Để Gặp Được Nhiều May Mắn
					</SwiperSlide>
					<SwiperSlide style={{ fontSize: 16 }}>
						Nghĩa, Các Tuổi Phạm Thái Tuế Trong Năm 2023
					</SwiperSlide>
				</Swiper>
			</div>
			<div className='grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-none gap-1 mt-10 h-[80vh]'>
				<NewsHomeHot
					href='/news'
					src='https://cdnnews.mogi.vn/news/wp-content/uploads/2022/11/23091700/cat-toc-ngay-nao-tot-696x392.jpg'
					title='Cắt Tóc Ngày Nào Tốt? Lịch Cắt Tóc 2023 Để Gặp Được Nhiều May Mắn'
					dateTime='06/04/2023'
				/>
				<div className='grid grid-rows-2 sm:grid-rows-3 gap-1'>
					<NewsHomeHot
						styles='sm:row-span-2 row-span-1'
						href='/news'
						src='https://cdnnews.mogi.vn/news/wp-content/uploads/2022/01/06113016/sao-thai-tue-696x379.jpeg'
						title='Sao Thái Tuế Là Gì? Ý Nghĩa, Các Tuổi Phạm Thái Tuế Trong Năm 2023'
						dateTime='06/04/2023'
					/>
					<div className='row-span-1 grid grid-cols-2 gap-1'>
						<NewsHomeHot
							href='/news'
							src='https://cdnnews.mogi.vn/news/wp-content/uploads/2022/11/23091700/cat-toc-ngay-nao-tot-696x392.jpg'
							title='Cắt Tóc Ngày Nào Tốt? Lịch Cắt Tóc 2023 Để Gặp Được Nhiều May Mắn'
							dateTime='06/04/2023'
							styleTitle='text-sm'
						/>
						<NewsHomeHot
							href='/news'
							src='https://cdnnews.mogi.vn/news/wp-content/uploads/2023/04/06111134/sao-tu-vi-17-696x392.jpg'
							title='Cắt Tóc Ngày Nào Tốt? Lịch Cắt Tóc 2023 Để Gặp Được Nhiều May Mắn'
							dateTime='06/04/2023'
							styleTitle='text-sm'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeadBodyNews;

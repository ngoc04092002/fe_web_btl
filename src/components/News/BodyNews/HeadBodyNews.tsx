import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import React, { FC } from 'react';
import { Autoplay, Navigation, EffectCreative } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './body-news.scss';
import NewsHomeHot from '../components/NewsHomeHot/NewsHomeHot';

import Loading from '@/components/Loading/Loading';
import { filterNews } from '@/infrastructure/dashboardActions';
import { INewsResponse } from '@/types/components/News/types';

type Props = {};
const dailyNewsDataLimit = 8;

const HeadBodyNews: FC<Props> = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['get-news-post-limit', dailyNewsDataLimit],
		queryFn: () => filterNews({ limit: dailyNewsDataLimit }),
		staleTime: 10 * 60 * 1000,
		cacheTime: 20 * 60 * 1000,
	});

	if (!data || isLoading) {
		return <Loading />;
	}
	const res: INewsResponse[] = data?.data;

	if (!res) {
		return <></>;
	}

	return (
		<div className='w-full'>
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
					{res &&
						res.slice(0, 4).map((r) => (
							<SwiperSlide
								key={r.id}
								style={{ fontSize: 16 }}
							>
								{r.title}
							</SwiperSlide>
						))}
				</Swiper>
			</div>
			<div className='grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-none gap-1 mt-10 h-[80vh]'>
				<NewsHomeHot
					href={`/news/${res[4].id}`}
					src={res[4].img}
					title={res[4].title}
					dateTime={dayjs(res[4].createdAt).format('DD/MM/YYYY')}
				/>
				<div className='grid grid-rows-2 sm:grid-rows-3 gap-1'>
					<NewsHomeHot
						styles='sm:row-span-2 row-span-1'
						href={`/news/${res[5].id}`}
						src={res[5].img}
						title={res[5].title}
						dateTime={dayjs(res[5].createdAt).format('DD/MM/YYYY')}
					/>
					<div className='row-span-1 grid grid-cols-2 gap-1'>
						{res &&
							res.slice(6).map((r) => (
								<NewsHomeHot
									key={r.id}
									styleTitle='text-sm'
									href={`/news/${r.id}`}
									src={r.img}
									title={r.title}
									dateTime={dayjs(r.createdAt).format('DD/MM/YYYY')}
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeadBodyNews;

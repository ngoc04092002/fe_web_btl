import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../Loading/Loading';

import NewsContainer from './NewsContainer';
import styles from './news.module.scss';

import { filterNews } from '@/infrastructure/dashboardActions';
import { INewsResponse } from '@/types/components/News/types';
const cx = classNames.bind(styles);
type Props = {};
const dailyNewsDataLimit = 9;

const DailyNews: FC<Props> = () => {
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

	return (
		<NewsContainer title='Tin tức nhà trọ'>
			<div className='grid grid-cols-2 cus-screen:grid-cols-3 gap-3'>
				<div className='col-span-2'>
					<div className='grid grid-rows-2 gap-3'>
						<div className='row-span-2 h-52 w-full bg-[#f0f2f5] rounded-2xl shadow-md'>
							<Link
								to={`/news/${res[0].id}`}
								className='grid grid-cols-2 h-52'
							>
								<div className='h-52'>
									<img
										className='object-fill object-center h-full w-full rounded-2xl'
										src={res[0].img}
										alt='news'
									/>
								</div>
								<div className='h-52 w-full p-4'>
									<h1 className={`${cx('title')} h-14 text-xl mb-3`}>{res[0].title}</h1>
									<p className={`${cx('des')} h-24`}>{res[0].des}</p>
								</div>
							</Link>
						</div>
						<div className='grid grid-cols-2 gap-3 '>
							<Link
								to={`/news/${res[1].id}`}
								className='grid grid-cols-3 h-28 hover:shadow-sm-cs linear-shadow rounded-lg'
							>
								<div className='h-28'>
									<img
										className='object-fill object-center h-full w-full rounded-2xl'
										src={res[1].img}
										alt='news'
									/>
								</div>
								<div className='h-28 w-full p-4 col-span-2'>
									<h1 className={`${cx('title')} h-12 text-md mb-3`}>{res[1].des}</h1>
								</div>
							</Link>
							<Link
								to={`/news/${res[2].id}`}
								className='grid grid-cols-3 h-28 hover:shadow-sm-cs linear-shadow rounded-lg'
							>
								<div className='h-28'>
									<img
										className='object-fill object-center h-full w-full rounded-2xl'
										src={res[2].img}
										alt='news'
									/>
								</div>
								<div className='h-28 w-full p-4 col-span-2'>
									<h1 className={`${cx('title')} h-12 text-md mb-3`}>{res[2].des}</h1>
								</div>
							</Link>
						</div>
					</div>
				</div>
				<div className='h-full cus-screen:col-span-1 col-span-2'>
					<div className='grid grid-cols-2 gap-2 cus-screen:block'>
						{res.slice(3).map((r) => (
							<Link
								key={r.id}
								className={`${cx('news-more')}`}
								to={`/news/${r.id}`}
							>
								{r.des}
							</Link>
						))}
						<Link
							to='/news'
							className='color-main font-medium text-base w-fit p-3'
						>
							Xem tất cả
						</Link>
					</div>
				</div>
			</div>
		</NewsContainer>
	);
};

export default DailyNews;

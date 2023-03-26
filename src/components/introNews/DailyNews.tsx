import classNames from 'classnames/bind';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import NewsContainer from './NewsContainer';
import styles from './news.module.scss';
const cx = classNames.bind(styles);
type Props = {};

const DailyNews: FC<Props> = () => {
	return (
		<NewsContainer title='Tin tức nhà trọ'>
			<div className='grid grid-cols-2 cus-screen:grid-cols-3 gap-3'>
				<div className='col-span-2'>
					<div className='grid grid-rows-2 gap-3'>
						<div className='row-span-2 h-52 w-full bg-[#f0f2f5] rounded-2xl shadow-md'>
							<Link
								to='/news'
								className='grid grid-cols-2 h-52'
							>
								<div className='h-52'>
									<img
										className='object-fill object-center h-full w-full rounded-2xl'
										src='https://cppaper.com.vn/wp-content/uploads/2019/12/244-2448102_newspaper-png-transparent-images-news-png.jpg'
										alt='news'
									/>
								</div>
								<div className='h-52 w-full p-4'>
									<h1 className={`${cx('title')} h-14 text-xl mb-3`}>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt sit quisquam
										explicabo molestias? Sint quis eligendi sit, repellendus vitae delectus? Sit
										voluptatum vel asperiores! Quas accusantium labore soluta unde voluptates.
									</h1>
									<p className={`${cx('des')} h-24`}>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi possimus
										illum dolorum. Voluptatem nemo impedit ratione aliquid vero nulla debitis
										voluptates quidem temporibus! Ratione, doloremque deserunt. Voluptatum, earum
										fugit. Doloremque. Odit dolore nesciunt voluptates impedit rem molestiae
										voluptatem, quos expedita, quidem cupiditate atque doloribus, possimus
										aspernatur. Soluta rem repellendus debitis. Sed facilis commodi possimus
										ducimus. Praesentium sit laborum consectetur at!
									</p>
								</div>
							</Link>
						</div>
						<div className='grid grid-cols-2 gap-3 '>
							<Link
								to='/news'
								className='grid grid-cols-3 h-28 hover:shadow-sm-cs linear-shadow rounded-lg'
							>
								<div className='h-28'>
									<img
										className='object-fill object-center h-full w-full rounded-2xl'
										src='https://cppaper.com.vn/wp-content/uploads/2019/12/244-2448102_newspaper-png-transparent-images-news-png.jpg'
										alt='news'
									/>
								</div>
								<div className='h-28 w-full p-4 col-span-2'>
									<h1 className={`${cx('title')} h-12 text-md mb-3`}>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt sit quisquam
										explicabo molestias? Sint quis eligendi sit, repellendus vitae delectus? Sit
										voluptatum vel asperiores! Quas accusantium labore soluta unde voluptates.
									</h1>
								</div>
							</Link>
							<Link
								to='/news'
								className='grid grid-cols-3 h-28 hover:shadow-sm-cs linear-shadow rounded-lg'
							>
								<div className='h-28'>
									<img
										className='object-fill object-center h-full w-full rounded-2xl'
										src='https://cppaper.com.vn/wp-content/uploads/2019/12/244-2448102_newspaper-png-transparent-images-news-png.jpg'
										alt='news'
									/>
								</div>
								<div className='h-28 w-full p-4 col-span-2'>
									<h1 className={`${cx('title')} h-12 text-md mb-3`}>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt sit quisquam
										explicabo molestias? Sint quis eligendi sit, repellendus vitae delectus? Sit
										voluptatum vel asperiores! Quas accusantium labore soluta unde voluptates.
									</h1>
								</div>
							</Link>
						</div>
					</div>
				</div>
				<div className='h-full cus-screen:col-span-1 col-span-2'>
					<div className='grid grid-cols-2 gap-2 cus-screen:block'>
						<Link
							className={`${cx('news-more')}`}
							to='/news'
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam suscipit dolore
							beatae quod inventore recusandae necessitatibus deserunt facilis quae minus sint ex
							ipsa id quibusdam odit totam, amet illo?
						</Link>
						<Link
							className={`${cx('news-more')}`}
							to='/'
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam suscipit dolore
							beatae quod inventore recusandae necessitatibus deserunt facilis quae minus sint ex
							ipsa id quibusdam odit totam, amet illo?
						</Link>
						<Link
							className={`${cx('news-more')}`}
							to='/'
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam suscipit dolore
							beatae quod inventore recusandae necessitatibus deserunt facilis quae minus sint ex
							ipsa id quibusdam odit totam, amet illo?
						</Link>
						<Link
							className={`${cx('news-more')}`}
							to='/'
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam suscipit dolore
							beatae quod inventore recusandae necessitatibus deserunt facilis quae minus sint ex
							ipsa id quibusdam odit totam, amet illo?
						</Link>
						<Link
							className={`${cx('news-more')}`}
							to='/'
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam suscipit dolore
							beatae quod inventore recusandae necessitatibus deserunt facilis quae minus sint ex
							ipsa id quibusdam odit totam, amet illo?
						</Link>
						<Link
							className={`${cx('news-more')}`}
							to='/'
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam suscipit dolore
							beatae quod inventore recusandae necessitatibus deserunt facilis quae minus sint ex
							ipsa id quibusdam odit totam, amet illo?
						</Link>
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

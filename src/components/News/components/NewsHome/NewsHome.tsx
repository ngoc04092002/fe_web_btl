import React, { FC } from 'react';

import HeadBodyNews from '../../BodyNews/HeadBodyNews';

import { BtnNewsCard, NewsCardSingle, NewsCardVertical } from '@/components/helpers/NewsCardTypes';
import TitleNews from '@/components/helpers/TitleNews/TItleNews';

type Props = {};

const NewsHome: FC<Props> = () => {
	return (
		<>
			<div className='w-full'>
				<HeadBodyNews />
			</div>
			<div className='flex flex-col md:flex-row items-start mt-12 w-full '>
				<div className='w-full md:w-3/5'>
					<div className='w-full mb-14'>
						<a href='http://localhost:2002/news'>
							<TitleNews
								title='phong thủy'
								styles='uppercase !text-base'
							/>
						</a>
						<div className='flex md:flex-row flex-col items-start justify-between mt-6'>
							<NewsCardSingle
								src='http://mogi.vn/news/wp-content/uploads/2017/05/trang-trí-cầu-thang-218x150.jpg'
								styles='mb-8'
								title='Lorem ipsum dolor sit amet consectetur, adipisicing elit. At neque temporibus corporisfugit aliquam voluptatum, aperiam fuga ipsum quis amet? Fugiat, mollitia facilis nam sednatus quibusdam. Odit, soluta architecto!'
								des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque at corrupti officia	repellat sit rem saepe laudantium cupiditate tempore architecto dolor est, vel quam sunteligendi veniam quo ratione iure.'
							/>
							<div className='flex flex-col items-start w-full md:w-3/5 ml-0 md:ml-4 lg:ml-8'>
								<NewsCardVertical
									src='https://cdnnews.mogi.vn/news/wp-content/uploads/2018/04/cac-cong-trinh-kien-truc-co-dai-phuong-dong-485x360.jpg'
									title='Bày trí nội thất sai cách – Nguy hiểm không tưởng!Bày trí nội thất sai'
									styleImg='md:!w-[26rem] !w-[8rem] mb-8'
								/>
							</div>
						</div>
						<BtnNewsCard />
					</div>
					<div className='w-full mb-14'>
						<a href='http://localhost:2002/news'>
							<TitleNews
								title='Kiến trúc - nhà đẹp'
								styles='uppercase !text-base'
							/>
						</a>
						<div className='flex flex-wrap items-start justify-between mt-6'>
							<NewsCardSingle
								src='http://mogi.vn/news/wp-content/uploads/2017/05/trang-trí-cầu-thang-218x150.jpg'
								title='Lorem ipsum dolor sit amet consectetur, adipisicing elit. At neque temporibus corporisfugit aliquam voluptatum,'
								styles='mb-8 md:!w-[48%]'
								styleImg='!h-[11rem]'
							/>
							<NewsCardSingle
								src='http://mogi.vn/news/wp-content/uploads/2017/05/trang-trí-cầu-thang-218x150.jpg'
								title='Lorem ipsum dolor sit amet consectetur, adipisicing elit. At neque temporibus corporisfugit aliquam voluptatum,'
								styles='mb-8 md:!w-[48%]'
								styleImg='!h-[11rem]'
							/>
							<NewsCardSingle
								src='http://mogi.vn/news/wp-content/uploads/2017/05/trang-trí-cầu-thang-218x150.jpg'
								title='Lorem ipsum dolor sit amet consectetur, adipisicing elit. At neque temporibus corporisfugit aliquam voluptatum,'
								styles='mb-8 md:!w-[48%]'
								styleImg='!h-[11rem]'
							/>
							<NewsCardSingle
								src='http://mogi.vn/news/wp-content/uploads/2017/05/trang-trí-cầu-thang-218x150.jpg'
								title='Lorem ipsum dolor sit amet consectetur, adipisicing elit. At neque temporibus corporisfugit aliquam voluptatum,'
								styles='mb-8 md:!w-[48%]'
								styleImg='!h-[11rem]'
							/>
						</div>
						<BtnNewsCard />
					</div>
					<div className='w-full mb-14'>
						<a href='http://localhost:2002/news'>
							<TitleNews
								title='Lời khuyên bất động sản'
								styles='uppercase !text-base'
							/>
						</a>
						<div className='flex items-start justify-between mt-6'>
							<NewsCardSingle
								src='http://mogi.vn/news/wp-content/uploads/2017/05/trang-trí-cầu-thang-218x150.jpg'
								title='Lorem ipsum dolor sit amet consectetur, adipisicing elit. At neque temporibus corporisfugit aliquam voluptatum,'
								styles='mb-8 !w-[30%]'
								styleImg='!h-[11rem]'
							/>
							<NewsCardSingle
								src='http://mogi.vn/news/wp-content/uploads/2017/05/trang-trí-cầu-thang-218x150.jpg'
								title='Lorem ipsum dolor sit amet consectetur, adipisicing elit. At neque temporibus corporisfugit aliquam voluptatum,'
								styles='mb-8 !w-[30%]'
								styleImg='!h-[11rem]'
							/>
							<NewsCardSingle
								src='http://mogi.vn/news/wp-content/uploads/2017/05/trang-trí-cầu-thang-218x150.jpg'
								title='Lorem ipsum dolor sit amet consectetur, adipisicing elit. At neque temporibus corporisfugit aliquam voluptatum,'
								styles='mb-8 !w-[30%]'
								styleImg='!h-[11rem]'
							/>
						</div>
						<BtnNewsCard />
					</div>
					<div className='w-full mb-14'>
						<a href='http://localhost:2002/news'>
							<TitleNews
								title='Kiến thức bất động sản'
								styles='uppercase !text-base'
							/>
						</a>
						<div className='flex flex-col items-start justify-between mt-6'>
							<NewsCardVertical
								src='https://cdnnews.mogi.vn/news/wp-content/uploads/2018/04/cac-cong-trinh-kien-truc-co-dai-phuong-dong-485x360.jpg'
								styleTitle='!text-lg'
								des='Bày trí nội thất sai cách – Nguy hiểm không tưởng!Bày trí nội thất sai cách –Nguy hiểm không tưởng!Bày trí nội thất sai cách – Ng'
								styleImg='h-[8rem]'
								styles='mb-8'
								title='Bày trí nội thất sai cách – Nguy hiểm không tưởng!Bày trí nội thất sai cách –Nguy hiểm không tưởng!Bày trí nội thất sai cách – Nguy hiểm không tưởng!'
							/>
							<NewsCardVertical
								src='https://cdnnews.mogi.vn/news/wp-content/uploads/2018/04/cac-cong-trinh-kien-truc-co-dai-phuong-dong-485x360.jpg'
								styleTitle='!text-lg'
								des='Bày trí nội thất sai cách – Nguy hiểm không tưởng!Bày trí nội thất sai cách –Nguy hiểm không tưởng!Bày trí nội thất sai cách – Ng'
								styleImg='h-[8rem]'
								styles='mb-8'
								title='Bày trí nội thất sai cách – Nguy hiểm không tưởng!Bày trí nội thất sai cách –Nguy hiểm không tưởng!Bày trí nội thất sai cách – Nguy hiểm không tưởng!'
							/>
							<NewsCardVertical
								src='https://cdnnews.mogi.vn/news/wp-content/uploads/2018/04/cac-cong-trinh-kien-truc-co-dai-phuong-dong-485x360.jpg'
								styleTitle='!text-lg'
								des='Bày trí nội thất sai cách – Nguy hiểm không tưởng!Bày trí nội thất sai cách –Nguy hiểm không tưởng!Bày trí nội thất sai cách – Ng'
								styleImg='h-[8rem]'
								styles='mb-8'
								title='Bày trí nội thất sai cách – Nguy hiểm không tưởng!Bày trí nội thất sai cách –Nguy hiểm không tưởng!Bày trí nội thất sai cách – Nguy hiểm không tưởng!'
							/>
						</div>
					</div>
				</div>
				<div className='w-full md:w-2/5 ml-12'>
					<div className='w-full mb-14'>
						<a href='http://localhost:2002/news'>
							<TitleNews
								title='Dự án nổi bật'
								styles='uppercase !text-base'
							/>
						</a>
						<div className='flex flex-wrap items-start justify-between mt-6'>
							<NewsCardSingle
								src='http://mogi.vn/news/wp-content/uploads/2017/05/trang-trí-cầu-thang-218x150.jpg'
								styleTitle='!text-base font-bold'
								title='Lorem ipsum dolor sit amet consectetur, adipisicing elit. At neque temporibus corporisfugit aliquam voluptatum,'
								styles='mb-8 md:!w-[48%]'
								styleImg='!h-[11rem]'
							/>
							<NewsCardSingle
								src='http://mogi.vn/news/wp-content/uploads/2017/05/trang-trí-cầu-thang-218x150.jpg'
								styleTitle='!text-base font-bold'
								title='Lorem ipsum dolor sit amet consectetur, adipisicing elit. At neque temporibus corporisfugit aliquam voluptatum,'
								styles='mb-8 md:!w-[48%]'
								styleImg='!h-[11rem]'
							/>
							<NewsCardSingle
								src='http://mogi.vn/news/wp-content/uploads/2017/05/trang-trí-cầu-thang-218x150.jpg'
								styleTitle='!text-base font-bold'
								title='Lorem ipsum dolor sit amet consectetur, adipisicing elit. At neque temporibus corporisfugit aliquam voluptatum,'
								styles='mb-8 md:!w-[48%]'
								styleImg='!h-[11rem]'
							/>
							<NewsCardSingle
								src='http://mogi.vn/news/wp-content/uploads/2017/05/trang-trí-cầu-thang-218x150.jpg'
								styleTitle='!text-base font-bold'
								title='Lorem ipsum dolor sit amet consectetur, adipisicing elit. At neque temporibus corporisfugit aliquam voluptatum,'
								styles='mb-8 md:!w-[48%]'
								styleImg='!h-[11rem]'
							/>
						</div>
						<BtnNewsCard />
					</div>
					<div className='w-full mb-14'>
						<a href='http://localhost:2002/news'>
							<TitleNews
								title='luật nhà đất'
								styles='uppercase !text-base'
							/>
						</a>
						<div className='flex flex-col items-start justify-between mt-6'>
							<NewsCardSingle
								src='http://mogi.vn/news/wp-content/uploads/2017/05/trang-trí-cầu-thang-218x150.jpg'
								styleTitle='!text-base font-bold'
								styles='mb-8 !w-full'
								title='Lorem ipsum dolor sit amet consectetur, adipisicing elit. At neque temporibus corporisfugit aliquam voluptatum, aperiam fuga ipsum quis amet? Fugiat, mollitia facilis nam sednatus quibusdam. Odit, soluta architecto!'
								des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque at corrupti officia	repellat sit rem saepe laudantium cupiditate tempore architecto dolor est, vel quam sunteligendi veniam quo ratione iure.'
							/>
							<div className='flex flex-col items-start w-full ml-0'>
								<NewsCardVertical
									src='https://cdnnews.mogi.vn/news/wp-content/uploads/2018/04/cac-cong-trinh-kien-truc-co-dai-phuong-dong-485x360.jpg'
									title='Bày trí nội thất sai cách – Nguy hiểm không tưởng!Bày trí nội thất sai'
									styleImg='!w-[12rem] mb-8'
								/>
							</div>
						</div>
						<BtnNewsCard />
					</div>
				</div>
			</div>
		</>
	);
};

export default NewsHome;

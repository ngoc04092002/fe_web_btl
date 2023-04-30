import { DownOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import React, { useState } from 'react';

import Loading from '@/components/Loading/Loading';
import { NewsCardVertical } from '@/components/helpers/NewsCardTypes';
import TitleNews from '@/components/helpers/TitleNews/TItleNews';
import { FetchApiFilterNews } from '@/hooks/fetchApiNews';

type Props = {};
const pageLimit = 5;

const NewsRelated = (props: Props) => {
	const [morePage, setMorePage] = useState(0);
	const { res, isLoading } = FetchApiFilterNews(pageLimit, morePage, '', '');
	return (
		<div className='w-full md:w-2/5 md:ml-12 ml-0 flex flex-col items-center'>
			<div className='w-full mb-10'>
				<a href='http://localhost:2002/news'>
					<TitleNews
						title='tin liên quan'
						styles='uppercase !text-sm !font-medium !bg-[#000000]'
						underLineColor='#000000'
					/>
				</a>
				<div className='flex flex-col items-start justify-between mt-6'>
					{isLoading ? (
						<Loading />
					) : (
						<>
							{res &&
								!!res.length &&
								res.map((r) => (
									<NewsCardVertical
										styleTitle='!text-sm'
										styles='mb-8'
										styleDivImg='!w-[30%]'
										styleDivInfo='!w-[70%]'
										key={r.id}
										href={`/news/${r.id}`}
										src={r.img}
										dateTime={dayjs(r.createdAt).format('DD/MM/YYYY')}
										title={r.title}
									/>
								))}
						</>
					)}
				</div>
			</div>
			{res && res.length === 5 && (
				<div className='cursor-pointer px-3 transition-none py-2 flex items-baseline border border-solid border-[#ccc]  hover:bg-[#4db2ec] text-[#aaa] hover:text-white'>
					<button
						className='text-sm mr-2'
						onClick={() => setMorePage(morePage + 1)}
					>
						Xem thêm
					</button>
					<DownOutlined className='text-sm' />
				</div>
			)}
		</div>
	);
};

export default NewsRelated;

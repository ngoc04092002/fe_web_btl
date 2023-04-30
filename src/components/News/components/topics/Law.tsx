import React, { useState } from 'react';

import Loading from '@/components/Loading/Loading';
import { BtnNewsCard, NewsCardSingle, NewsCardVertical } from '@/components/helpers/NewsCardTypes';
import TitleNews from '@/components/helpers/TitleNews/TItleNews';
import { FetchApiFilterNews } from '@/hooks/fetchApiNews';

type Props = {};
const pageLimit = 3;
const topic = 'luat-nha-dat';

const Law = (props: Props) => {
	const [page, setPage] = useState(0);
	const { res, isLoading } = FetchApiFilterNews(pageLimit, page, topic, '');

	return (
		<div className='w-full mb-14'>
			<a href={`http://localhost:2002/news/${topic}`}>
				<TitleNews
					title='luật nhà đất'
					styles='uppercase !text-base'
				/>
			</a>
			<div className='flex flex-col items-start justify-between mt-6'>
				{!res || isLoading ? (
					<Loading />
				) : (
					<>
						{res && !!res.length && (
							<>
								{res?.[0] && (
									<NewsCardSingle
										styleTitle='!text-base font-bold'
										styles='mb-8 !w-full'
										href={`/news/${res[0].id}`}
										src={res[0].img}
										title={res[0].title}
										des={res[0].des}
									/>
								)}
								{res?.[1] && (
									<div className='flex flex-col items-start w-full ml-0'>
										<NewsCardVertical
											href={`/news/${res[1].id}`}
											src={res[1].img}
											title={res[1].title}
											styleImg='!w-[12rem] mb-8'
										/>
									</div>
								)}
							</>
						)}
					</>
				)}
			</div>
			<BtnNewsCard
				noMoreData={!res?.length}
				setPage={setPage}
				page={page}
			/>
		</div>
	);
};

export default Law;

import React, { FC, useState } from 'react';

import { FetchApiFilterNews } from '../../../../hooks/fetchApiNews';

import Loading from '@/components/Loading';
import { BtnNewsCard, NewsCardSingle, NewsCardVertical } from '@/components/helpers/NewsCardTypes';
import TitleNews from '@/components/helpers/TitleNews/TItleNews';

type Props = {};
const pageLimit = 5;
const topic = 'phong-thuy';

const FengShui: FC<Props> = () => {
	const [page, setPage] = useState(0);
	const { res, isLoading } = FetchApiFilterNews(pageLimit, page, topic);

	return (
		<div className='w-full mb-14'>
			<a href={`http://localhost:2002/${topic}`}>
				<TitleNews
					title='phong thủy'
					styles='uppercase !text-base'
				/>
			</a>
			<div className='flex md:flex-row flex-col items-start justify-between mt-6'>
				{!res || isLoading ? (
					<Loading />
				) : (
					<>
						{res && !!res.length && (
							<NewsCardSingle
								href={`/news/${res[0].id}`}
								styles='mb-8'
								src={res[0].img}
								title={res[0].title}
								des={res[0].des}
							/>
						)}
						<div className='flex flex-col items-start w-full md:w-3/5 ml-0 md:ml-4 lg:ml-8'>
							{res &&
								res.slice(1).map((r) => (
									<NewsCardVertical
										key={r.id}
										href={`/news/${r.id}`}
										src={r.img}
										title={r.title}
										styles='h-[100px] overflow-hidden'
										styleImg='md:!w-[26rem] !w-[8rem] mb-8'
										styleDivImg='!w-[40%]'
										styleDivInfo='!w-[60%]'
									/>
								))}
						</div>
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

export default FengShui;

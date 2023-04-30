import React, { FC, useState } from 'react';

import Loading from '@/components/Loading';
import { BtnNewsCard, NewsCardSingle } from '@/components/helpers/NewsCardTypes';
import TitleNews from '@/components/helpers/TitleNews/TItleNews';
import { FetchApiFilterNews } from '@/hooks/fetchApiNews';

type Props = {};
const pageLimit = 4;
const topic = 'kien-thuc-bds';
const type = 'kien-truc';

const Architecture: FC<Props> = () => {
	const [page, setPage] = useState(0);
	const { res, isLoading } = FetchApiFilterNews(pageLimit, page, topic, type);
	return (
		<div className='w-full mb-14'>
			<a href={`http://localhost:2002/${topic}/${type}`}>
				<TitleNews
					title='Kiến trúc - nhà đẹp'
					styles='uppercase !text-base'
				/>
			</a>
			<div className='flex flex-wrap items-start justify-between mt-6'>
				{!res || isLoading ? (
					<Loading />
				) : (
					<>
						{res &&
							res.map((r) => (
								<NewsCardSingle
									href={`/news/${r.id}`}
									key={r.id}
									src={r.img}
									title={r.title}
									styles='mb-8 md:!w-[48%]'
									styleImg='!h-[11rem]'
								/>
							))}
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

export default Architecture;

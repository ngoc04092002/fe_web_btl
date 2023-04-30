import React, { useState } from 'react';

import Loading from '@/components/Loading/Loading';
import { BtnNewsCard, NewsCardSingle } from '@/components/helpers/NewsCardTypes';
import TitleNews from '@/components/helpers/TitleNews/TItleNews';
import { FetchApiFilterNews } from '@/hooks/fetchApiNews';

type Props = {};
const pageLimit = 4;

const Project = (props: Props) => {
	const [page, setPage] = useState(0);
	const { res, isLoading } = FetchApiFilterNews(pageLimit, page, '', '');
	return (
		<div className='w-full mb-14'>
			<a href='http://localhost:2002/news'>
				<TitleNews
					title='Dự án nổi bật'
					styles='uppercase !text-base'
				/>
			</a>
			<div className='flex flex-wrap items-start justify-between mt-6'>
				{!res || isLoading ? (
					<Loading />
				) : (
					<>
						{res &&
							!!res.length &&
							res.map((r) => (
								<NewsCardSingle
									href={`/news/${r.id}`}
									key={r.id}
									src={r.img}
									title={r.title}
									styleTitle='!text-base font-bold'
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

export default Project;

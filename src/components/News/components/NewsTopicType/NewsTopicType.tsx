import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import NewsHomeHot from '../NewsHomeHot';

import Loading from '@/components/Loading';
import { NewsCardSingle } from '@/components/helpers/NewsCardTypes';
import NewsPagination from '@/components/helpers/Pagination';
import TitleNews from '@/components/helpers/TitleNews';
import { desTopicNewsData } from '@/constants/NewsConst';
import { FetchApiFilterNews } from '@/hooks/fetchApiNews';

type Props = {};
const pageSize = 9;

const NewsTopicType = (props: Props) => {
	const { topic, category } = useParams();
	const [currentPage, setCurrentPage] = useState(1);
	const { res, isLoading } = FetchApiFilterNews(0, currentPage - 1, topic, category);
	if (isLoading) {
		return <Loading />;
	}
	const totalCount = res?.length || 0;
	const indexNext = pageSize * (currentPage - 1);
	const currentData = pageSize * currentPage > totalCount ? totalCount : pageSize * currentPage;
	return (
		<>
			<p className='text-[#777] text-xl mt-4 font-sans italic'>
				{(category && desTopicNewsData[category]) || (topic && desTopicNewsData[topic])}
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-1 mt-6 h-[80vh]'>
				{res && !!res.length && (
					<NewsHomeHot
						styles='news-category'
						href={`/news/${res[indexNext].id}`}
						src={res[indexNext].img}
						title={res[indexNext].title}
						dateTime={dayjs(res[indexNext].createdAt).format('DD/MM/YYYY')}
					/>
				)}

				<div className='grid grid-cols-2 gap-1'>
					{res &&
						!!res.length &&
						res.slice(indexNext + 1, indexNext + 5).map((r) => (
							<NewsHomeHot
								key={r.id}
								styles='news-category'
								href={`/news/${r.id}`}
								src={r.img}
								title={r.title}
								dateTime={dayjs(r.createdAt).format('DD/MM/YYYY')}
								styleTitle='text-sm'
							/>
						))}
				</div>
			</div>
			<div className='mt-16'>
				<TitleNews title='không thể bỏ lỡ' />
				<div className='grid grid-cols-2 gap-8'>
					{res &&
						!!res.length &&
						res.slice(indexNext + 5, indexNext + 9).map((r) => (
							<NewsCardSingle
								href={`/news/${r.id}`}
								key={r.id}
								styles='!w-full'
								src={r.img}
								title={r.title}
							/>
						))}
				</div>
			</div>
			<div className='my-12 flex items-center justify-between w-full'>
				<NewsPagination
					className='pagination-bar'
					currentPage={currentPage}
					totalCount={totalCount}
					pageSize={pageSize}
					onPageChange={(page: number) => setCurrentPage(page)}
				/>
				<p className='text-sm'>
					Trang <span className='color-main'>{currentData}</span>/<span>{totalCount}</span>
				</p>
			</div>
		</>
	);
};

export default NewsTopicType;

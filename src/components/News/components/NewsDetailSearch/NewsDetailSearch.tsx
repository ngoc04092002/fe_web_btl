import dayjs from 'dayjs';
import React, { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Loading from '@/components/Loading';
import { NewsCardVertical } from '@/components/helpers/NewsCardTypes';
import NotFoundItem from '@/components/helpers/NotFoundItem';
import NewsPagination from '@/components/helpers/Pagination/Pagination';
import { FetchApiSearchNews } from '@/hooks/fetchApiNews';

type Props = {};
const pageSize = 10;

const NewsDetailSearch: FC<Props> = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchParams, setSearchParams] = useSearchParams();
	const [value, setValue] = useState('');
	const { res, isLoading } = FetchApiSearchNews(0, currentPage - 1, value.trim());

	const handleSeachNews = (e: React.ChangeEvent<HTMLInputElement>) => {
		searchParams.set('s', e.target.value);
		setSearchParams(searchParams);
	};
	useEffect(() => {
		setValue(searchParams.get('s') || '');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const totalCount = res?.length || 0;
	const indexNext = pageSize * (currentPage - 1);
	const currentData = pageSize * currentPage > totalCount ? totalCount : pageSize * currentPage;
	return (
		<div className='w-full md:w-3/5'>
			<div>
				<form
					action='http://localhost:2002/news/search'
					method='get'
					className='flex items-center'
				>
					<input
						name='s'
						value={searchParams.get('s') || ''}
						className='flex-1 input-none !border !border-solid h-10 p-2 !border-[#ccc] bg-transparent'
						onChange={handleSeachNews}
					/>
					<button className='bg-[#222222] h-10 font-medium text-[13px] text-white p-2'>
						Tìm kiếm
					</button>
				</form>
				<p className='mt-3 text-sm'>Nếu bạn không hài lòng về kết quả này, bạn có thể tìm kiếm.</p>
				<div className='mt-12'>
					{isLoading ? (
						<Loading />
					) : (
						<>
							{res && !!res.length ? (
								<>
									{res.slice(indexNext, indexNext + 10).map((r) => (
										<NewsCardVertical
											key={r.id}
											styles='mb-4'
											src={r.img}
											href={`/news/${r.id}`}
											title={r.title}
											des={r.des}
											styleTitle='!text-xl'
											styleImg='!h-[11rem]'
											styleDivImg='!w-[30%]'
											styleDivInfo='!w-[70%]'
											dateTime={dayjs(r.createdAt).format('DD/MM/YYYY')}
										/>
									))}
								</>
							) : (
								<NotFoundItem />
							)}
						</>
					)}
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
		</div>
	);
};

export default NewsDetailSearch;

import { RightOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import React, { FC, useState } from 'react';
import { useDebounce } from 'use-debounce';

import Loading from '@/components/Loading/Loading';
import NotFoundItem from '@/components/helpers/NotFoundItem';
import { FetchApiSearchNews } from '@/hooks/fetchApiNews';

type Props = {
	showSearch: boolean;
};

const NewsSearch: FC<Props> = ({ showSearch }) => {
	const [search, setSearch] = useState<string>('');
	const [value] = useDebounce(search, 2500);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};
	const { res, isLoading } = FetchApiSearchNews(6, 0, value.trim());

	return (
		<div
			className={`lg:block hidden absolute bg-white pt-4 pb-0 w-[600px] ${
				showSearch ? 'top-[48px] opacity-100 visible' : 'invisible top-[70px] opacity-0'
			} -right-[14px]  shadow-sm-cs-0360`}
		>
			<form
				action='http://localhost:2002/news/search'
				method='get'
				className='border-b border-solid border-0 border-[#ccc] mb-5 mx-6'
			>
				<div className='flex items-center'>
					<input
						type='text'
						name='s'
						className='flex-1 input-none'
						onChange={handleSearch}
						value={search}
					/>
					<button className='flex items-center text-xs'>
						<span className='uppercase mr-2 hover:color-main'>tìm kiếm</span>
						<RightOutlined />
					</button>
				</div>
			</form>
			{isLoading ? (
				<Loading />
			) : (
				<>
					{res && !!res.length ? (
						<div className='w-full flex items-center flex-col'>
							<ul className='grid grid-cols-2 gap-3 mx-6'>
								{res.map((l, i) => (
									<li key={i}>
										<a
											href={`/news/${l.id}`}
											className='flex items-center'
										>
											<div className='mr-3 w-[30%]'>
												<img
													src={l.img}
													alt=''
													className='w-full h-[5rem] object-cover object-center'
												/>
											</div>
											<div className='w-[70%]'>
												<h3 className='vertical-2 text-[#111111] text-[14px] font-semibold hover:color-main'>
													{l.des}
												</h3>
												<p className='text-[#767676] text-[12px]'>
													{dayjs(l.createdAt).format('DD/MM/YYYY')}
												</p>
											</div>
										</a>
									</li>
								))}
							</ul>
							<a
								href='http://localhost:2002/news/search?s='
								className='text-sm p-3 text-center hover:color-main border-solid border-0 border-t border-[#ccc] w-full mt-4'
							>
								Xem tất cả các kết quả
							</a>
						</div>
					) : (
						<NotFoundItem styles='text-center' />
					)}
				</>
			)}
		</div>
	);
};

export default NewsSearch;

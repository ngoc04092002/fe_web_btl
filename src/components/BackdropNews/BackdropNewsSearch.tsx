import { CloseOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import React, { FC, useState } from 'react';
import { useDebounce } from 'use-debounce';

import Loading from '../Loading';
import NotFoundItem from '../helpers/NotFoundItem';

import styles from './backdrop-news.module.scss';

import { FetchApiSearchNews } from '@/hooks/fetchApiNews';

const cx = classNames.bind(styles);
type Props = {
	hanleShowSearch: React.MouseEventHandler<HTMLElement>;
};

const BackdropNewsSearch: FC<Props> = ({ hanleShowSearch }) => {
	const [search, setSearch] = useState<string>('');
	const [value] = useDebounce(search, 2500);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};
	const { res, isLoading } = FetchApiSearchNews(6, 0, value.trim());
	return (
		<div className='flex flex-col items-center w-full'>
			<div
				onClick={hanleShowSearch}
				className='self-end text-white text-4xl cursor-pointer p-3'
			>
				<CloseOutlined />
			</div>
			<p className='text-white uppercase'>Tìm kiếm</p>
			<div className={`${cx('backdrop-search-news')} w-full border-b mb-8`}>
				<input
					type='text'
					className='w-full text-white text-[26px] font-bold bg-transparent input-none h-[40px] text-center'
					onChange={handleSearch}
					value={search}
				/>
			</div>
			<div className='w-full flex items-center flex-col'>
				{isLoading ? (
					<Loading />
				) : (
					<>
						{res && !!res.length ? (
							<div className='w-full flex items-center flex-col'>
								<ul className='flex items-center flex-col'>
									{res.map((l, i) => (
										<li
											key={i}
											className='mb-8'
										>
											<a
												href={`/news/${l.id}`}
												className='flex items-center'
											>
												<div className='mr-3 w-[35%]'>
													<img
														src={l.img}
														alt=''
														className='w-[38rem] h-[7rem] object-cover object-center'
													/>
												</div>
												<div className='w-[65%]'>
													<h3 className='vertical-2 text-white text-[16px] font-semibold'>
														{l.des}
													</h3>
													<p className='text-[#ddd] text-[12px]'>
														{dayjs(l.createdAt).format('DD/MM/YYYY')}
													</p>
												</div>
											</a>
										</li>
									))}
								</ul>
								<a
									href='http://localhost:2002/news/search?s='
									className='bg-white opacity-80 uppercase text-lg text-center w-full leading-[50px] mt-6'
									style={{ boxShadow: '0 0 8px rgba(0, 0, 0, 0.36)' }}
								>
									Xem tất cả các kết quả
								</a>
							</div>
						) : (
							<NotFoundItem styles='text-center text-white' />
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default BackdropNewsSearch;

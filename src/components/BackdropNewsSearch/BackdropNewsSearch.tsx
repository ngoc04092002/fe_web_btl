import { CloseOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './backdrop-news-search.module.scss';

import { IListSearchData } from '@/types/components/News/types';

const cx = classNames.bind(styles);
type Props = {
	hanleShowSearch: React.MouseEventHandler<HTMLElement>;
	showSearch: boolean;
};

const BackdropNewsSearch: FC<Props> = ({ hanleShowSearch, showSearch }) => {
	const listSearchData: IListSearchData[] = Array(6).fill({
		to: '',
		img: 'https://cdnnews.mogi.vn/news/wp-content/uploads/2022/11/30100256/ong-lam-to-trong-nha-tot-hay-xau-324x400.jpg',
		des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio omnis mollitia officia natus sunt assumenda veniam debitis minus hic ipsam ab illo, recusandae voluptatibus earum repellendus impedit aperiam alias id.',
		createdAt: dayjs().format('DD/MM/YYYY'),
	});
	return (
		<div
			className={`fixed scroll-none py-4 px-8 flex-col items-center bg-backdrop-md will-change-contents inset-0 z-[9999] duration-300 ${
				showSearch ? 'flex' : 'hidden'
			}`}
		>
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
				/>
			</div>
			<div className='w-full flex items-center flex-col'>
				<ul className='flex items-center flex-col'>
					{!!listSearchData.length &&
						listSearchData.map((l, i) => (
							<li
								key={i}
								className='mb-8'
							>
								<Link
									to={l.to}
									className='flex items-center'
								>
									<div className='mr-3'>
										<img
											src={l.img}
											alt=''
											className='w-[38rem] h-[7rem] object-cover object-center'
										/>
									</div>
									<div>
										<h3 className='vertical-2 text-white text-[16px] font-semibold'>{l.des}</h3>
										<p className='text-[#ddd] text-[12px]'>{l.createdAt}</p>
									</div>
								</Link>
							</li>
						))}
				</ul>
				<Link
					to=''
					className='bg-white opacity-80 uppercase text-lg text-center w-full leading-[50px] mt-6'
					style={{ boxShadow: '0 0 8px rgba(0, 0, 0, 0.36)' }}
				>
					Xem tất cả các kết quả
				</Link>
			</div>
		</div>
	);
};

export default BackdropNewsSearch;

import { CaretDownOutlined, MenuOutlined, RightOutlined, SearchOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './header-news.module.scss';

import { topicNewsData } from '@/constants/NewsConst';
import { IListSearchData } from '@/types/components/News/types';
import { getImage } from '@/utils/CustomImagePath';
const cx = classNames.bind(styles);

type Props = {
	hanleShowSearch: React.MouseEventHandler<HTMLElement>;
	hanleShowMenu: React.MouseEventHandler<HTMLElement>;
};
const isLg = window.innerWidth >= 1024;

const HeaderNews: FC<Props> = ({ hanleShowSearch, hanleShowMenu }) => {
	const [selectTopic, setSelectTopic] = useState('');
	const [showSearch, setShowSearch] = useState(false);

	const handleSearchNews = () => {
		setShowSearch(!showSearch);
	};

	useEffect(() => {
		if (!showSearch) {
			return;
		}
		function handleScroll() {
			if (window.scrollY > 200) {
				setShowSearch(false);
			}
		}
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [showSearch]);

	const listSearchData: IListSearchData[] = Array(6).fill({
		to: '',
		img: 'https://cdnnews.mogi.vn/news/wp-content/uploads/2022/11/30100256/ong-lam-to-trong-nha-tot-hay-xau-324x400.jpg',
		des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio omnis mollitia officia natus sunt assumenda veniam debitis minus hic ipsam ab illo, recusandae voluptatibus earum repellendus impedit aperiam alias id.',
		createdAt: dayjs().format('DD/MM/YYYY'),
	});

	return (
		<div className='px-8 pt-2 flex flex-col relative'>
			<div className='mb-4 lg:w-fit flex items-center justify-between w-full'>
				<div
					className='text-[2rem] color-main cursor-pointer lg:hidden inline-block'
					onClick={hanleShowMenu}
				>
					<MenuOutlined />
				</div>
				<a href='/'>
					<img
						src={getImage('branch.png')}
						alt='branch'
						className='h-32 w-48 object-fill object-center'
					/>
				</a>

				<div
					className='text-[2rem] color-main cursor-pointer lg:hidden inline-block'
					onClick={hanleShowSearch}
				>
					<SearchOutlined />
				</div>
			</div>

			{isLg && (
				<div className='relative w-fit lg:block hidden'>
					<ul className='flex items-center'>
						{topicNewsData.map((t) => (
							<li
								className={`${cx('topic')} w-fit h-12 px-4 relative`}
								key={t.topic}
							>
								<Link
									to={t.to}
									className={`${cx('head-topic', {
										active: selectTopic === t.topic,
									})} flex items-center h-full leading-[48px] align-middle relative`}
									onClick={() => setSelectTopic(t.topic)}
								>
									<span className='mr-2 font-bold text-base uppercase font-[system-ui]'>
										{t.topic}
									</span>{' '}
									{!!t.child.length && <CaretDownOutlined />}
								</Link>
								<ul className='absolute top-12 bg-white w-fit shadow-cs-sm-0 text-sm'>
									{!!t.child.length &&
										t.child.map((tc, index) => (
											<li
												key={index}
												className='hover:color-main cursor-pointer py-2 px-6'
											>
												<Link
													to='/'
													className='whitespace-nowrap'
												>
													{tc.title}
												</Link>
											</li>
										))}
								</ul>
							</li>
						))}
						<li
							className='text-[22px] cursor-pointer px-4'
							onClick={handleSearchNews}
						>
							<SearchOutlined />
						</li>
					</ul>
					<div
						className={`lg:block hidden absolute bg-white pt-4 pb-0 w-[600px] ${
							showSearch ? 'top-[48px] opacity-100' : 'top-[70px] opacity-0'
						} -right-[14px]  shadow-sm-cs-0360`}
					>
						<form
							action=''
							className='border-b border-solid border-0 border-[#ccc] mb-5 mx-6'
						>
							<div className='flex items-center'>
								<input
									type='text'
									className='flex-1 input-none'
								/>
								<button className='flex items-center text-xs'>
									<span className='uppercase mr-2 hover:color-main'>tìm kiếm</span>
									<RightOutlined />
								</button>
							</div>
						</form>
						<div className='w-full flex items-center flex-col'>
							<ul className='grid grid-cols-2 gap-3 mx-6'>
								{!!listSearchData.length &&
									listSearchData.map((l, i) => (
										<li key={i}>
											<Link
												to={l.to}
												className='flex items-center'
											>
												<div className='mr-3'>
													<img
														src={l.img}
														alt=''
														className='w-[38rem] h-[5rem] object-cover object-center'
													/>
												</div>
												<div>
													<h3 className='vertical-2 text-[#111111] text-[14px] font-semibold hover:color-main'>
														{l.des}
													</h3>
													<p className='text-[#767676] text-[12px]'>{l.createdAt}</p>
												</div>
											</Link>
										</li>
									))}
							</ul>
							<Link
								to=''
								className='text-sm p-3 text-center hover:color-main border-solid border-0 border-t border-[#ccc] w-full mt-4'
							>
								Xem tất cả các kết quả
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default HeaderNews;

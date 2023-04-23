import { CaretDownOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import NewsSearch from '../components/NewsSearch';

import styles from './header-news.module.scss';

import { topicNewsData } from '@/constants/NewsConst';
import { getImage } from '@/utils/CustomImagePath';
const cx = classNames.bind(styles);

type Props = {
	hanleShowSearch: React.MouseEventHandler<HTMLElement>;
	hanleShowMenu: React.MouseEventHandler<HTMLElement>;
	showSearch: boolean;
	setShowSearch: (value: boolean) => void;
};
const isLg = window.innerWidth >= 1024;

const HeaderNews: FC<Props> = ({ setShowSearch, showSearch, hanleShowSearch, hanleShowMenu }) => {
	const { topic } = useParams();

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [showSearch]);

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
									to={`/news/${t.to}`}
									className={`${cx('head-topic', {
										active: topic === t.to,
									})} flex items-center h-full leading-[48px] align-middle relative`}
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
													to={`/news/${t.to}/${tc.to}`}
													className='whitespace-nowrap'
												>
													{tc.type}
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
					<NewsSearch showSearch={showSearch} />
				</div>
			)}
		</div>
	);
};

export default HeaderNews;

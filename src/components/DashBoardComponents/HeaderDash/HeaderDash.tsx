import { BellOutlined, SwitcherOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import HeaderReport from './HeaderReport';
import styles from './header-dash.module.scss';

import { HomeIcon } from '@/assets/icons';
import Loading from '@/components/Loading';
import Bar from '@/components/helpers/Bar';
import { AuthContext } from '@/context/AuthProvider';
import { IBar } from '@/types/pages/IDashBoard';
import { IUser } from '@/types/pages/types';
import { getImage } from '@/utils/CustomImagePath';

const cx = classNames.bind(styles);

const HeaderDash: FC<IBar> = ({ classSvg, className, handleToggleShowSidebar }) => {
	const { user } = useContext(AuthContext);
	const location = useLocation();
	const pathname: string = location.pathname;
	const splitPathname: string[] = pathname.split('/');
	const slicePathName: string[] = pathname.split('/').slice(2, splitPathname.length - 1);
	if (!Object.keys(user).length) {
		return <Loading />;
	}
	return (
		<div>
			<div className={`${cx('header_dash')} flex items-center justify-between md:justify-end mb-8`}>
				<ul className='flex items-center'>
					<li className='lg:hidden inline-block'>
						<Bar
							classSvg={classSvg}
							handleToggleShowSidebar={handleToggleShowSidebar}
							className={className}
						/>
					</li>
					<li className={`${cx('bell-icon')} relative`}>
						<BellOutlined />
						<div
							className={`absolute z-10 top-[40px] md:right-0 rounded-lg ${cx('popup')} bg-white`}
						>
							<h6 className='text-md text-[#8898aa] p-4'>
								Bạn có <strong className='text-[#11cdef]'>13</strong> thông báo.
							</h6>
							<div className={cx('popup-wrapper')}>
								<Link
									to='/dash-board'
									className='flex items-center p-4 hover:bg-[#cccccc3b]'
								>
									<div className='px-2'>
										<img
											src={getImage('user.png')}
											alt='user'
											className='object-cover rounded-full object-center w-11 h-11 select-none'
										/>
									</div>
									<div className='flex flex-col w-full justify-between'>
										<ul className='flex items-center justify-between'>
											<li className='font-semibold text-md'>Xem ngay</li>
											<li className='text-[#8898aa] font-normal text-sm'>24 giờ trước</li>
										</ul>
										<p className='font-light text-[#525f7f]'>
											Bạn Vương vừa bình luận bài đăng của bạn
										</p>
									</div>
								</Link>
								<Link
									to='/dash-board'
									className='flex items-center p-4 hover:bg-[#cccccc3b]'
								>
									<div className='px-2'>
										<img
											src={getImage('user.png')}
											alt='user'
											className='object-contain object-center w-11 h-11 select-none'
										/>
									</div>
									<div className='flex flex-col w-full justify-between'>
										<ul className='flex items-center justify-between'>
											<li className='font-semibold text-md'>Xem ngay</li>
											<li className='text-[#8898aa] font-normal text-sm'>24 giờ trước</li>
										</ul>
										<p className='font-light text-[#525f7f]'>
											Bạn Vương vừa bình luận bài đăng của bạn
										</p>
									</div>
								</Link>
							</div>
						</div>
					</li>
					<li>
						<SwitcherOutlined />
					</li>
				</ul>
				<div className='flex items-center ml-4'>
					<p className='mr-2'>
						<img
							src={(user as IUser).avatar || getImage('user.png')}
							alt='user'
							className='object-cover rounded-full object-center w-9 h-9 select-none'
						/>
					</p>
					<p className='text-ellipsis whitespace-nowrap overflow-hidden max-w-[100px]'>
						{(user as IUser).username}
					</p>
				</div>
			</div>
			<div className='flex items-center justify-between mb-8'>
				<div className='flex items-center cursor-default'>
					<p className='text-white text-[1.6rem] mr-8 font-medium capitalize'>
						{splitPathname.at(-1) || 'Default'}
					</p>
					<ul className='sm:flex hidden'>
						<li className='flex'>
							<HomeIcon className='w-5 h-5 fill-white' />
						</li>
						<li className='text-[#f6f9fc] text-md font-semibold'>
							<span className='mx-2'>-</span>Dashboards
							<span className='mx-2'>{splitPathname.at(-1) ? '-' : ''}</span>
						</li>
						{slicePathName.map((l, index) => (
							<li
								key={index}
								className='text-[#f6f9fc] text-md font-semibold capitalize'
							>
								{l}
								<span className='mx-2'>-</span>
							</li>
						))}
						<li className='text-[#dee2e6] text-md font-semibold'>{splitPathname.at(-1)}</li>
					</ul>
				</div>
				<div className={cx('btn-filter')}>Filters</div>
			</div>
			<HeaderReport userId={(user as IUser).id as number} />
		</div>
	);
};

export default HeaderDash;

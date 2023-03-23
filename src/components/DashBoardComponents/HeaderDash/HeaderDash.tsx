import { ArrowUpOutlined, BellOutlined, SwitcherOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './header-dash.module.scss';

import { ChartRevenueIcon, HomeIcon, HomeRentIcon, MapIcon } from '@/components/assests/icons';
import Bar from '@/components/helpers/Bar';
import { AuthContext } from '@/context/AuthProvider';
import { IBar, IDataStat } from '@/types/pages/IDashBoard';
import { IUser } from '@/types/pages/types';
import { getImage } from '@/utils/CustomImagePath';

const cx = classNames.bind(styles);

const HeaderDash: FC<IBar> = ({ classSvg, className, handleToggleShowSidebar }) => {
	const { user } = useContext(AuthContext);
	const location = useLocation();
	const pathname: string = location.pathname;
	const splitPathname: string[] = pathname.split('/');
	const slicePathName: string[] = pathname.split('/').slice(2, splitPathname.length - 1);

	const dataStats: IDataStat[] = [
		{
			title: 'Tỉnh (Thành phố)',
			sales: '3',
			icon: <MapIcon />,
			developSpeed: '100',
			color: 'bg-[linear-gradient(87deg,#f5365c,#f56036)!important]',
			timestamp: 'Kể từ tháng trước',
		},
		{
			title: 'Đã cho thuê',
			sales: '100,000',
			icon: <HomeRentIcon />,
			developSpeed: '100',
			color: 'bg-[linear-gradient(87deg,#fb6340,#fbb140)!important]',
			timestamp: 'Kể từ tháng trước',
		},
		{
			title: 'Còn trống',
			sales: '100,000',
			icon: <HomeIcon className='fill-white' />,
			developSpeed: '100',
			color: 'bg-[linear-gradient(87deg,#2dce89,#2dcecc)!important]',
			timestamp: 'Kể từ tháng trước',
		},
		{
			title: 'Tổng giá tiền',
			sales: '100,000',
			icon: <ChartRevenueIcon />,
			developSpeed: '100',
			color: 'bg-[linear-gradient(87deg,#5e72e4,#825ee4)!important]',
			timestamp: 'Kể từ tháng trước',
		},
	];

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
					<li>
						<BellOutlined />
					</li>
					<li>
						<SwitcherOutlined />
					</li>
				</ul>
				<div className='flex items-center ml-4'>
					<p className='mr-2'>
						<img
							src={getImage('user.png')}
							alt='user'
							className='object-contain object-center w-9 h-9 select-none'
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
						{slicePathName.map((l) => (
							<li className='text-[#f6f9fc] text-md font-semibold capitalize'>
								Dashboards<span className='mx-2'>-</span>
							</li>
						))}
						<li className='text-[#dee2e6] text-md font-semibold'>{splitPathname.at(-1)}</li>
					</ul>
				</div>
				<div className={cx('btn-filter')}>Filters</div>
			</div>
			<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
				{dataStats.map((s, index) => (
					<div
						key={index}
						className={`${cx('card-stats')} flex flex-col py-4 px-5 justify-between`}
					>
						<div className='flex items-center justify-between mb-6'>
							<div>
								<h1 className='uppercase text-sm text-[#8898aa] font-semibold font-[inherit]'>
									{s.title}
								</h1>
								<p className='text-[#32325d] font-semibold text-xl'>{s.sales}</p>
							</div>
							<div className={`${s.color} rounded-[50%] p-3`}>{s.icon}</div>
						</div>
						<ul className='flex items-center justify-between'>
							<li className='text-[#2dce89] flex items-center mr-2'>
								<ArrowUpOutlined /> {s.developSpeed}%
							</li>
							<li className='text-[#525f7f] overflow-hidden whitespace-nowrap text-ellipsis'>
								{s.timestamp}
							</li>
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default HeaderDash;

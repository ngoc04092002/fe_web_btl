import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './header-dash.module.scss';

import { ChartRevenueIcon, HomeIcon, HomeRentIcon } from '@/assets/icons';
import SkeletonTypography from '@/components/helpers/SkeletonTypography';
import { FetchApiGetPostRoomReportId } from '@/hooks/fetchApiPostRoom';
import { IDataStat } from '@/types/pages/IDashBoard';

type Props = {
	userId: number;
};
const cx = classNames.bind(styles);

const HeaderReport: FC<Props> = ({ userId }) => {
	const location = useLocation();
	const pathname: string = location.pathname;
	const splitPathname: string[] = pathname.split('/');

	const { res, isLoading } = FetchApiGetPostRoomReportId(userId);

	const dataStats: IDataStat[] = [
		{
			title: splitPathname.includes('admin') ? 'Phản hồi' : 'Số phòng hiện có',
			sales: res ? res.totalRoom.sales : 0,
			icon: <HomeIcon className='fill-white' />,
			developSpeed: res ? res.totalRoom.developSpeed : '0',
			color: 'bg-[linear-gradient(87deg,#2dce89,#2dcecc)!important]',
			timestamp: 'Kể từ tháng trước',
			increment: !!res?.totalRoom?.increment,
		},
		{
			title: 'Đã cho thuê',
			sales: res ? res.rented.sales : 0,
			icon: <HomeRentIcon />,
			developSpeed: res ? res.rented.developSpeed : '0',
			color: 'bg-[linear-gradient(87deg,#fb6340,#fbb140)!important]',
			timestamp: 'Kể từ tháng trước',
			increment: !!res?.rented?.increment,
		},
		{
			title: 'Doanh thu',
			sales: res ? res.sales.sales : 0,
			icon: <ChartRevenueIcon />,
			developSpeed: res ? res.sales.developSpeed : '0',
			color: 'bg-[linear-gradient(87deg,#5e72e4,#825ee4)!important]',
			timestamp: 'Kể từ tháng trước',
			increment: !!res?.sales?.increment,
		},
	];

	return (
		<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
			{dataStats.map((s, index) => (
				<div
					key={index}
					className={`${cx('card-stats')} flex flex-col py-4 px-5 justify-between`}
				>
					{!Object.keys.length || isLoading ? (
						<SkeletonTypography loading />
					) : (
						<>
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
								<li
									className={`${
										s.increment ? 'text-[#2dce89]' : 'text-red-500'
									}  flex items-center mr-2`}
								>
									{s.increment ? <ArrowUpOutlined /> : <ArrowDownOutlined />} {s.developSpeed}
								</li>
								<li className='text-[#525f7f] overflow-hidden whitespace-nowrap text-ellipsis'>
									{s.timestamp}
								</li>
							</ul>
						</>
					)}
				</div>
			))}
		</div>
	);
};

export default HeaderReport;

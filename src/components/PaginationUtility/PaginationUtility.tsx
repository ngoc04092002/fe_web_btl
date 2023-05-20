import { AreaChartOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Graduate, List, Worker } from '../../assets/icons';
import NewsContainer from '../introNews/NewsContainer';

type Props = {};

const PaginationUtility: FC<Props> = () => {
	const dataUtiliity = [
		{
			path: '/',
			Icon: <AreaChartOutlined className='color-main ' />,
			text: 'Review khu vực',
		},
		{
			path: '/search-room?price=price=<2%20triệu',
			Icon: <Graduate />,
			text: 'Phòng trọ sinh viên',
		},
		{
			path: '/search-room?price=2%20triệu%20-%206%20triệu',
			Icon: <Worker />,
			text: 'Phòng trọ công nhân',
		},
		{
			path: '/inductions/rent-room',
			Icon: <List color='#7e00c2' />,
			text: 'Các bước thuê trọ',
		},
		{
			path: '/inductions/account',
			Icon: <List color='#00abc2' />,
			text: 'Hướng dẫn đăng ký tài khoản',
		},
	];
	return (
		<NewsContainer title='Tiện tích từ chúng tôi'>
			<div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3'>
				{dataUtiliity &&
					!!dataUtiliity.length &&
					dataUtiliity.map(({ path, Icon, text }, index) => (
						<Link
							key={index}
							to={path}
							className='shadow-006 rounded-lg h-[6rem] p-3 flex flex-col justify-between items-baseline'
						>
							{Icon} <p className='font-semibold'>{text}</p>
						</Link>
					))}
			</div>
		</NewsContainer>
	);
};

export default PaginationUtility;

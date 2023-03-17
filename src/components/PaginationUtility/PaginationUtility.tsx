import { AreaChartOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Graduate, List, Worker } from '../assests/icons';
import NewsContainer from '../introNews/NewsContainer';

type Props = {};

const PaginationUtility: FC<Props> = () => {
	return (
		<NewsContainer title='Tiện tích từ chúng tôi'>
			<div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3'>
				<Link
					to='/'
					className='shadow-006 rounded-lg h-[6rem] p-3 flex flex-col justify-between items-baseline'
				>
					<AreaChartOutlined className='color-main ' />{' '}
					<p className='font-semibold'>Review khu vực</p>
				</Link>
				<Link
					to='/'
					className='shadow-006 rounded-lg h-[6rem] p-3 flex flex-col justify-between items-baseline'
				>
					<Graduate /> <p className='font-semibold'>Phòng trọ gần trường</p>
				</Link>
				<Link
					to='/'
					className='shadow-006 rounded-lg h-[6rem] p-3 flex flex-col justify-between items-baseline'
				>
					<Worker /> <p className='font-semibold'>Phòng trọ công nhân</p>
				</Link>
				<Link
					to='/'
					className='shadow-006 rounded-lg h-[6rem] p-3 flex flex-col justify-between items-baseline'
				>
					<List color='#7e00c2' /> <p className='font-semibold'>Các bước thuê trọ</p>
				</Link>
				<Link
					to='/'
					className='shadow-006 rounded-lg h-[6rem] p-3 flex flex-col justify-between items-baseline'
				>
					<List color='#00abc2' /> <p className='font-semibold'>Hướng dẫn đăng ký tài khoản</p>
				</Link>
			</div>
		</NewsContainer>
	);
};

export default PaginationUtility;

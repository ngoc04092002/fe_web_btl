import { BellOutlined, SwitcherOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC } from 'react';

import styles from './header-dash.module.scss';

import Bar from '@/components/helpers/Bar';
import { IBar } from '@/types/pages/IDashBoard';
import { getImage } from '@/utils/CustomImagePath';

const cx = classNames.bind(styles);

const HeaderDash: FC<IBar> = ({ classSvg, className, handleToggleShowSidebar }) => {
	return (
		<div className={`${cx('header_dash')} flex items-center justify-between md:justify-end`}>
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
					ladjkslkasjdlkasjldkjlaksd
				</p>
			</div>
		</div>
	);
};

export default HeaderDash;

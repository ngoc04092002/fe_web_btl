import { ContactsOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import ListSidebarDash from './ListSidebarDash';
import styles from './sidebar-dash.module.scss';

import Bar from '@/components/helpers/Bar';
import { IBar, ISidebarIconProps, ISidebarRest } from '@/types/pages/IDashBoard';
import { getImage } from '@/utils/CustomImagePath';

const cx = classNames.bind(styles);

const SidebarDash: FC<IBar> = ({ showSidebar, handleToggleShowSidebar }) => {
	const siderbarData: ISidebarRest[] = [
		{
			path: '/dash-board/',
			title: 'Bảng điều khiển',
			Icon: (props: ISidebarIconProps) => (
				<HomeOutlined
					title={props.title}
					style={{ color: props.color }}
				/>
			),
			child: [],
			color: '#c310c3',
		},
		{
			path: '/dash-board/profile',
			title: 'Thông tin tài khoản',
			Icon: (props: ISidebarIconProps) => (
				<UserOutlined
					title={props.title}
					style={{ color: props.color }}
				/>
			),
			child: ['Chỉnh sửa thông tin', 'Đổi mật khẩu'],
			color: '#c3ab00',
		},
		{
			path: '/dash-board/calendar',
			title: 'Lịch cá nhân',
			Icon: (props: ISidebarIconProps) => (
				<ContactsOutlined
					title={props.title}
					style={{ color: props.color }}
				/>
			),
			child: [],
			color: '#f5365c',
		},
	];

	return (
		<nav
			className={`${cx('sidebar_dash', {
				expanded: showSidebar,
			})} pt-8 px-4 fixed select-none flex flex-col bottom-0 left-0 top-0 z-[100000] bg-white`}
		>
			<div>
				<div className='flex items-center lg:justify-between justify-center mb-6'>
					<Link to='/'>
						<img
							src={getImage('branch.jpg')}
							alt='branch'
							className='object-contain object-center w-28 h-16'
						/>
					</Link>
					<Bar
						classSvg={showSidebar ? cx('run') : ''}
						handleToggleShowSidebar={handleToggleShowSidebar}
						className={`${cx(
							'header_bar',
						)} flex-col items-center cursor-pointer p-3 lg:flex hidden`}
					/>
				</div>
				<ul>
					{siderbarData.map(({ Icon, ...rest }, index) => (
						<li
							key={index}
							className={rest.path.endsWith('calendar') ? 'sm:block hidden' : ''}
						>
							<ListSidebarDash
								Icon={Icon}
								rest={rest}
								showSidebar={showSidebar}
							/>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default SidebarDash;

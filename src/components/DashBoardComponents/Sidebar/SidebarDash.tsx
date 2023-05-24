import {
	BookOutlined,
	ContactsOutlined,
	DatabaseOutlined,
	HomeOutlined,
	LockOutlined,
	QuestionCircleOutlined,
	ShoppingCartOutlined,
	UserOutlined,
	WechatOutlined,
} from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import ListSidebarDash from './ListSidebarDash';
import styles from './sidebar-dash.module.scss';

import Bar from '@/components/helpers/Bar';
import { IBar, ISidebarIconProps, ISidebarRest } from '@/types/pages/IDashBoard';
import { getImage } from '@/utils/CustomImagePath';

const cx = classNames.bind(styles);

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
		role: ['user', 'admin'],
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
		child: [
			{ to: 'profile/edit-profile', title: 'Chỉnh sửa thông tin' },
			{ to: 'profile/edit-password', title: 'Đổi mật khẩu' },
		],
		color: '#c3ab00',
		role: ['user', 'admin'],
	},
	{
		path: '/dash-board/post-room',
		title: 'Quản lý bài đăng phòng',
		Icon: (props: ISidebarIconProps) => (
			<BookOutlined
				title={props.title}
				style={{ color: props.color }}
			/>
		),
		child: [{ to: 'post-room/add-post-room', title: 'Đăng rao phòng' }],
		color: '#ff9900',
		role: ['user', 'admin'],
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
		role: ['user', 'admin'],
	},
	{
		path: '/dash-board/comments',
		title: 'Góp ý khách hàng',
		Icon: (props: ISidebarIconProps) => (
			<DatabaseOutlined
				title={props.title}
				style={{ color: props.color }}
			/>
		),
		child: [],
		color: '#2dce89',
		role: ['user', 'admin'],
	},
	{
		path: '/dash-board/chat-message',
		title: 'Tin nhắn',
		Icon: (props: ISidebarIconProps) => (
			<WechatOutlined
				title={props.title}
				style={{ color: props.color }}
			/>
		),
		child: [],
		color: '#0499a8',
		role: ['user', 'admin'],
	},
	{
		path: '/dash-board/orders',
		title: 'Các đơn đặt',
		Icon: (props: ISidebarIconProps) => (
			<ShoppingCartOutlined
				title={props.title}
				style={{ color: props.color }}
			/>
		),
		child: [],
		color: '#1976d2',
		role: ['user', 'admin'],
	},
	{
		path: '/dash-board/q-a',
		title: 'Hỏi đáp',
		Icon: (props: ISidebarIconProps) => (
			<QuestionCircleOutlined
				title={props.title}
				style={{ color: props.color }}
			/>
		),
		child: [],
		color: '#007eff',
		role: ['user', 'admin'],
	},
	{
		path: '/dash-board/admin',
		title: 'Admin',
		Icon: (props: ISidebarIconProps) => (
			<LockOutlined
				title={props.title}
				style={{ color: props.color }}
			/>
		),
		child: [
			{ to: 'admin/feedback-forgot-password', title: 'Ý kiến - Quên MK' },
			{ to: 'admin/add-news', title: 'Tạo tin tức' },
			{ to: 'admin/news', title: 'Tin tức' },
			{ to: 'admin/qa-report', title: 'Báo cáo QA' },
		],
		color: '#505050',
		role: ['admin'],
	},
];
const SidebarDash: FC<IBar> = ({ showSidebar, handleToggleShowSidebar }) => {
	const r = 'admin';
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
							src={getImage('branch.png')}
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
				<ul className={cx('siderbar_dash-container')}>
					{siderbarData.map(({ Icon, ...rest }, index) => {
						const checkRender: boolean = rest.role.includes(r);
						if (checkRender) {
							return (
								<li
									key={index}
									className={rest.path.endsWith('calendar') ? 'sm:block hidden' : ''}
									onClick={!rest.child.length ? handleToggleShowSidebar : undefined}
								>
									<ListSidebarDash
										Icon={Icon}
										rest={rest}
										showSidebar={showSidebar}
										handleToggleShowSidebar={handleToggleShowSidebar}
									/>
								</li>
							);
						}
						return null;
					})}
				</ul>
			</div>
		</nav>
	);
};

export default SidebarDash;

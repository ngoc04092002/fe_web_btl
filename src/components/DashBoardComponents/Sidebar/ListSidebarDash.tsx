import { RightOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './sidebar-dash.module.scss';

import { IListSidebarDash } from '@/types/pages/IDashBoard';
const cx = classNames.bind(styles);

const ListSidebarDash: FC<IListSidebarDash> = ({ showSidebar, Icon, rest }) => {
	const [active, setActive] = useState(false);
	const handleExpandInfo = () => {
		if (!showSidebar && rest.child?.length > 0) {
			setActive(!active);
		}
	};
	return (
		<>
			<NavLink
				to={rest.path}
				className={({ isActive }) => (isActive ? cx('active') : '')}
				onClick={handleExpandInfo}
			>
				<Icon
					title={rest.title}
					color={rest.color}
				/>{' '}
				<p
					className={`${cx('text', {
						unshow: showSidebar,
					})} whitespace-nowrap overflow-hidden`}
				>
					{rest.title}
				</p>
				{!!rest.child?.length && (
					<RightOutlined
						className={cx('arrow-expand', {
							active: active,
						})}
					/>
				)}
			</NavLink>
			{!!rest.child?.length && (
				<ul className={`${cx('expand-info')} ${active && !showSidebar ? 'h-[112px]' : 'h-0'}`}>
					<li>
						<Link to='profile/edit-profile'>Chỉnh sửa thông tin</Link>
					</li>

					<li>
						<Link to='profile/edit-password'>Đổi mật khẩu</Link>
					</li>
				</ul>
			)}
		</>
	);
};

export default ListSidebarDash;

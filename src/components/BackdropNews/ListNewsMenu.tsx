import { RightOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './backdrop-news.module.scss';

import { ITopicNewsData } from '@/types/components/News/types';

type Props = { t: ITopicNewsData };

const cx = classNames.bind(styles);

const ListNewsMenu: FC<Props> = ({ t }) => {
	const [active, setActive] = useState(false);
	const handleExpandInfo = () => {
		setActive(!active);
	};
	return (
		<>
			<NavLink
				to={t.to}
				className={({ isActive }) => (isActive ? cx('backdrop_menu-active') : '')}
				onClick={handleExpandInfo}
			>
				<p className='whitespace-nowrap overflow-hidden text-2xl font-bold text-white'>{t.topic}</p>
				{!!t.child?.length && (
					<RightOutlined
						className={cx('backdrop_menu-arrow-expand', {
							active: active,
						})}
					/>
				)}
			</NavLink>
			{!!t.child?.length && (
				<ul
					className={`${cx('backdrop_menu-expand-info')} ${
						active ? 'h-[112px] opacity-100' : 'h-0 opacity-0'
					}`}
				>
					{t.child.map((tc, i) => (
						<li
							key={i}
							className='text-white'
						>
							<a
								href={tc.to}
								rel='noreferrer'
							>
								{tc.title}
							</a>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default ListNewsMenu;

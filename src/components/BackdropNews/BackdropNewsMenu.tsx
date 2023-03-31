import { CloseOutlined, FacebookOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC } from 'react';

import ListNewsMenu from './ListNewsMenu';
import styles from './backdrop-news.module.scss';

import { topicNewsData } from '@/constants/NewsConst';

type Props = { hanleShowMenu: React.MouseEventHandler<HTMLElement>; showMenu: boolean };
const cx = classNames.bind(styles);

const BackdropNewsMenu: FC<Props> = ({ hanleShowMenu, showMenu }) => {
	return (
		<div className={`${cx('backdrop_menu')} flex flex-col items-center w-full`}>
			<div className='flex items-center justify-between w-full mb-8'>
				<ul className={`${cx('backdrop_menu-social')} flex items-center`}>
					<li>
						<a
							href='https://www.facebook.com/profile.php?id=100009696701104'
							target='_blank'
							rel='noreferrer'
						>
							<FacebookOutlined />
						</a>
					</li>
				</ul>
				<div
					onClick={hanleShowMenu}
					className=' text-white text-4xl cursor-pointer p-3'
				>
					<CloseOutlined />
				</div>
			</div>
			<ul className={`${cx('backdrop_menu-topic')} w-full`}>
				{topicNewsData.map((t, i) => (
					<li
						key={i}
						className='mb-8'
					>
						<ListNewsMenu t={t} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default BackdropNewsMenu;

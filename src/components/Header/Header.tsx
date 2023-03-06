import React from 'react';
import { Link } from 'react-router-dom';

import { IMenuNavBar } from '@/types/components/Header/type';
import { getImage } from '@/utils/CustomImagePath';

interface Props {}

const menuNavBar: IMenuNavBar[] = [
	{ title: 'Tìm thuê', to: 'rent' },
	{ title: 'Hỏi đáp', to: 'q-a' },
	{ title: 'Xem sau', to: 'view-later' },
	{ title: 'Dự án', to: 'project' },
];

const Header: React.FC<Props> = () => {
	return (
		<section className='header bg-white fixed z-[1000] h-14 left-0 top-0 right-0 drop-shadow-lg px-32 w-full select-none'>
			<div className='header-container h-full flex items-center'>
				<div className='navbar_logo w-12 h-12'>
					<Link to='/'>
						<img
							src={getImage('branch.jpg')}
							alt='branch store'
						/>
					</Link>
				</div>
				<div className='navbar-menu flex-1 d-rtl'>
					{menuNavBar.map((d) => (
						<Link
							key={d.to}
							className='px-4 hover:color-main'
							to={d.to}
						>
							{d.title}
						</Link>
					))}
				</div>
				<div className='navbar-user'>
					<Link to='sign-in'>Đăng nhập</Link>
					<Link
						to='publish'
						className='pl-4 border-solid border-2 border-[]'
					>
						Đăng tin
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Header;

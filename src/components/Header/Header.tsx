import { MenuOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Search from '../helpers/Search';

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
	const [active, setActive] = useState<boolean>(false);

	const handleActive = () => {
		setActive(!active);
	};
	return (
		<section className='header bg-white fixed z-[1000] h-14 left-0 top-0 right-0 drop-shadow-lg px-10 md:px-32 w-full select-none'>
			<div className='header-container h-full flex items-center'>
				<div className='navbar_logo w-12 h-12'>
					<Link to='/'>
						<img
							src={getImage('branch.jpg')}
							alt='branch store'
						/>
					</Link>
				</div>
				<Search />
				<MenuOutlined className='cus-screen:hidden block text-xl' />
				<div className='navbar-menu flex-1 d-rtl cus-screen:flex hidden'>
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
				<div className='navbar-user items-center cus-screen:flex hidden'>
					{/* <Link
						to='sign-in'
						className='pr-4'
					>
						Đăng nhập
					</Link> */}
					<div
						className={`flex mr-4 items-end cursor-pointer ${
							active && 'bg-[#e6fafa]'
						} rounded-2xl py-1 px-1`}
						onClick={handleActive}
					>
						<img
							className='w-7 h-7 object-contain'
							src={getImage('user.png')}
							alt='user'
						/>
						<span className='pl-1 font-medium'>Ngoc</span>
					</div>
					<Link
						to='publish'
						className='py-1 px-3 rounded hover:text-[#3dbfc9] font-medium border-solid border-[1px] border-[#01adba]'
					>
						Đăng tin
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Header;

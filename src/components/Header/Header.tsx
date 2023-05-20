import { MenuOutlined } from '@ant-design/icons';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDebounce } from 'use-debounce';

import Search from '../helpers/Search';

import HeaderDetail from './HeaderDetail';

import { AuthContext } from '@/context/AuthProvider';
import { IMenuNavBar } from '@/types/components/Header/type';
import { IAuthContext } from '@/types/context/type';
import { IUser } from '@/types/pages/types';
import { getImage } from '@/utils/CustomImagePath';

interface Props {
	handleActive: () => void;
}

const menuNavBar: IMenuNavBar[] = [
	{ title: 'Tìm thuê', to: '/search-room?s=' },
	{ title: 'Hỏi đáp', to: '/q-a' },
	{ title: 'Xem sau', to: '/view-later' },
	{ title: 'Tin tức', to: '/news' },
	{ title: 'Góp ý kiến', to: '/feedback' },
];

const Header: React.FC<Props> = ({ handleActive }) => {
	const { user } = useContext<IAuthContext>(AuthContext);
	const [show, setShow] = useState<boolean>(false);
	const [search, setSearch] = useState<string>('');
	const [searchValue] = useDebounce(search, 2500);

	const handleShowNavInfo = (e: React.MouseEvent<HTMLElement>) => {
		const class_name = (e.target as HTMLElement).className;

		if (typeof class_name === 'string' && class_name.includes('dynamic')) {
			setShow(!show);
		}
	};

	const handleUnShow = () => {
		setShow(false);
	};

	const handleClickSearch = () => {
		// eslint-disable-next-line no-restricted-globals
		const { origin } = location;
		window.location.replace(`${origin}/search-room?s=${search}`);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		<section className='header bg-white fixed z-[1000] h-14 left-0 top-0 right-0 drop-shadow-lg px-10 md:px-[7rem] w-full select-none'>
			<div className='header-container h-full flex items-center'>
				<div className='navbar_logo w-12 h-12'>
					<Link to='/'>
						<img
							src={getImage('branch.png')}
							alt='branch store'
						/>
					</Link>
				</div>
				<Search
					handleChange={handleChange}
					handleClick={handleClickSearch}
					searchValue={searchValue}
					isTippy
					isHeader
				/>

				<MenuOutlined
					onClick={handleActive}
					className='cus-screen:hidden block text-xl cursor-pointer'
				/>
				<div className='navbar-menu flex-1 d-rtl cus-screen:flex hidden'>
					{menuNavBar.map((d) => (
						<Link
							key={d.to}
							className='px-3 hover:color-main'
							to={d.to}
						>
							{d.title}
						</Link>
					))}
				</div>
				<div className='navbar-user items-center cus-screen:flex hidden'>
					{Object.values(user).length > 0 ? (
						<div
							className={`dynamic flex mr-4 items-end cursor-pointer ${
								show && 'bg-[#e6fafa]'
							} rounded-2xl py-1 px-1 relative`}
							onClick={handleShowNavInfo}
						>
							<img
								className='dynamic w-7 h-7 object-cover rounded-full'
								src={(Object.keys(user).length && (user as IUser).avatar) || getImage('user.png')}
								alt='user'
							/>
							<span className='dynamic pl-1 font-medium overflow-hidden text-ellipsis whitespace-nowrap max-w-[67px]'>
								{(user as IUser)?.username}
							</span>
							{show && <HeaderDetail handleUnShow={handleUnShow} />}
						</div>
					) : (
						<Link
							to='sign-in'
							className='pr-4'
						>
							Đăng nhập
						</Link>
					)}
					<Link
						to='/dash-board/post-room/add-post-room'
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

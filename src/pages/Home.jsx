import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const Home = () => {
	const location = useLocation();
	const isDashBoard = location.pathname.includes('dash-board');
	const [active, setActive] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const handleShowMenu = () => {
		setActive(true);
	};

	const handleCloseMenu = () => {
		setActive(false);
	};

	const handleClickBackDrop = () => {
		setActive(false);
	};
	if (active) {
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'overlay';
	}
	// reset show menu
	useEffect(() => {
		function updateSize() {
			if (window.innerWidth > 840) {
				setActive(false);
				setIsMobile(false);
			} else {
				setIsMobile(true);
			}
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	return (
		<section className='w-full min-h-full relative'>
			{isMobile && (
				<Sidebar
					active={active}
					handleActive={handleCloseMenu}
					setActive={setActive}
				/>
			)}
			{!isDashBoard && <Header handleActive={handleShowMenu} />}
			<div
				className={`${!isDashBoard ? 'mt-14' : ''} min-h-[${
					isDashBoard ? '100vh' : '65vh'
				}] bg-white`}
			>
				<Outlet />
			</div>
			{!isDashBoard && <Footer />}
			<div
				className={`fixed bg-backdrop inset-0 z-[9999] cus-screen:hidden ${
					active ? 'block' : 'hidden'
				}`}
				onClick={handleClickBackDrop}
			></div>
		</section>
	);
};

export default Home;

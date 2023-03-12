import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Home = () => {
	return (
		<section className='w-full min-h-full'>
			<Header />
			<div className='mt-14 min-h-[65vh] bg-white'>
				<Outlet />
				<div className='h-full'>a</div>
			</div>
			<Footer />
		</section>
	);
};

export default Home;

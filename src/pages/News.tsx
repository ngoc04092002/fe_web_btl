import { ArrowUpOutlined } from '@ant-design/icons';
import React, { FC, useEffect } from 'react';

import BodyNews from '@/components/News/BodyNews';
import FooterNews from '@/components/News/FooterNews';
import HeaderNews from '@/components/News/HeaderNews';

type Props = {};

const News: FC<Props> = () => {
	useEffect(() => {
		function handleScroll() {
			const goUp = document.getElementById('scrollToTop');
			if (window.scrollY > window.outerHeight) {
				goUp?.classList.add('active');
			} else {
				goUp?.classList.remove('active');
			}
		}
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleClickGoUp = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<section className='relative'>
			<HeaderNews />
			<BodyNews />
			<FooterNews />
			<div
				id='scrollToTop'
				className='fixed bottom-12 right-12 shadow-md rounded-[100%] w-[60px] h-[60px] flex items-center justify-center transition-all cursor-pointer bg-white '
				onClick={handleClickGoUp}
			>
				<span className='text-[26px]'>
					<ArrowUpOutlined />
				</span>
			</div>
		</section>
	);
};

export default News;

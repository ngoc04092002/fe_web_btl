import { ArrowUpOutlined } from '@ant-design/icons';
import React, { FC, useEffect } from 'react';

type Props = {};

const Goup: FC<Props> = () => {
	const handleClickGoUp = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

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

	return (
		<div
			id='scrollToTop'
			className='fixed bottom-4 rounded-[50%] right-12 shadow-md w-[50px] h-[50px] flex items-center justify-center transition-all cursor-pointer bg-[#01adba]'
			onClick={handleClickGoUp}
		>
			<span className='text-[24px] leading-[1] text-white'>
				<ArrowUpOutlined />
			</span>
		</div>
	);
};

export default Goup;

import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { QALeft, QAMiddle, QARight } from '@/components/QA';

type Props = {};

const topicQA: string[] = ['Chủ đề', 'Bảng tin', 'Thống kê'];

const QA: FC<Props> = () => {
	return (
		<>
			<ul className='cus-screen:hidden grid grid-cols-3 fixed w-full bg-[#f7f8f9] z-[9999]'>
				{topicQA.map((t) => (
					<li className='cursor-pointer duration-[0ms] text-center hover:color-main p-3 border border-solid border-[#e6ecf0]'>
						<Link
							to='/'
							className='font-semibold'
						>
							{t}
						</Link>
					</li>
				))}
			</ul>
			<section className='cus-screen:py-10 py-16 px-12 bg-[#F0F2F5]'>
				<div className='grid grid-cols-7 gap-4'>
					<div className='col-span-1 cus-screen:block hidden'>
						<QALeft />
					</div>
					<div className='cus-screen:col-span-4 col-span-7'>
						<QAMiddle />
					</div>
					<div className='col-span-2 cus-screen:block hidden'>
						<QARight />
					</div>
				</div>
			</section>
		</>
	);
};

export default QA;

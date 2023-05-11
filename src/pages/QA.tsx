import React, { FC, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { BackDropContext } from './Home';

import { DialogCard, QALeft, QAMiddle, QARight } from '@/components/QA';
import Goup from '@/components/helpers/Goup';
import HeadTitle from '@/hooks/Head';

type Props = {};

const topicQA: { title: string; to: string }[] = [
	{
		title: 'Bảng tin',
		to: '/q-a',
	},
	{
		title: 'Thống kê',
		to: '/q-a/statistical',
	},
];

const QA: FC<Props> = () => {
	HeadTitle('Questions & Answers');
	const { showBackDrop } = useContext(BackDropContext);
	const { id } = useParams();
	const isStatistical = id === 'statistical';

	return (
		<>
			<ul className='cus-screen:hidden grid grid-cols-2 fixed w-full bg-[#f7f8f9] z-[9997]'>
				{topicQA.map((t, index) => (
					<Link
						to={t.to}
						key={index}
						className='font-semibold'
					>
						<li className='cursor-pointer duration-[0ms] text-center hover:color-main p-3 border border-solid border-[#e6ecf0]'>
							{t.title}
						</li>
					</Link>
				))}
			</ul>
			<section className='cus-screen:py-10 py-16 px-12 bg-[#F0F2F5]'>
				<div className='grid grid-cols-7 gap-4'>
					<div className='col-span-1 cus-screen:block hidden'>
						<QALeft />
					</div>
					<div className='cus-screen:col-span-4 col-span-7'>
						{isStatistical ? <QARight /> : <QAMiddle />}
					</div>
					<div className='col-span-2 cus-screen:block hidden'>
						<QARight />
					</div>
				</div>
			</section>
			{showBackDrop && <DialogCard />}
			<Goup />
		</>
	);
};

export default QA;

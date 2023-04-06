import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import './body-news.css';
import HeadBodyNews from './HeadBodyNews';

type Props = {};

const BodyNews: FC<Props> = () => {
	const { topic, category } = useParams();
	const isNewsHome: boolean = !topic && !category;

	return (
		<div className='flex flex-row items-center justify-between'>
			{isNewsHome && (
				<div className='w-full'>
					<HeadBodyNews />
				</div>
			)}
			<div></div>
			<div></div>
		</div>
	);
};

export default BodyNews;

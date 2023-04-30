import React, { FC } from 'react';

import HeadBodyNews from '../../BodyNews/HeadBodyNews';
import { Advice, Architecture, FengShui, Knowledge, Law, Project } from '../topics';

type Props = {};

const NewsHome: FC<Props> = () => {
	return (
		<div className='news_home-container'>
			<div className='w-full'>
				<HeadBodyNews />
			</div>
			<div className='flex flex-col md:flex-row items-start mt-12 w-full '>
				<div className='w-full md:w-3/5'>
					<FengShui />
					<Architecture />
					<Advice />
					<Knowledge />
				</div>
				<div className='w-full md:w-2/5 ml-12'>
					<Project />
					<Law />
				</div>
			</div>
		</div>
	);
};

export default NewsHome;

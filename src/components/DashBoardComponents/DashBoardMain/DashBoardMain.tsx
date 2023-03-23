import React, { FC } from 'react';

import LineChart from '@/components/chart/linechart/LineChart';

type Props = {};

const DashBoardMain: FC<Props> = () => {
	return (
		<>
			<div className='lg:w-[65%] w-full bg-[#172b4d] rounded-lg mb-8'>
				<LineChart />
			</div>
			<div className='lg:w-[33%] w-full'>a</div>
		</>
	);
};

export default DashBoardMain;

import React, { FC } from 'react';

import LineChart from '@/components/chart/linechart/LineChart';

type Props = {};

const DashBoardMain: FC<Props> = () => {
	return (
		<>
			<div className='w-full bg-[#172b4d] rounded-lg mb-8'>
				<LineChart />
			</div>
		</>
	);
};

export default DashBoardMain;

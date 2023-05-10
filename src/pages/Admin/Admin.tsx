import React, { FC } from 'react';
import { Outlet, useOutlet } from 'react-router-dom';

import LineChart from '@/components/chart/linechart/LineChart';

type Props = {};

const Admin: FC<Props> = () => {
	const isOutlet = useOutlet();
	return <div className='w-full'>{isOutlet ? <Outlet /> : <LineChart />}</div>;
};

export default Admin;

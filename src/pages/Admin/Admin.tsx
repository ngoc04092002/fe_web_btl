import React, { FC } from 'react';
import { Outlet, useOutlet } from 'react-router-dom';

import LineChart from '@/components/chart/linechart/LineChart';
import HeadTitle from '@/hooks/Head';

type Props = {};

const Admin: FC<Props> = () => {
	HeadTitle('Admin');
	const isOutlet = useOutlet();
	return <div className='w-full'>{isOutlet ? <Outlet /> : <LineChart />}</div>;
};

export default Admin;

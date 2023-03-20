import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import HeaderDash from '@/components/DashBoardComponents/HeaderDash';

type Props = {};

const DashBoard: FC<Props> = () => {
	return (
		<div className='relative'>
			<HeaderDash />
			<Outlet />
		</div>
	);
};

export default DashBoard;

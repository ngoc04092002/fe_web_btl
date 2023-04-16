import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

type Props = {};

const Admin: FC<Props> = () => {
	return (
		<div className='w-full'>
			<Outlet />
		</div>
	);
};

export default Admin;

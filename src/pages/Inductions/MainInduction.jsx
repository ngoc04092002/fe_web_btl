import React from 'react';
import { Outlet } from 'react-router-dom';

const MainInduction = () => {
	return (
		<section>
			<Outlet />
		</section>
	);
};

export default MainInduction;

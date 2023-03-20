import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import HeaderDash from '@/components/DashBoardComponents/HeaderDash';
import { IBar } from '@/types/pages/IDashBoard';

const DashBoard: FC<IBar> = ({ showSidebar, handleToggleShowSidebar }) => {
	return (
		<div
			className={`${showSidebar ? 'lg:ml-[5rem]' : 'lg:ml-[18rem]'} py-4 md:px-6 px-1 bg-[#11cdef]`}
		>
			<HeaderDash
				classSvg={showSidebar ? 'w-[11px] translate-x-1' : 'w-[20px] translate-x-0'}
				handleToggleShowSidebar={handleToggleShowSidebar}
				className='flex flex-col items-center cursor-pointer py-3 md:px-3 px-0'
			/>
			<Outlet />
		</div>
	);
};

export default DashBoard;

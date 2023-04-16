import { StyledEngineProvider } from '@mui/material/styles';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import HeaderDash from '@/components/DashBoardComponents/HeaderDash';
import { IBar } from '@/types/pages/IDashBoard';
const DashBoard: FC<IBar> = ({ showSidebar, handleToggleShowSidebar }) => {
	return (
		<div
			className={`${
				showSidebar ? 'lg:ml-[5rem]' : 'lg:ml-[18rem]'
			} pb-24 pt-4 px-6 bg-[#11cdef] relative`}
		>
			<HeaderDash
				classSvg={showSidebar ? 'w-[11px] translate-x-1' : 'w-[20px] translate-x-0'}
				handleToggleShowSidebar={handleToggleShowSidebar}
				className='flex flex-col items-center cursor-pointer py-3 md:px-3 px-0'
			/>
			<StyledEngineProvider injectFirst>
				<div className='absolute mt-6 flex items-center justify-between flex-wrap right-5 left-5'>
					<Outlet />
				</div>
			</StyledEngineProvider>
		</div>
	);
};

export default DashBoard;

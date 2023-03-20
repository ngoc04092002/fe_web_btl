import React, { FC, useState } from 'react';

import DashBoard from './DashBoard';

import SidebarDash from '@/components/DashBoardComponents/Sidebar/SidebarDash';
import HeadTitle from '@/hooks/Head';

type Props = {};

const DashBoardContainer: FC<Props> = () => {
	HeadTitle('Dashboard');

	const [showSidebar, setShowSidebar] = useState<boolean>(false);

	const handleToggleShowSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	return (
		<section>
			<div className='relative'>
				<SidebarDash
					handleToggleShowSidebar={handleToggleShowSidebar}
					showSidebar={showSidebar}
				/>
				<DashBoard
					showSidebar={showSidebar}
					handleToggleShowSidebar={handleToggleShowSidebar}
				/>
				<div
					className={`fixed inset-0 z-[9999] lg:hidden ${!showSidebar ? 'block' : 'hidden'}`}
					onClick={handleToggleShowSidebar as React.MouseEventHandler<HTMLDivElement>}
				></div>
			</div>
		</section>
	);
};

export default DashBoardContainer;

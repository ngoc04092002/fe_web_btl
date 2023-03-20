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
			<div className=''>
				<SidebarDash
					handleToggleShowSidebar={handleToggleShowSidebar}
					showSidebar={showSidebar}
				/>
				<DashBoard />
			</div>
		</section>
	);
};

export default DashBoardContainer;

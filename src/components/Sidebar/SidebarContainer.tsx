import React, { FC } from 'react';

import Sidebar from './Sidebar';

type Props = {
	handleActive?: () => void;
	active?: boolean;
	setActive: (value: boolean) => void;
};

const SidebarContainer: FC<Props> = ({ active, handleActive, setActive }) => {
	return (
		<div>
			<Sidebar
				active={active}
				handleActive={handleActive}
				setActive={setActive}
			/>
		</div>
	);
};

export default SidebarContainer;

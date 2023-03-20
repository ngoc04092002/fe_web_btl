import React, { FC } from 'react';

import { LineIcon } from '@/components/assests/icons';
import { IBar } from '@/types/pages/IDashBoard';

const Bar: FC<IBar> = ({ classSvg, className, handleToggleShowSidebar }) => {
	return (
		<div
			onClick={handleToggleShowSidebar}
			className={className}
		>
			<LineIcon classSvg={classSvg} />
			<LineIcon />
			<LineIcon classSvg={classSvg} />
		</div>
	);
};

export default Bar;

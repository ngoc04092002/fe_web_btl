import React from 'react';

export interface IBar {
	handleToggleShowSidebar: React.MouseEventHandler<HTMLDivElement>;
	classSvg?: string;
	className?: string;
	showSidebar?: boolean;
}

import React from 'react';

export interface IBar {
	handleToggleShowSidebar: React.MouseEventHandler<HTMLDivElement>;
	classSvg?: string;
	className?: string;
	showSidebar?: boolean;
}

export interface IDataStat {
	title: string;
	sales: string;
	// eslint-disable-next-line no-undef
	icon: JSX.Element;
	color: string;
	developSpeed: string;
	timestamp: string;
}

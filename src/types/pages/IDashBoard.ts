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
export type DashBoardFormIdEditPassword = 'password' | 'verifyPassword';
export type DashBoardFormIdEditProfile = keyof IFromEditProfile;

export interface IFromEditProfile {
	username?: string;
	email?: string;
	address?: string;
	gender?: string;
	avatar?: string;
	sdt?: string;
	male?: boolean;
	female?: boolean;
}

export interface IFormEditPassword {
	password?: string;
	verifyPassword?: string;
}

export interface ISidebarIconProps {
	title: string;
	color: string;
}

export interface ISidebarRest {
	path: string;
	title: string;
	color: string;
	// eslint-disable-next-line no-undef
	Icon: (props: ISidebarIconProps) => JSX.Element;
	child: string[];
}

export type IListSidebarDash = {
	rest: Omit<ISidebarRest, 'Icon'>;
	Icon: ISidebarRest['Icon'];
	showSidebar?: boolean;
};

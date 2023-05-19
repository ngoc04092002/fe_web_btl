import React from 'react';

import { IUser } from './types';

export interface IBar {
	handleToggleShowSidebar: React.MouseEventHandler<HTMLElement> | undefined;
	classSvg?: string;
	className?: string;
	showSidebar?: boolean;
}

export interface IDataStat {
	title: string;
	sales: number;
	// eslint-disable-next-line no-undef
	icon: JSX.Element;
	color: string;
	developSpeed: string;
	timestamp: string;
	increment: boolean;
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
	oldPassword?: string;
	password?: string;
	verifyPassword?: string;
}

export interface ISidebarIconProps {
	title: string;
	color: string;
}

interface IChild {
	to: string;
	title: string;
}

export interface ISidebarRest {
	path: string;
	title: string;
	color: string;
	// eslint-disable-next-line no-undef
	Icon: (props: ISidebarIconProps) => JSX.Element;
	child: IChild[];
	role: string[];
}

export type IListSidebarDash = {
	rest: Omit<ISidebarRest, 'Icon'>;
	Icon: ISidebarRest['Icon'];
	showSidebar?: boolean;
};

export type IOrderTableDash = 'asc' | 'desc';

export interface IEWaitingR {
	id?: string;
	email: string;
}

export interface IPostRoomSrc {
	src: string;
}

export interface IRequestPostRoom {
	title: string;
	des: string;
	address: string;
	phone: string;
	price: string;
	sale: string;
	bedRoom: string;
	bathroom: string;
	acreage: string;
	limitNumberPeople: number;
	roomType: string;
	src?: IPostRoomSrc[];
	clientEntityPostRoom?: Pick<IUser, 'id'>;
}

export interface IPostRoomResponse {
	id: number;
	title: string;
	des: string;
	address: string;
	phone: string;
	price: string;
	sale: string;
	bedRoom: string;
	bathroom: string;
	acreage: string;
	status: boolean;
	limitNumberPeople: number;
	roomType: string;
	src?: IPostRoomSrc[];
	clientEntityPostRoom?: IUser;
	createdAt?: string;
}

export type keysI18PostRoom =
	| 'phone'
	| 'bedRoom'
	| 'bathroom'
	| 'acreage'
	| 'sale'
	| 'limitNumberPeople'
	| 'roomType';

export interface IFilterPostRoomParams {
	limit?: number;
	offset?: number;
	s?: string;
	address?: string;
	type?: string;
	price?: string;
	acreage?: string;
	numberRoom?: string;
	time?: string;
}

export interface IClientFeedback {
	id?: number;
	name: string;
	phone: string;
	email: string;
	content: string;
	clientId?: number;
}

interface IFormReport {
	sales: number;
	developSpeed: string;
	increment: boolean;
}

export interface IPostRoomReportResponse {
	totalRoom: IFormReport;
	rented: IFormReport;
	sales: IFormReport;
}

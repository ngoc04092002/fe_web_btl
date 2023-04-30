import React from 'react';

import { IUser } from '@/types/pages/types';

export interface ITopicNewsData {
	to: string;
	topic: string;
	child: { to: string; type: string }[] | [];
}

export interface INewsCard {
	title?: string;
	des?: string;
	styles?: string;
	styleImg?: string;
	styleTitle?: string;
	src: string;
	dateTime?: string;
	styleDivInfo?: string;
	styleDivImg?: string;
	href?: string;
}

export interface INewsHomeHot {
	styles?: string;
	href: string;
	src: string;
	title: string;
	dateTime?: string;
	styleTitle?: string;
}

export interface ICreateNewsPiece {
	handlePreviewImgNewsPiece: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleRecordNews: (e?: any) => void;
	body: string;
	setBody: (body: string) => void;
	valuePiece: Omit<INewsPieceData, 'img' | 'body'>;
	handleChangeValuePiece: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isImg: boolean;
}

export interface INewsPieceData {
	title: string;
	des: string;
	img: string;
	caption: string;
	body: string;
}

export type IKeysNewsPiece = keyof Omit<INewsPieceData, 'body' | 'img'>;
export type IKeysNewsMain = keyof Omit<INewsMainData, 'body' | 'img'>;

export interface INewsMainData {
	topic: string;
	type: string;
	title: string;
	des: string;
	img: string;
	newsBody?: INewsPieceData[];
	clientEntity?: Pick<IUser, 'id'>;
}

export interface INewsImage {
	id?: number;
	url: string;
	file: File | null;
}

export interface INewsInputElement {
	id: string;
	name: string;
	label: string;
}

export interface INewsResponse {
	createdAt: Date;
	des: string;
	fk_news_client_id: number;
	id: number;
	topic: number;
	type: number;
	img: string;
	newsBody: INewsPieceData[];
	title: string;
	updatedAt: Date;
}

export interface IParamsFilterNews {
	limit?: number;
	offset?: number;
	topic?: string;
	type?: string;
}

export interface IParamsSearchNews {
	limit?: number;
	offset?: number;
	s: string;
}

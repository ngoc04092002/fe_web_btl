import React from 'react';

import { IUser } from './types';

export interface IRequestBodyQA {
	img: string;
	content: string;
	clientEntityQa: Omit<IUser, 'token'>;
	likes?: Ilikes[];
	commentsEntities?: IComments[];
}

export interface iFilterQA {
	s: string;
	limit: number;
	offset: number;
}

export interface Ilikes {
	id: number;
	clientLikeEntities: Omit<IUser, 'token'>;
	qaEntity: any;
	createdAt: string;
}

export interface IComments {
	id?: number;
	content: string;
	clientComment: Omit<IUser, 'token'>;
	qaEntity: Omit<IQAResponse, 'clientEntityQa'>;
	commentChildren?: ICommentChild[] | [];
	createdAt?: string;
	likes?: Ilikes[] | [];
}

export interface ICommentChild {
	id?: number;
	content: string;
	clientComment: Omit<IUser, 'token'>;
	createdAt?: string;
	commentsEntity: IComments;
}

export interface IQAResponse {
	id: number;
	img: string;
	content: string;
	clientEntityQa: Omit<IUser, 'token'>;
	createdAt?: string;
	likes?: Ilikes[] | [];
	commentsEntities?: IComments[] | [];
}

export interface ITextFieldComment {
	styles?: string;
	isChild?: boolean;
	value?: string;
	handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void | undefined;
	handleSend?: () => void;
}

export interface IToggleLike {
	clientLikeEntities: Pick<IUser, 'id'>;
	qaEntity: Pick<IQAResponse, 'id'>;
}

export interface IQAReport {
	id: number;
	report: boolean;
}

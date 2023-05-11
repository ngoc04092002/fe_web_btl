import React from 'react';

import { IUser } from './types';

export interface IRequestBodyQA {
	img: string;
	content: string;
	clientEntityQa: Omit<IUser, 'token'>;
}

export interface iFilterQA {
	s: string;
	limit: number;
	offset: number;
}

export interface Ilikes {
	like_id: number;
	client_id: number;
	post_id: number;
	createdAt: string;
}

export interface IComments {
	id?: number;
	content: string;
	clientComment: Omit<IUser, 'token'>;
	qaEntity: Omit<IQAResponse, 'clientEntityQa'>;
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

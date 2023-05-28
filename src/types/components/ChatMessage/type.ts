import React from 'react';

export interface CreateMessageRequest {
	id?: string;
	rid: string;
	from: string;
	to: string;
	msg: string;
	createdAt?: string;
}

export interface IChatMessageUserInfo {
	id: number;
	img: string;
	username: string;
}

export interface ISeemModal {
	id?: string;
	rid: string;
	isRep: boolean;
}

export interface MessageResponse {
	from: string;
	to: string;
	msg: string;
}

export interface IBodyChatMessage {
	rid?: string;
	isLoading?: boolean;
	msgData: CreateMessageRequest[] | [];
	handleChangeMsg: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	msg: string;
	handleSendMessage?: () => void;
	handleDeleteMessage: (data: CreateMessageRequest) => void;
}

export interface IMessages {
	data: CreateMessageRequest[];
	handleDeleteMessage: (data: CreateMessageRequest) => void;
}

export interface IMessage {
	data: CreateMessageRequest;
	msg?: string;
	isOwern?: boolean;
	handleDeleteMessage: (data: CreateMessageRequest) => void;
}

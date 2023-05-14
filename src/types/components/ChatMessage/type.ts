export interface CreateMessageRequest {
	id?: string;
	rid: string;
	from: string;
	to: string;
	msg: string;
	createdAt?: string;
}

export interface MessageResponse {
	from: string;
	to: string;
	msg: string;
}

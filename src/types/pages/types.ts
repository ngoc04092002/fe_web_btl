export interface IUser {
	id?: string;
	username: string;
	email: string;
	address: string;
	gender: string;
	sdt?: string;
	password?: string;
	role?: string;
	token?: string;
	created_at?: Date;
}

export type IFormSignInUser = Pick<IUser, 'email' | 'password'>;

export type IUserLogged = Omit<IUser, 'password'>;

export interface IToastify {
	position: string;
	autoClose: number;
	hideProgressBar: boolean;
	closeOnClick: boolean;
	pauseOnHover: boolean;
	draggable: boolean;
	progress: undefined;
	theme: string;
}

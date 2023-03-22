import React from 'react';

import { IUser } from '../pages/types';

export interface IAuthContext {
	user: {} | IUser;
	setUser: React.Dispatch<React.SetStateAction<{} | IUser>>;
}

export type PropsAuth = {
	children: React.ReactNode;
};

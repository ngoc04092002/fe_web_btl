import { UserInfo } from 'firebase/auth';
import React from 'react';

import { IUser } from '../pages/types';

export interface IAuthContext {
	user: {} | IUser | UserInfo;
	setUser: React.Dispatch<React.SetStateAction<{} | IUser | UserInfo>>;
}

export type PropsAuth = {
	children: React.ReactNode;
};

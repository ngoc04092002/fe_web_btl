import React from 'react';

import { IUser } from '@/types/pages/types';

export interface IBill {
	name: string;
	phone: string;
	rid?: number;
	clientEntityBill?: IUser;
}

export type IKeyBills = 'name' | 'phone';

export interface IStepOne {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: IBill;
	checkStepOneValue?: boolean;
}

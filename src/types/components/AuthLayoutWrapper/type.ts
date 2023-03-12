import React from 'react';
export type Props = {
	id: string;
	label: string;
	placeholder?: string;
	styleDiv?: string;
	type: string;
	styleError?: string;
	styleLabel?: string;
	i18Label: string;
	styleInput?: string;
	children?: React.ReactNode;
	errors?: any;
};

export type RegisterId = keyof IFormSignIn & keyof IFormSignUp;

export type PropsAuthContainer = {
	id: string;
	children: React.ReactNode;
};

export interface IFormSignIn {
	group_form_email: string;
	group_form_password: string;
}

export interface IFormSignUp {
	group_form_username: string;
	group_form_email: string;
	group_form_address: string;
	group_form_male: boolean;
	group_form_female: boolean;
	password1: string;
	password2: string;
}

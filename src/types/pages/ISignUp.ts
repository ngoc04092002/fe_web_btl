export interface initializePasswordValue {
	[key: string]: boolean;
	password1: boolean;
	password2: boolean;
}

export interface ISignUpText {
	id: string;
	label: string;
	placeholder: string;
	styleDiv: string;
	styleLabel: string;
	type: string;
	i18Label: string;
}

export interface ISignUpPassword {
	id: string;
	label: string;
	placeholder: string;
	styleDiv: string;
	styleInput: string;
	styleLabel: string;
	type: string;
	isVisible: boolean;
	i18Label: string;
}

export interface ISignUpCheckbox {
	id: string;
	label: string;
	styleDiv: string;
	type: string;
	i18Label: string;
}

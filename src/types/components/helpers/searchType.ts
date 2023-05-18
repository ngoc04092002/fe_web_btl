import React from 'react';

export interface ISearch {
	styles?: string;
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleClick?: () => void;
	searchValue?: string;
	isTippy?: boolean;
	isHeader?: boolean;
}

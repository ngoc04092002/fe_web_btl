import React from 'react';

import { Props } from '@/types/components/AuthLayoutWrapper/type';

const FormGroup: React.FC<Props> = ({
	id,
	label,
	placeholder,
	styleDiv,
	type,
	styleLabel = '',
	styleInput,
	i18Label,
	children,
}) => {
	return (
		<div
			id={id}
			className={`w-full h-[2.4rem] flex items-center font-semibold relative ${styleDiv}`}
		>
			<label
				htmlFor={label}
				className={`mr-2 cursor-pointer ${styleLabel}`}
			>
				{i18Label}:
			</label>
			<input
				type={type}
				id={label}
				placeholder={placeholder}
				className={`${
					type !== 'checkbox' && 'focus:ring-blue-500 focus:ring-2'
				} flex-auto font-normal h-full p-1 rounded-md caret-slate-500 ${styleInput}`}
			/>
			{children}
			<span className={`error_message_${id}`}></span>
		</div>
	);
};

export default FormGroup;

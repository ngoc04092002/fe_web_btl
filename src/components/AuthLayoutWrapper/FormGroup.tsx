import { WarningOutlined } from '@ant-design/icons';
import { ErrorMessage } from '@hookform/error-message';
import React, { forwardRef, Ref } from 'react';

import { Props } from '@/types/components/AuthLayoutWrapper/type';

const FormGroup = (props: Props, ref: Ref<HTMLInputElement>) => {
	const {
		id,
		label,
		placeholder,
		styleDiv,
		styleError,
		type,
		styleLabel = '',
		styleInput,
		i18Label,
		children,
		errors,
		...rest
	} = props;
	return (
		<div
			id={id}
			className={`w-full h-[2.4rem] flex-wrap sm:mb-5 mb-8 flex items-center font-semibold relative ${styleDiv}`}
		>
			<label
				htmlFor={label}
				className={`mr-2 cursor-pointer ${styleLabel}`}
			>
				{i18Label}:
			</label>
			<input
				autoComplete={type === 'password' ? 'current-password' : ''}
				type={type}
				id={label}
				placeholder={placeholder}
				className={`${
					type !== 'checkbox' && errors[id]
						? 'border-red-500 border-solid border-2'
						: 'focus:ring-blue-500 focus:ring-2'
				} flex-auto font-normal h-full p-1 rounded-md caret-slate-500 ${styleInput}`}
				ref={ref}
				{...rest}
			/>
			{children}
			<ErrorMessage
				errors={errors}
				name={id}
				render={({ message }) => (
					<p className={`absolute flex items-center text-red-600 ${styleError}`}>
						{' '}
						<WarningOutlined />
						<span>{message}</span>
					</p>
				)}
			/>
			<span className={`error_message_${id}`}></span>
		</div>
	);
};

export default forwardRef(FormGroup);

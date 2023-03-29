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
			className={`w-full h-[2.4rem] flex-wrap sm:mb-5 mb-10 flex items-center font-semibold relative ${styleDiv}`}
		>
			<label
				htmlFor={label}
				className={`mr-2 cursor-pointer whitespace-nowrap ${styleLabel}`}
			>
				{i18Label}:
			</label>
			<input
				autoComplete={type === 'password' ? '' : 'username email'}
				type={type}
				id={label}
				placeholder={placeholder}
				className={`${
					type !== 'checkbox' && errors[id]
						? 'border-red-500 border-solid border-2'
						: 'focus:ring-blue-500 focus:ring-2'
				} flex-auto font-normal ${
					type !== 'checkbox' ? 'rounded-md h-full' : 'border-solid border-2 border-blue-500'
				} p-1 caret-slate-500 ${styleInput}`}
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

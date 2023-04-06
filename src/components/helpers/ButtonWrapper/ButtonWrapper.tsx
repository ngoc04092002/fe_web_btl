import React, { FC } from 'react';

import Loading from '@/components/Loading/Loading';

type Props = {
	children: React.ReactNode;
	styles?: string;
	isLoading?: boolean;
};

const ButtonWrapper: FC<Props> = ({ children, styles, isLoading = false, ...props }) => {
	return (
		<button
			type='submit'
			disabled={isLoading}
			className={`${
				isLoading ? 'bg-[#ccc]' : 'bg-[#01adba]'
			} select-none cursor-pointer mb-4 px-4 py-2 font-semibold text-white hover:bg-[#1cbcc7] min-w-[100px] ${styles}`}
			{...props}
		>
			{isLoading ? <Loading /> : children}
		</button>
	);
};

export default ButtonWrapper;

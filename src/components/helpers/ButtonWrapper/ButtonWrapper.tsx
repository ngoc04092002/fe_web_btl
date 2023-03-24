import React, { FC } from 'react';

type Props = {
	children: React.ReactNode;
	styles?: string;
};

const ButtonWrapper: FC<Props> = ({ children, styles }) => {
	return (
		<div
			className={`${styles} cursor-pointer mb-4 px-4 py-2 font-semibold bg-[#01adba] text-white hover:bg-[#1cbcc7]`}
		>
			{children}
		</div>
	);
};

export default ButtonWrapper;

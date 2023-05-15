import React, { FC } from 'react';

type Props = {
	msg?: string;
	isOwern?: boolean;
};

const Message: FC<Props> = ({ msg = '', isOwern = false }) => {
	if (!msg) {
		return <></>;
	}
	return (
		<div className={`${isOwern ? 'd-rtl' : ''} flex items-center mb-4`}>
			<p
				className={`text-sm ${
					isOwern ? 'bg-[#0084ff] text-white text-end break-all r' : 'bg-[#e9e9e9]'
				}  p-2 rounded-[14px]`}
			>
				{msg}
			</p>
		</div>
	);
};

export default Message;

import { MoreOutlined } from '@ant-design/icons';
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
		<div className={`${isOwern ? 'd-rtl ml-4' : 'mr-4'} flex items-center mb-4 `}>
			<p
				className={`text-sm ${
					isOwern ? 'bg-[#0084ff] text-white text-end break-all' : 'bg-[#e9e9e9]'
				}  p-2 rounded-[14px] relative`}
			>
				{msg}
				{isOwern && (
					<MoreOutlined className='absolute text-lg text-black top-1/2 -translate-y-1/2 cursor-pointer rounded-[50%] p-1 hover:bg-[#d5d5d54d] -left-[26px]' />
				)}
			</p>
		</div>
	);
};

export default Message;

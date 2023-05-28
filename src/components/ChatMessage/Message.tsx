import { MoreOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC, useState } from 'react';

import styles from './chat-message.module.scss';

import { IMessage } from '@/types/components/ChatMessage/type';

const cx = classNames.bind(styles);

const Message: FC<IMessage> = ({ msg = '', isOwern = false, data, handleDeleteMessage }) => {
	const [show, setShow] = useState(false);
	const handleClickMenuComment = () => {
		setShow(!show);
	};
	const handleClickDel = () => {
		handleDeleteMessage(data);
		setShow(!show);
	};
	if (!msg) {
		return <></>;
	}
	return (
		<div
			className={`${isOwern ? 'd-rtl ml-6' : 'mr-6'} flex items-center mb-4 ${cx(
				'chat_message-container',
			)} `}
		>
			<div
				className={`text-sm ${
					isOwern ? 'bg-[#0084ff] text-white text-end break-all' : 'bg-[#e9e9e9]'
				}  p-2 rounded-[14px] relative`}
			>
				{msg}
				{isOwern && (
					<MoreOutlined
						onClick={handleClickMenuComment}
						className={`${cx('menu')} ${
							!show ? 'hidden' : ''
						} absolute select-none text-lg d-rtl text-black top-1/2 -translate-y-1/2 cursor-pointer rounded-[50%] p-1 hover:bg-[#d5d5d54d] -left-[26px]`}
					/>
				)}
				{show && (
					<span
						className='z-10 absolute bg-white w-fit rounded-md -left-[30px] top-[calc(50%_+_18px)] shadow-0416 whitespace-nowrap text-black hover:bg-[#f7f8f9] p-2 cursor-pointer text-sm select-none'
						onClick={handleClickDel}
					>
						Xoá
					</span>
				)}
			</div>
		</div>
	);
};

export default Message;

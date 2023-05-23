import { SendOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC, useEffect } from 'react';

import Loading from '../Loading';

import Messages from './Messages';
import styles from './chat-message.module.scss';

import { IBodyChatMessage } from '@/types/components/ChatMessage/type';
const cx = classNames.bind(styles);

const BodyChatMessage: FC<IBodyChatMessage> = ({
	handleChangeMsg,
	handleSendMessage,
	msg,
	msgData,
	isLoading,
}) => {
	const resizeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		e.target.style.height = '40px';
		e.target.style.height = e.target.scrollHeight + 'px';
	};
	useEffect(() => {
		const div = document.querySelector('.scrollTo');
		if (div) {
			console.log(div.scrollHeight);
			div.scrollTop = div.scrollHeight;
		}
	}, []);
	return (
		<>
			<div className={`${cx('chat_msg_body')} pl-3 pr-5 scrollTo`}>
				{isLoading ? <Loading /> : <Messages data={msgData} />}
			</div>
			<div className='flex h-fit items-center px-2 mb-2 pt-2'>
				<textarea
					rows={1}
					onInput={resizeTextArea}
					className='border max-h-[80px] border-solid h-[40px] min-h-[40px] !border-[#01adba] input-none flex-1 duration-[0s] bg-[#dbdbdb9e] rounded-lg resize-none'
					name='content'
					placeholder='Aa'
					onChange={handleChangeMsg}
					value={msg}
				/>
				<SendOutlined
					onClick={handleSendMessage}
					className='ml-2 p-3 cursor-pointer hover:bg-[#dbdbdb9e] rounded-[50%]'
				/>
			</div>
		</>
	);
};

export default BodyChatMessage;

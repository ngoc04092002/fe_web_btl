import { CloseOutlined, MessageFilled, SendOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
// import dayjs from 'dayjs';
import React, { FC, useContext, useEffect, useState } from 'react';

import Loading from '../Loading';

import Messages from './Messages';
import styles from './chat-message.module.scss';

import socketClient from '@/config/SocketClient';
import { AuthContext } from '@/context/AuthProvider';
import { FetchApiGetRidMessages } from '@/hooks/fetchApiChatMessage';
import chatMessageClient from '@/infrastructure/chatMessageWebsocketActions';
import { CreateMessageRequest, MessageResponse } from '@/types/components/ChatMessage/type';
import { IUser } from '@/types/pages/types';
import { getImage } from '@/utils/CustomImagePath';
import { formatRoomId } from '@/utils/FormatIds';

type Props = {
	postUser?: IUser;
};
const cx = classNames.bind(styles);
let stompClient: any = null;

const ChatMessage: FC<Props> = ({ postUser }) => {
	const { user } = useContext(AuthContext);
	const [showBoxChat, setShowBoxChat] = useState(false);
	const [msg, setMsg] = useState('');
	const rid = formatRoomId(`${(user as IUser)?.id}`, `${postUser?.id}`);

	const { res, isLoading } = FetchApiGetRidMessages(rid);
	const [msgData, setMsgData] = useState<MessageResponse[] | []>([]);

	const handleShowBoxChat = () => {
		setShowBoxChat(!showBoxChat);
	};
	const resizeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		e.target.style.height = '40px';
		e.target.style.height = e.target.scrollHeight + 'px';
	};

	function connect() {
		stompClient = socketClient.getClient();
		if (stompClient !== null) {
			stompClient.connect(
				{},
				() => {
					stompClient.subscribe('/receive/message', (response: any) => {
						const resData: CreateMessageRequest = JSON.parse(response.body);
						console.log(resData);
						if (resData.rid.includes((user as IUser)?.id?.toString() || '')) {
							setMsgData((prev) => [...prev, resData]);
						}
					});
				},
				onError,
			);
		}
	}

	// websocket
	useEffect(() => {
		connect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onError = (err: any) => {
		console.log(err);
	};

	const handleChangeMsg = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMsg(e.target.value);
	};

	const handleSendMessage = () => {
		console.log(stompClient);
		if (stompClient !== null && stompClient.connected) {
			chatMessageClient.postMessage({
				rid,
				from: (user as IUser)?.username,
				to: postUser?.username || '',
				msg: msg,
				// createdAt: dayjs().format('YYYY-MM-DD hh:mm:ss'),
			});
			setMsg('');
		} else {
			console.log('No STOMP connection!');
			connect();
		}
	};

	const newMsgData = [...res, ...msgData];

	console.log(newMsgData);
	return (
		<div className={`fixed z-[10000] ${showBoxChat ? 'bottom-0' : 'bottom-8'} right-8`}>
			{!showBoxChat && (
				<div
					className='cursor-pointer'
					onClick={handleShowBoxChat}
				>
					<MessageFilled className='text-6xl color-main hover:text-[#03bdcb] duration-[0s]' />
				</div>
			)}
			{showBoxChat && (
				<div className='bg-white flex justify-between flex-col h-[400px] w-[370px] rounded-tl-md shadow-006 rounded-tr-md overflow-hidden'>
					<div className='flex items-center bg-main px-3 py-2 shadow-026'>
						<div className='mr-2'>
							<img
								src={postUser?.avatar || getImage('user.png')}
								alt=''
								className='w-10 h-10 select-none rounded-[50%] object-cover'
							/>
						</div>
						<ul className='text-white'>
							<li className='text-sm font-semibold'>{postUser?.username}</li>
							<li className='text-sm'>{postUser?.sdt}</li>
						</ul>
						<CloseOutlined
							onClick={handleShowBoxChat}
							className='justify-items-end block ml-auto text-white cursor-pointer text-xl font-bold'
						/>
					</div>
					<div className={`${cx('chat_msg_body')} pl-3 pr-5`}>
						{isLoading ? <Loading /> : <Messages data={newMsgData} />}
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
				</div>
			)}
		</div>
	);
};

export default ChatMessage;

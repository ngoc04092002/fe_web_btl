import { CloseOutlined, MessageFilled } from '@ant-design/icons';
// import dayjs from 'dayjs';
import { Stomp } from '@stomp/stompjs';
import React, { FC, useContext, useEffect, useState } from 'react';
import SockJS from 'sockjs-client';

import BodyChatMessage from './BodyChatMessage';

// import SocketClient from '@/config/SocketClient';
import { AuthContext } from '@/context/AuthProvider';
import { FetchApiGetRidMessages } from '@/hooks/fetchApiChatMessage';
// import ChatMessageClient from '@/infrastructure/chatMessageWebsocketActions';
import { CreateMessageRequest } from '@/types/components/ChatMessage/type';
import { IUser } from '@/types/pages/types';
import { getImage } from '@/utils/CustomImagePath';
import { formatRoomId } from '@/utils/FormatIds';

type Props = {
	postUser?: IUser;
};

let stompClient: any = null;

const ChatMessage: FC<Props> = ({ postUser }) => {
	const { user } = useContext(AuthContext);
	const [showBoxChat, setShowBoxChat] = useState(false);
	const [msg, setMsg] = useState('');
	const rid = formatRoomId(`${(user as IUser)?.id}`, `${postUser?.id}`);

	const { res, isLoading } = FetchApiGetRidMessages(rid);
	const [msgData, setMsgData] = useState<CreateMessageRequest[] | []>(res);

	const handleShowBoxChat = () => {
		setShowBoxChat(!showBoxChat);
	};

	// websocket
	useEffect(() => {
		const socket = new SockJS('http://localhost:8080/websocket');
		stompClient = Stomp.over(() => socket);
		// stompClient = new SocketClient().getClient();
		if (stompClient !== null) {
			stompClient.connect(
				{},
				() => {
					stompClient.subscribe('/receive/message', (response: any) => {
						const resData: CreateMessageRequest = JSON.parse(response.body);
						if (resData.rid === rid) {
							setMsgData((prev) => [...prev, resData]);
						}
					});
					stompClient.subscribe('/receive/message/delete', (response: any) => {
						const resData: CreateMessageRequest = JSON.parse(response.body);
						if (resData.rid === rid) {
							setMsgData((prev) => {
								const filterData = prev.filter((m) => m.id !== resData.id);
								return filterData;
							});
						}
					});
				},
				onError,
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onError = (err: any) => {
		console.log(err);
	};

	const handleChangeMsg = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMsg(e.target.value);
	};

	const handleSendMessage = () => {
		if (stompClient !== null && stompClient.connected) {
			stompClient.send(
				'/send/message',
				{},
				JSON.stringify({
					rid,
					from: (user as IUser)?.id,
					to: postUser?.id || '',
					msg: msg,
					// createdAt: dayjs().format('YYYY-MM-DD hh:mm:ss'),
				}),
			);
			setMsg('');
		} else {
			console.log('No STOMP connection!');
		}
	};

	const handleDeleteMessage = (data: CreateMessageRequest) => {
		if (stompClient !== null && stompClient.connected) {
			stompClient.send('/send//message/delete', {}, JSON.stringify(data));
			setMsg('');
		} else {
			console.log('No STOMP connection!');
		}
	};

	useEffect(() => {
		if (!res.length) {
			return;
		}
		setMsgData(res);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [!!res.length]);

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
					<BodyChatMessage
						rid={rid}
						handleChangeMsg={handleChangeMsg}
						handleSendMessage={handleSendMessage}
						msg={msg}
						msgData={msgData}
						isLoading={isLoading}
						handleDeleteMessage={handleDeleteMessage}
					/>
				</div>
			)}
		</div>
	);
};

export default ChatMessage;

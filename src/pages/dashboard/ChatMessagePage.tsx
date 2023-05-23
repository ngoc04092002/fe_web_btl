import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Stomp } from '@stomp/stompjs';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SockJS from 'sockjs-client';

import { ChatMessage } from '@/components';
import BodyChatMessage from '@/components/ChatMessage/BodyChatMessage';
import Loading from '@/components/Loading/Loading';
import { AuthContext } from '@/context/AuthProvider';
import {
	FetchApiGetAllUsersChatMessageTo,
	FetchApiGetRidMessages,
} from '@/hooks/fetchApiChatMessage';
import { CreateMessageRequest } from '@/types/components/ChatMessage/type';
import { IUser } from '@/types/pages/types';
import { getImage } from '@/utils/CustomImagePath';

type Props = {};

let stompClient: any = null;

const ChatMessagePage = (props: Props) => {
	const { partnerId } = useParams();
	const [showUser, setShowUser] = useState(false);
	const [msg, setMsg] = useState('');
	const { user } = useContext(AuthContext);
	const [msgData, setMsgData] = useState<CreateMessageRequest[] | []>([]);
	const [selectUser, setSelectUser] = useState({
		img: getImage('user.png'),
		username: 'Ngọc Văn',
	});

	const userId = (user as IUser).id || 0;
	const rid = `${(user as IUser).id}-${partnerId}`;
	console.log('rid==>', rid);

	const { res, isLoading } = FetchApiGetAllUsersChatMessageTo(userId);
	const { res: msgDatas, isLoading: loadingMsg } = FetchApiGetRidMessages(rid);

	const handleChangeMsg = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMsg(e.target.value);
	};

	const handleToggleShowUser = () => {
		setShowUser(!showUser);
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
						console.log('received==>', resData, msgData, resData.rid === rid, resData.rid, rid);
						if (resData.rid === rid) {
							const receivedMsg = msgData.filter((msg) => msg.id !== resData.id);
							setMsgData([...receivedMsg, resData]);
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

	const handleSendMessage = () => {
		console.log('send');
		if (stompClient !== null && stompClient.connected) {
			stompClient.send(
				'/send/message',
				{},
				JSON.stringify({
					rid,
					from: userId.toString(),
					to: partnerId,
					msg: msg,
					// createdAt: dayjs().format('YYYY-MM-DD hh:mm:ss'),
				}),
			);
			setMsg('');
		}
	};
	console.log(msgDatas, msgData);

	const newDatas = msgDatas.concat(msgData);

	return (
		<div className='w-full mb-20'>
			<div
				className='relative bg-white flex items-center justify-between border-0 border-b border-solid border-[#ccc] pb-3 cursor-pointer rounded px-3 pt-2'
				onClick={handleToggleShowUser}
			>
				<div className='flex items-center'>
					<img
						src={selectUser.img || getImage('user.png')}
						alt=''
						className='w-12 h-12 mr-4 rounded-[50%] object-cover select-none'
					/>
					<p>{selectUser.username}</p>
				</div>
				{showUser ? <CaretDownOutlined /> : <CaretUpOutlined />}
				{showUser && !!Object.keys(user).length && (
					<ChatMessage
						data={res}
						loading={isLoading}
						setSelectUser={setSelectUser}
					/>
				)}
			</div>
			<div className='mt-4 max-h-[460px] p-3 bg-white'>
				{loadingMsg ? (
					<Loading />
				) : (
					<BodyChatMessage
						handleChangeMsg={handleChangeMsg}
						handleSendMessage={handleSendMessage}
						msg={msg}
						msgData={newDatas}
						isLoading={false}
					/>
				)}
			</div>
		</div>
	);
};

export default ChatMessagePage;

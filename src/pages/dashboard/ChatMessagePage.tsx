import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Stomp } from '@stomp/stompjs';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SockJS from 'sockjs-client';

import { ChatMessages } from '@/components';
import BodyChatMessage from '@/components/ChatMessage/BodyChatMessage';
import { AuthContext } from '@/context/AuthProvider';
import {
	FetchApiGetAllUsersChatMessageTo,
	FetchApiGetRidMessages,
} from '@/hooks/fetchApiChatMessage';
import { toggleStatusRoom } from '@/infrastructure/chatMessageAction';
import { CreateMessageRequest, ISeemModal } from '@/types/components/ChatMessage/type';
import { IUser } from '@/types/pages/types';
import { getImage } from '@/utils/CustomImagePath';
import { getToast } from '@/utils/CustomToast';

type Props = {};

let stompClient: any = null;

const ChatMessagePage = (props: Props) => {
	const { partnerId, rid } = useParams();
	const [showUser, setShowUser] = useState(false);
	const [msg, setMsg] = useState('');
	const { user } = useContext(AuthContext);
	const navigation = useNavigate();
	const [msgData, setMsgData] = useState<CreateMessageRequest[] | []>([]);
	const [selectUser, setSelectUser] = useState({
		img: getImage('user.png'),
		username: 'Messages',
		isRep: false,
		rid: '',
	});
	const userId = (user as IUser).id || 0;

	const { res, isLoading } = FetchApiGetAllUsersChatMessageTo(userId);
	const { res: msgDatas, isLoading: loadingMsg } = FetchApiGetRidMessages(rid || '');

	const handleChangeMsg = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMsg(e.target.value);
	};

	const handleToggleShowUser = () => {
		setShowUser(!showUser);
	};

	const { mutate } = useMutation<AxiosResponse<ISeemModal, any>, AxiosError, ISeemModal, unknown>({
		mutationFn: (formData: ISeemModal) => {
			const res = toggleStatusRoom(formData);
			return res;
		},
	});

	// websocket
	useEffect(() => {
		const socket = new SockJS('http://localhost:8080/websocket');
		stompClient = Stomp.over(() => socket);

		if (stompClient !== null) {
			stompClient.connect(
				{},
				() => {
					stompClient.subscribe('/receive/message', (response: any) => {
						const resData: CreateMessageRequest = JSON.parse(response.body);
						if (resData.rid === rid) {
							console.log('received==>', resData, msgData);
							const filterData = msgData.filter((m) => m.id !== resData.id);
							setMsgData([...filterData, resData]);
						} else {
							mutate(
								{ rid: resData.rid, isRep: true },
								{
									onError: (res: AxiosError) => {
										getToast(res.response?.data as string, 'error');
									},
									onSuccess: (res) => {},
								},
							);
						}
					});
				},
				onError,
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rid, msgData]);
	const onError = (err: any) => {
		console.log(err);
	};

	const handleSendMessage = () => {
		if (!rid || !partnerId) {
			return;
		}
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
	useEffect(() => {
		if (!msgDatas.length) {
			return;
		}
		setMsgData(msgDatas);
	}, [msgDatas]);

	useEffect(() => {
		if (selectUser.username === 'Messages') {
			navigation('/dash-board/chat-message');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log('rid==>', rid, msgData);

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
					<ChatMessages
						data={res}
						loading={isLoading}
						setSelectUser={setSelectUser}
					/>
				)}
			</div>
			<div className='mt-4 max-h-[460px] p-3 bg-white'>
				{!!rid && !!partnerId && (
					<BodyChatMessage
						handleChangeMsg={handleChangeMsg}
						handleSendMessage={handleSendMessage}
						msg={msg}
						msgData={msgData}
						isLoading={loadingMsg && !!rid}
					/>
				)}
			</div>
		</div>
	);
};

export default ChatMessagePage;

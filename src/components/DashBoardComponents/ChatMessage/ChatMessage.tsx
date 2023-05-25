import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { FetchApiGetStatusRoom } from '@/hooks/fetchApiChatMessage';
import { toggleStatusRoom } from '@/infrastructure/chatMessageAction';
import { IChatMessageUserInfo, ISeemModal } from '@/types/components/ChatMessage/type';
import { getImage } from '@/utils/CustomImagePath';
import { getToast } from '@/utils/CustomToast';

type Props = {
	d: IChatMessageUserInfo;
	rid: string;
	setSelectUser: (value: { img: string; username: string; isRep: boolean; rid: string }) => void;
};

const ChatMessage: FC<Props> = ({ d, rid, setSelectUser }) => {
	const { res } = FetchApiGetStatusRoom(rid);
	const { mutate } = useMutation<AxiosResponse<ISeemModal, any>, AxiosError, ISeemModal, unknown>({
		mutationFn: (formData: ISeemModal) => {
			const res = toggleStatusRoom(formData);
			return res;
		},
	});
	const handleSelect = () => {
		console.log('select');
		if (!rid) {
			return;
		}
		mutate(
			{ rid: rid, isRep: false },
			{
				onError: (res: AxiosError) => {
					getToast(res.response?.data as string, 'error');
				},
				onSuccess: (res) => {},
			},
		);
		setSelectUser({
			img: d.img,
			username: d.username,
			isRep: !!res?.isRep,
			rid,
		});
	};

	return (
		<Link
			onClick={handleSelect}
			key={d.id}
			to={`/dash-board/chat-message/${d.id}/${rid}`}
			className='flex items-center hover:bg-[#e5e5e5c7] p-3 relative'
		>
			<img
				src={d.img || getImage('user.png')}
				alt=''
				className='w-9 h-9 rounded-[50%] object-cover mr-4'
			/>
			<p>{d.username}</p>
			{res && res?.isRep && (
				<span className='absolute bg-red-600 right-[10px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-[50%] flex items-center justify-center text-white'>
					!
				</span>
			)}
		</Link>
	);
};

export default ChatMessage;

import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { FetchApiGetStatusRoom } from '@/hooks/fetchApiChatMessage';
import { IChatMessageUserInfo } from '@/types/components/ChatMessage/type';
import { getImage } from '@/utils/CustomImagePath';

type Props = {
	d: IChatMessageUserInfo;
	rid: string;
	setSelectUser: (value: { img: string; username: string; isRep: boolean; rid: string }) => void;
};

const ChatMessage: FC<Props> = ({ d, rid, setSelectUser }) => {
	console.log('rid==>', rid);
	const { res } = FetchApiGetStatusRoom(rid);

	return (
		<Link
			onClick={() =>
				setSelectUser({
					img: d.img,
					username: d.username,
					isRep: !!res?.isRep,
					rid,
				})
			}
			key={d.id}
			to={`/dash-board/chat-message/${d.id}/${rid}`}
			className='flex items-center mb-2  hover:bg-[#e5e5e5c7] p-3'
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

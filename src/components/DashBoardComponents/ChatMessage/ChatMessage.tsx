import classNames from 'classnames/bind';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './chat-message.module.scss';

import SkeletonTypography from '@/components/helpers/SkeletonTypography/SkeletonTypography';
import { IChatMessageUserInfo } from '@/types/components/ChatMessage/type';
import { getImage } from '@/utils/CustomImagePath';

type Props = {
	loading: boolean;
	data: IChatMessageUserInfo[] | [];
	setSelectUser: (value: { img: string; username: string }) => void;
};

const cx = classNames.bind(styles);

const ChatMessage: FC<Props> = ({ loading, data, setSelectUser }) => {
	return (
		<div
			className={`${cx(
				'chat_message-container',
			)} absolute w-full left-0 top-[70px] bg-white mb-10 shadow-lg`}
		>
			{loading ? (
				<SkeletonTypography
					styles='w-full p-2'
					loading
				/>
			) : (
				<>
					{!!data.length &&
						data.map((d) => (
							<Link
								onClick={() =>
									setSelectUser({
										img: d.img,
										username: d.username,
									})
								}
								key={d.id}
								to={`/dash-board/chat-message/${d.id}`}
								className='flex items-center mb-2  hover:bg-[#e5e5e5c7] p-3'
							>
								<img
									src={d.img || getImage('user.png')}
									alt=''
									className='w-9 h-9 rounded-[50%] object-cover mr-4'
								/>
								<p>{d.username}</p>
							</Link>
						))}
				</>
			)}
		</div>
	);
};

export default ChatMessage;

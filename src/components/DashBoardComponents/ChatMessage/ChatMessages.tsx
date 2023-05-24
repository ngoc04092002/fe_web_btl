import classNames from 'classnames/bind';
import React, { FC, useContext } from 'react';

import ChatMessage from './ChatMessage';
import styles from './chat-message.module.scss';

import SkeletonTypography from '@/components/helpers/SkeletonTypography/SkeletonTypography';
import { AuthContext } from '@/context/AuthProvider';
import { IChatMessageUserInfo } from '@/types/components/ChatMessage/type';
import { IUser } from '@/types/pages/types';

type Props = {
	loading: boolean;
	data: IChatMessageUserInfo[] | [];
	setSelectUser: (value: { img: string; username: string; isRep: boolean; rid: string }) => void;
};

const cx = classNames.bind(styles);

const ChatMessages: FC<Props> = ({ loading, data, setSelectUser }) => {
	const { user } = useContext(AuthContext);
	if (!Object.keys(user).length) {
		return <></>;
	}
	const userId = (user as IUser).id;
	return (
		<div
			className={`${cx(
				'chat_message-container',
			)} absolute w-full z-[2] left-0 top-[70px] bg-white mb-10 shadow-lg`}
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
							<ChatMessage
								key={d.id}
								d={d}
								rid={`${userId}-${d.id}`}
								setSelectUser={setSelectUser}
							/>
						))}
				</>
			)}
		</div>
	);
};

export default ChatMessages;

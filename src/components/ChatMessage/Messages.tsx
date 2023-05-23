import dayjs from 'dayjs';
import React, { FC, useContext } from 'react';

import Message from './Message';

import { AuthContext } from '@/context/AuthProvider';
import { CreateMessageRequest } from '@/types/components/ChatMessage/type';
import { IUser } from '@/types/pages/types';

type Props = { data: CreateMessageRequest[] };

const Messages: FC<Props> = ({ data }) => {
	const { user } = useContext(AuthContext);
	const userId = (user as IUser)?.id || 0;
	return (
		<div>
			<div className='mt-3 mb-10'>
				<h1 className='text-center text-sm mb-2'>{dayjs().format('DD/MM/YYYY')}</h1>
				<div>
					{!!data &&
						data.map((d, index) => (
							<Message
								key={index}
								msg={d.msg}
								isOwern={userId.toString() === d.from}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default Messages;

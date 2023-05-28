import dayjs from 'dayjs';
import React, { FC, useContext } from 'react';

import Message from './Message';

import { AuthContext } from '@/context/AuthProvider';
import { IMessages } from '@/types/components/ChatMessage/type';
import { IUser } from '@/types/pages/types';

const Messages: FC<IMessages> = ({ data, handleDeleteMessage }) => {
	const { user } = useContext(AuthContext);
	const userId = (user as IUser)?.id || 0;
	return (
		<div>
			<div className='mt-3 mb-10'>
				<h1 className='text-center text-sm mb-2'>{dayjs().format('DD/MM/YYYY')}</h1>
				<div>
					{!!data &&
						data.map((d) => (
							<Message
								data={d}
								key={d?.id}
								msg={d.msg}
								isOwern={userId.toString() === d.from}
								handleDeleteMessage={handleDeleteMessage}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default Messages;

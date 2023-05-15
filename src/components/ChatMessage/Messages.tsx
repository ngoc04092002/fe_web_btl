import dayjs from 'dayjs';
import React, { FC, useContext } from 'react';

import Message from './Message';

import { AuthContext } from '@/context/AuthProvider';
import { MessageResponse } from '@/types/components/ChatMessage/type';
import { IUser } from '@/types/pages/types';

type Props = { data: MessageResponse[] };

const Messages: FC<Props> = ({ data }) => {
	const { user } = useContext(AuthContext);
	console.log(data);
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
								isOwern={(user as IUser)?.username === d.from}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default Messages;

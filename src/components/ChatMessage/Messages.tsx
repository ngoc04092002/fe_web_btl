import dayjs from 'dayjs';
import React, { FC } from 'react';

import Message from './Message';

import { MessageResponse } from '@/types/components/ChatMessage/type';

type Props = { data: MessageResponse[] };

const Messages: FC<Props> = ({ data }) => {
	console.log(data);
	return (
		<div>
			<div className='mt-3 mb-10'>
				<h1 className='text-center text-sm mb-2'>{dayjs().format('DD/MM/YYYY')}</h1>
				<div>
					<Message />
					<Message isOwern={true} />
				</div>
			</div>
		</div>
	);
};

export default Messages;

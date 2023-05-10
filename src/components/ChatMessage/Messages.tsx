import dayjs from 'dayjs';
import React from 'react';

import Message from './Message';

type Props = {};

const Messages = (props: Props) => {
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

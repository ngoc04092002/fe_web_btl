import { ReconciliationOutlined } from '@ant-design/icons';
import React from 'react';

import { Orders } from '@/components';
import ChatMessage from '@/components/ChatMessage/ChatMessage';

type Props = {};

const LaterView = (props: Props) => {
	return (
		<>
			<div className='py-10 px-12'>
				<div className='color-main text-center flex items-center justify-center mb-4'>
					<ReconciliationOutlined className='text-2xl mr-2 ' />
					<h1 className='text-2xl font-bold'>Danh sách bài lưu</h1>
				</div>
				<Orders />
			</div>
			<ChatMessage />
		</>
	);
};

export default LaterView;

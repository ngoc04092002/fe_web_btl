import { ReconciliationOutlined } from '@ant-design/icons';
import React from 'react';

import { Orders } from '@/components';
import HeadTitle from '@/hooks/Head';

type Props = {};

const LaterView = (props: Props) => {
	HeadTitle('Later View');
	return (
		<div className='py-10 px-12'>
			<div className='color-main text-center flex items-center justify-center mb-4'>
				<ReconciliationOutlined className='text-2xl mr-2 ' />
				<h1 className='text-2xl font-bold'>Danh sách bài lưu</h1>
			</div>
			<Orders />
		</div>
	);
};

export default LaterView;

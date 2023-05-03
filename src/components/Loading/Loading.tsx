import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';
type Props = {
	styles?: string;
};
const Loading: React.FC<Props> = ({ styles }) => {
	return (
		<div className='w-full text-center'>
			<LoadingOutlined className={`${styles} text-4xl text-white`} />
		</div>
	);
};

export default Loading;

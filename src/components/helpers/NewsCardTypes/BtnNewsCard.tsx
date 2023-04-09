import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { FC } from 'react';

type Props = {};

const BtnNewsCard: FC<Props> = () => {
	return (
		<div className='mt-4'>
			<button className='news-btn_prev mr-3 disabled_click'>
				<LeftOutlined title='prev' />
			</button>
			<button className='news-btn_next'>
				<RightOutlined title='next' />
			</button>
		</div>
	);
};

export default BtnNewsCard;

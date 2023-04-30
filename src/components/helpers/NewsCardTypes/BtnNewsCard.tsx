import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { FC } from 'react';

type Props = {
	noMoreData: boolean;
	setPage: (value: number) => void;
	page: number;
};

const BtnNewsCard: FC<Props> = ({ setPage, page, noMoreData }) => {
	return (
		<div className='mt-4'>
			<button
				className={`news-btn_prev mr-3 ${page <= 0 ? 'disabled_click' : ''}`}
				disabled={page <= 0}
				onClick={() => setPage(page - 1)}
			>
				<LeftOutlined title='prev' />
			</button>
			<button
				className={`news-btn_next ${noMoreData ? 'disabled_click' : ''}`}
				onClick={() => setPage(page + 1)}
				disabled={noMoreData}
			>
				<RightOutlined title='next' />
			</button>
		</div>
	);
};

export default BtnNewsCard;

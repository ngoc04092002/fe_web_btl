import { StarFilled, StarOutlined } from '@ant-design/icons';
import React, { FC, useState } from 'react';

type Props = {};

const Evaluate: FC<Props> = () => {
	const startFive = Array(5).fill(<StarOutlined className='text-[30px] opacity-50' />);
	const [selectStar, setSelectStar] = useState(0);
	const handleSelectStar = (value: number) => {
		setSelectStar(value);
	};
	return (
		<div className='flex items-center mt-8'>
			<ul className='flex items-center'>
				{startFive.map((st, i) => (
					<li
						onClick={() => handleSelectStar(i + 1)}
						key={i}
						className={`${
							selectStar >= i + 1 ? 'text-[yellow]' : ''
						} mr-2 !ml-0 list-none cursor-pointer hover:text-[yellow] transition-none duration-75`}
					>
						{selectStar >= i + 1 ? <StarFilled className='text-[30px] text-[yellow]' /> : st}
					</li>
				))}
			</ul>
			<p className='ml-4 opacity-50 text-lg'>Đánh giá bài viết</p>
		</div>
	);
};

export default Evaluate;

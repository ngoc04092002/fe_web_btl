import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import React, { FC, useState } from 'react';

import CardUserInfo from './CardUserInfo';

type Props = {};

const CardUserInfoContainer: FC<Props> = () => {
	const [saveRoom, setSaveRoom] = useState(false);

	const toggleSaveRoom = () => {
		setSaveRoom(!saveRoom);
	};
	return (
		<div>
			<CardUserInfo />
			<div
				onClick={toggleSaveRoom}
				className='select-none w-fit flex items-baseline cursor-pointer border border-solid border-[#ccc] rounded-lg p-2 mt-4'
			>
				{saveRoom ? (
					<HeartFilled className='text-[#eb3264] text-xl mr-3' />
				) : (
					<HeartOutlined className='text-[#eb3264] text-xl mr-3' />
				)}

				<span className='font-bold text-sm'>Lưu tin</span>
			</div>
		</div>
	);
};

export default CardUserInfoContainer;

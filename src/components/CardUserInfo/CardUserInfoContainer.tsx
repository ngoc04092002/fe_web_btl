import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import React, { FC, useState } from 'react';
import { FacebookIcon } from 'react-share';

import CardUserInfo from './CardUserInfo';

import { IUser } from '@/types/pages/types';

type Props = {
	userData: IUser | undefined;
};

const CardUserInfoContainer: FC<Props> = ({ userData }) => {
	const [saveRoom, setSaveRoom] = useState(false);

	const toggleSaveRoom = () => {
		setSaveRoom(!saveRoom);
	};
	return (
		<div>
			<CardUserInfo userData={userData} />
			<div className='flex items-center mt-4'>
				<div
					onClick={toggleSaveRoom}
					className='select-none mr-4 w-fit flex items-baseline cursor-pointer border border-solid border-[#ccc] rounded-lg p-2'
				>
					{saveRoom ? (
						<HeartFilled className='text-[#eb3264] text-xl mr-3' />
					) : (
						<HeartOutlined className='text-[#eb3264] text-xl mr-3' />
					)}

					<span className='font-bold text-sm'>Lưu tin</span>
				</div>
				<a
					href='https://www.facebook.com/profile.php?id=100009696701104'
					target='_blank'
					rel='noreferrer'
				>
					<FacebookIcon className='rounded-full w-12 h-12' />
				</a>
			</div>
		</div>
	);
};

export default CardUserInfoContainer;

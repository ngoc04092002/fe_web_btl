import React, { FC, useContext } from 'react';

import PopupSendMail from '../CardUserInfo/PopupSendMail';

import RoomItem from './RoomItem';

import { BackDropContext } from '@/pages/Home';

type Props = {};

const RoomItemContainer: FC<Props> = () => {
	const { showBackDrop } = useContext(BackDropContext);

	return (
		<div className='py-8'>
			<RoomItem />
			{showBackDrop && (
				<PopupSendMail styles='animate-[wiggle_1s_ease-in-out] absolute z-[10000] -translate-x-1/2 w-[414px] top-0 min-h-[360px] left-1/2 bg-white p-3' />
			)}
		</div>
	);
};

export default RoomItemContainer;

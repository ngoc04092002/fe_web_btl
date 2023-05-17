import React, { FC, useContext } from 'react';
import { useParams } from 'react-router-dom';

import PopupSendMail from '../CardUserInfo/PopupSendMail';
import ChatMessage from '../ChatMessage';

import RoomDetail from './RoomDetail';

import { AuthContext } from '@/context/AuthProvider';
import { FetchApiGetPostRoomById } from '@/hooks/fetchApiPostRoom';
import { BackDropContext } from '@/pages/Home';
import { IRoomInfo } from '@/types/components/type';
import { IUser } from '@/types/pages/types';

type Props = {};

const dataHotNewsRent: IRoomInfo[] = [
	{
		src: 'https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg',
		des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt quia quaerat consectetur consequuntur sapiente recusandae illum quibusdam tempora aliquamcommodi doloremque facere, sed nemo corporis. Vero ex alias quos.',
		bathRoom: '2',
		bedRoom: '1',
		acreage: '70',
		price: 'Từ 3 tỷ 55 triệu',
	},
	{
		src: 'https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg',
		des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt quia quaerat consectetur consequuntur sapiente recusandae illum quibusdam tempora aliquamcommodi doloremque facere, sed nemo corporis. Vero ex alias quos.',
		bathRoom: '2',
		bedRoom: '1',
		acreage: '70',
		price: 'Từ 3 tỷ 55 triệu',
	},
	{
		src: 'https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg',
		des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt quia quaerat consectetur consequuntur sapiente recusandae illum quibusdam tempora aliquamcommodi doloremque facere, sed nemo corporis. Vero ex alias quos.',
		bathRoom: '2',
		bedRoom: '1',
		acreage: '70',
		price: 'Từ 3 tỷ 55 triệu',
	},
	{
		src: 'https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg',
		des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt quia quaerat consectetur consequuntur sapiente recusandae illum quibusdam tempora aliquamcommodi doloremque facere, sed nemo corporis. Vero ex alias quos.',
		bathRoom: '2',
		bedRoom: '1',
		acreage: '70',
		price: 'Từ 3 tỷ 55 triệu',
	},
	{
		src: 'https://cloud.mogi.vn/project/thumb-detail/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg',
		des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt quia quaerat consectetur consequuntur sapiente recusandae illum quibusdam tempora aliquamcommodi doloremque facere, sed nemo corporis. Vero ex alias quos.',
		bathRoom: '2',
		bedRoom: '1',
		acreage: '70',
		price: 'Từ 3 tỷ 55 triệu',
	},
];

const RoomDetailContainer: FC<Props> = () => {
	const { user } = useContext(AuthContext);
	const { id } = useParams();
	const { showBackDrop } = useContext(BackDropContext);

	const { res, isLoading } = FetchApiGetPostRoomById(+(id as string));

	return (
		<>
			<div className='py-8'>
				<RoomDetail
					dataHotNewsRent={dataHotNewsRent}
					res={res}
					isLoading={isLoading}
				/>
				{showBackDrop && (
					<PopupSendMail
						userId={res?.clientEntityPostRoom?.id}
						styles='animate-[wiggle_1s_ease-in-out] absolute z-[10000] -translate-x-1/2 w-[414px] top-0 min-h-[360px] left-1/2 bg-white p-3'
					/>
				)}
			</div>
			{!isLoading &&
				!!Object.keys(user).length &&
				res?.clientEntityPostRoom?.id !== (user as IUser).id && (
					<ChatMessage postUser={res?.clientEntityPostRoom} />
				)}
		</>
	);
};

export default RoomDetailContainer;

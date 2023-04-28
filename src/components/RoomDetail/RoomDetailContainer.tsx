import React, { FC, useContext } from 'react';

import PopupSendMail from '../CardUserInfo/PopupSendMail';

import RoomDetail from './RoomDetail';

import { BackDropContext } from '@/pages/Home';
import { IRoomInfo } from '@/types/components/type';

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
	const { showBackDrop } = useContext(BackDropContext);

	return (
		<div className='py-8'>
			<RoomDetail dataHotNewsRent={dataHotNewsRent} />
			{showBackDrop && (
				<PopupSendMail styles='animate-[wiggle_1s_ease-in-out] absolute z-[10000] -translate-x-1/2 w-[414px] top-0 min-h-[360px] left-1/2 bg-white p-3' />
			)}
		</div>
	);
};

export default RoomDetailContainer;

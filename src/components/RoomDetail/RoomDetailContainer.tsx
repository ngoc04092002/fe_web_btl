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
		des: 'Cần bán gấpĐường Lê Văn Lương, Phường Tân Phong, Quận 7, 1tỷ8',
		bathRoom: '2',
		bedRoom: '1',
		acreage: '70',
		price: '3 tỷ 55 triệu',
	},
	{
		src: 'https://cloud.mogi.vn/images/2023/05/18/171/652de8b09e234d17baf5266aeb8ebd42.jpg',
		des: 'Vỡ nợ bán 65m2 nhà đg Bùi Văn Ba Q7 giá chỉ 1 tỷ 850 SHR bao sang tên',
		bathRoom: '3',
		bedRoom: '3',
		acreage: '65',
		price: '1 tỷ 850 triệu',
	},
	{
		src: 'https://cloud.mogi.vn/images/2023/06/07/125/5daefdac5ac243da960f63033feffc67.jpg',
		des: 'Chủ nhà cần bán gấp, đường Số 6, P. Tân Phong, Quận 7, TP. HCM giá rẻ',
		bathRoom: '2',
		bedRoom: '1',
		acreage: '70',
		price: '3 tỷ',
	},
	{
		src: 'https://cloud.mogi.vn/images/2023/05/27/587/e241b5a488594ce3a575668cde673807.jpg',
		des: 'Công ty vỡ nợ cần bán gấp nhà Bùi Văn Ba, Quận 7, pháp lý đầy đủ',
		bathRoom: '4',
		bedRoom: '4',
		acreage: '64',
		price: '720 triệu',
	},
	{
		src: 'https://cloud.mogi.vn/images/2023/06/06/171/d5c9829ffaaa4896a15485ce1465dc15.jpg',
		des: 'Bán Nhà ở Đ. LÊ ĐỨC THỌ GÒ VẤP 65M2 Gía Chỉ 1 TỶ 720 TR SHR',
		bathRoom: '2',
		bedRoom: '1',
		acreage: '70',
		price: '1 tỷ 720 triệu',
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

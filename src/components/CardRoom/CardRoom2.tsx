import React, { FC, useContext } from 'react';

import DialogOrder from '../Orders/DialogOrder';
import ButtonWrapper from '../helpers/ButtonWrapper/ButtonWrapper';

import { BackDropContext } from '@/pages/Home';

type Props = {
	styles?: string;
	room?: any;
	setRoomData?: React.Dispatch<any> | undefined;
};

const CardRoom2: FC<Props> = ({ room, styles, setRoomData }) => {
	const { showBackDrop, toggleBackDrop } = useContext(BackDropContext);
	const handleDelete = () => {
		const roomLocal = localStorage.getItem('rooms');
		let rooms = roomLocal ? JSON.parse(roomLocal) : [];
		rooms = rooms.filter((r: { id: number }) => r.id !== room.id);
		if (setRoomData) {
			setRoomData(rooms);
		}
		localStorage.setItem('rooms', JSON.stringify(rooms));
	};

	const handleOrder = () => {
		toggleBackDrop();
	};

	return (
		<>
			<div
				className={`flex items-center sm:flex-row flex-col justify-between shadow-006 p-3 rounded-md mb-4 ${styles}`}
			>
				<a
					href={`room-item/${room.id}`}
					className='flex items-center'
				>
					<div>
						<img
							src={room.src}
							alt=''
							className='w-72 h-56'
						/>
					</div>
					<div className='w-[80%] px-2 self-start'>
						<h1 className='font-bold text-lg vertical-1 break-all'>{room.title}</h1>
						<p className='text-sm'>{room.des}</p>
						<ul className='my-2'>
							<li>
								<span className='font-bold'>Số điện thoại:</span> <span>{room.phone}</span>
							</li>
							<li>
								<span className='font-bold'>Kiểu phòng:</span> <span>{room.roomType}</span>
							</li>
							<li>
								<span className='font-bold'>Giá:</span> <span>{room.price}</span>
							</li>
						</ul>
						<div className='flex items-center'>
							<span className='font-bold mr-4'>
								{room.acreage} m<sub className='align-super'>2</sub>
							</span>
							<span className='mr-4'>{room.bathroom} WC</span>
							<span>{room.bedRoom} VP</span>
						</div>
					</div>
				</a>
				<div className='sm:w-fit w-full flex flex-col'>
					<ButtonWrapper
						onClick={handleDelete}
						styles='!mb-4 sm:mt-0 mt-6 sm:!w-auto !w-[100%]'
					>
						Xoá
					</ButtonWrapper>
					<ButtonWrapper
						onClick={handleOrder}
						styles='!mb-0 mt-0 mt-6 sm:!w-auto !w-[100%]'
					>
						Đặt
					</ButtonWrapper>
				</div>
			</div>
			{showBackDrop && setRoomData && (
				<DialogOrder
					roomData={room}
					resetData={setRoomData}
				/>
			)}
		</>
	);
};

export default CardRoom2;

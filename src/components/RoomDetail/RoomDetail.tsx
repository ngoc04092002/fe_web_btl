import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CardRoom1 } from '../CardRoom';
// eslint-disable-next-line import/order
import CardUserInfo from '../CardUserInfo';

import './room-detail.scss';
import Loading from '../Loading/Loading';

import { i18PostRoom } from '@/constants/FilterRoom';
import { FetchApiGetPostRoomIds } from '@/hooks/fetchApiPostRoom';
import { IRoomInfo } from '@/types/components/type';
import { IPostRoomResponse, keysI18PostRoom } from '@/types/pages/IDashBoard';
import { convertToVND } from '@/utils/CustomCurrency';

type Props = {
	dataHotNewsRent: IRoomInfo[] | [];
	res: IPostRoomResponse | undefined;
	isLoading: boolean;
};

const RoomItem: FC<Props> = ({ dataHotNewsRent, res, isLoading }) => {
	const { id } = useParams();
	const { res: ids } = FetchApiGetPostRoomIds();
	if (isLoading || !res) {
		return <Loading styles='!text-[#ccc]' />;
	}
	const index = ids.indexOf(id ? +id : 0);
	const nextId = index !== -1 && index < ids.length - 1 ? ids[index + 1] : ids[0];
	const keys = Object.keys(res);

	return (
		<div className='room_item-container mx-4 lg:px-4 xl:px-24'>
			<div className='text-end mr-4'>
				<a
					href='/search-room'
					className='room_item-return mr-4 py-2 pr-4 pl-2'
				>
					Về danh sách
				</a>
				<a
					href={`/room-item/${nextId}`}
					className='room_item-next py-2 pl-4 pr-2'
				>
					Tin sau
				</a>
			</div>
			<div className='grid grid-cols-3 gap-4 mt-8'>
				<div className='room_item-swiper cus-screen:col-span-2 col-span-3 relative'>
					<div className='room_item-sw1'>
						<Swiper
							pagination={{
								type: 'fraction',
							}}
							navigation={true}
							modules={[Pagination, Navigation]}
							className='mySwiper'
						>
							{res &&
								res.src?.length &&
								res.src.map((r, index) => (
									<SwiperSlide key={index}>
										{r?.src.includes('mp4') ? (
											<video
												src={r?.src}
												controls
											/>
										) : (
											<img
												src={r?.src}
												alt=''
											/>
										)}
									</SwiperSlide>
								))}
						</Swiper>
					</div>
					<div className=' mt-4'>
						<h1>{res?.title}</h1>
						<p className='text-[#3c4146] mt-1 text-base'>{res?.address}</p>
						<p className='color-main text-2xl font-bold mt-2'>{convertToVND(+res?.price)}</p>
					</div>
					<div className='mt-4'>
						<h1>Thông tin chính</h1>
						<div className='p-4 bg-[#e9e9e93d]'>
							<ul className='grid grid-cols-2 gap-4 pl-7 mt-2'>
								<li>
									<span>Diện tích phòng</span>
									<span className='float-right mr-10'>
										{res.acreage} m<sub className='align-super'>2</sub>
									</span>
								</li>
								{keys.map((k) => {
									if (k in i18PostRoom) {
										return (
											<li key={k}>
												<span>{i18PostRoom[k]}</span>
												<span className='float-right mr-10'>
													{res[k as keysI18PostRoom]}
													{k === 'sale' ? '%' : ''}
												</span>
											</li>
										);
									}
									return null;
								})}
							</ul>
						</div>
					</div>
					<div className='mt-10'>
						<h1>Giới thiệu</h1>
						<p className='text-[#3c4146] text-base mt-4 leading-8'>{res.des}</p>
					</div>
					<hr className='h-[1px] bg-[#ccc] mt-8' />
				</div>
				<CardUserInfo
					userData={res.clientEntityPostRoom}
					roomData={res}
				/>
				<div className='room_item-sw2 col-span-3 mt-10'>
					<h1>Hình ảnh liên quan</h1>
					<Swiper
						slidesPerView={4}
						spaceBetween={20}
						navigation={true}
						modules={[Navigation]}
						className='mySwiper2'
					>
						{!!dataHotNewsRent.length &&
							dataHotNewsRent.map((d, index) => (
								<SwiperSlide key={index}>
									<CardRoom1
										d={d}
										styleInfo='border border-t-0 border-solid border-[#e6ecf0]'
									/>
								</SwiperSlide>
							))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default RoomItem;

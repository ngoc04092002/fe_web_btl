import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import CardUserInfo from '../CardUserInfo';
import './room-item.scss';
import GoogleMapRoomItem from '../GoogleMapRoomItem';

type Props = {};

const RoomItem: FC<Props> = () => {
	const { id } = useParams();

	console.log(id);
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
					href='/room-item'
					className='room_item-next py-2 pl-4 pr-2'
				>
					Tin sau
				</a>
			</div>
			<div className='grid grid-cols-3 gap-4 mt-8'>
				<div className='room_item-swiper cus-screen:col-span-2 col-span-3 relative'>
					<Swiper
						pagination={{
							type: 'fraction',
						}}
						navigation={true}
						modules={[Pagination, Navigation]}
						className='mySwiper'
					>
						<SwiperSlide>
							<img
								src='https://cloud.mogi.vn/images/2022/10/24/094/f830ea1cc9f04a47bdcbd5db992cee5c.jpg'
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='https://marketingaccesspass.com/wp-content/uploads/2015/10/Podcast-Website-Design-Background-Image.jpg'
								alt=''
							/>
						</SwiperSlide>
					</Swiper>
					<div className=' mt-4'>
						<h1>Cho thuê nhà khu biệt thự Làng Hoa Cây Trâm P.9 Gò Vấp 1 lầu</h1>
						<p className='text-[#3c4146] mt-1 text-base'>Cây Trâm, Phường 9, Quận Gò Vấp, TPHCM</p>
						<p className='color-main text-2xl font-bold mt-2'>9 triệu 500 nghìn</p>
					</div>
					<div className='mt-4'>
						<h1>Thông tin chính</h1>
						<ul className='grid grid-cols-2 gap-4 pl-7 mt-2'>
							<li className='text-[#657786]'>
								<span>Diện tích phòng</span>
								<span className='float-right mr-10'>
									104 m<sub className='align-super'>2</sub>
								</span>
							</li>
							<li>
								<span>Kiểu phòng</span>
								<span className='float-right mr-10'>Đơn</span>
							</li>
							<li>
								<span>Số điện thoại</span>
								<span className='float-right mr-10'>0338787233</span>
							</li>
						</ul>
					</div>
					<div className='mt-10'>
						<h1>Giới thiệu</h1>
						<p className='text-[#3c4146] text-base mt-4 leading-8'>
							Cho thuê nhà nguyên căn đường Cây Trâm P.9 Gò Vấp . Vị trí : nhà nằm gần công viên
							Làng Hoa . Giá : 10 triệu / tháng thương lượng DT: 4x13m . Nhà 1 trệt 1 lầu 2 phòng
							ngủ , 3 vệ sinh , phòng khách , bếp . Nhà mới sạch sẽ , hẻm xe tải đậu trước nhà , khu
							biệt thự làng hoa rất rộng rãi và thoáng mát , nhà rất phù hợp khách thuê ở gia đình ,
							bán hàng online , văn phòng công ty... Liên hệ : Lộc 0377007901
						</p>
					</div>
					<hr className='h-[1px] bg-[#ccc] mt-8' />
					<GoogleMapRoomItem />
				</div>
				<CardUserInfo />
			</div>
		</div>
	);
};

export default RoomItem;

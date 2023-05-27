import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import PaginationUtility from '../PaginationUtility';
import DailyNews from '../introNews/DailyNews';
import HotNews from '../introNews/HotNews';

import { IRoomInfo } from '@/types/components/type';

type Props = {};

const WrapperElm: FC<Props> = () => {
	const dataHotNews: IRoomInfo[] = [
		{
			src: 'https://cloud.mogi.vn/project/2021/04/08/429/bdc8b269914646b5b90bb9450b5585a2.jpg',
			title: 'Riviera Point',
			des: 'Nguyễn Văn Tưởng, Phường Tân Phú, Quận 7, TPHCM',
			price: 'Giá từ 2 tỷ 585 triệu',
		},
		{
			src: 'https://cloud.mogi.vn/project/2021/04/08/539/d98a14fda9a142dfad93f26c146d2f1a.jpg',
			title: 'Sunrise Riverside',
			des: 'Nguyễn Hữu Thọ, Xã Phước Kiển, Huyện Nhà Bè, TPHCM',
			price: 'Giá từ 2 tỷ 622 triệu',
		},
		{
			src: 'https://cloud.mogi.vn/project/2021/01/14/250/97398d384eaf4a4c9f791c2eb2fe9638.jpg',
			title: 'Saigon South Residences',
			des: 'Nguyễn Hữu Thọ, Xã Phước Kiển, Huyện Nhà Bè, TPHCM',
			price: 'Giá từ 2 tỷ 730 triệu',
		},
		{
			src: 'https://cloud.mogi.vn/project/2021/03/11/532/810d666f12cf4f05a9a28d83b0b730c6.jpg',
			title: 'Hà Đô Centrosa Garden',
			des: 'Đường 3 Tháng 2, Phường 12, Quận 10, TPHCM',
			price: 'Giá từ 3 tỷ 55 triệu',
		},
		{
			src: 'https://cloud.mogi.vn/project/2021/01/08/336/dd5e0eb228734e45a0b9b7faa24c6b31.jpg',
			title: 'Masteri Thảo Điền',
			des: 'Xa Lộ Hà Nội, Phường Thảo Điền, Quận 2 (TP. Thủ Đức), TPHCM',
			price: 'Giá từ 2 tỷ 475 triệu',
		},
	];

	const dataHotNewsRent: IRoomInfo[] = [
		{
			src: 'https://cloud.mogi.vn/images/2023/05/26/429/344b877ea1364004b11034ca2248d1c6.jpg',
			des: 'Studio Đầy Đủ Nội Thất, Cửa Sổ Siêu Lớn, Siêu Thoáng Mát ⚡️',
			bathRoom: '1',
			bedRoom: '1',
			acreage: '50',
			price: '5 triệu 500 nghìn',
		},
		{
			src: 'https://cloud.mogi.vn/images/2023/05/15/339/22ba0fbb75a542b4bf3b2ab1596ea8d9.jpg',
			des: '🏘 PTrọ mới xây Q12 - 1PN riêng - gần chợ cây sộp, ( chính chủ ).TB 🏘',
			bathRoom: '1',
			bedRoom: '1',
			acreage: '25',
			price: '3 triệu',
		},
		{
			src: 'https://cloud.mogi.vn/images/2021/11/01/349/50413f8aacd04f58b203a11230552399.jpg',
			des: 'Studio bếp tách, full nội thất, có máy giặt riêng, gần cầu Kênh Tẻ Q4',
			bathRoom: '1',
			bedRoom: '1',
			acreage: '30',
			price: '4 triệu 500 nghìn',
		},
		{
			src: 'https://cloud.mogi.vn/images/2023/05/25/407/1ea1c9ce277a404aa37263340de16d1c.jpg',
			des: '🏠Căn hộ dịch vụ Duplex phòng mới ngay trung tâm Tân Phú',
			bathRoom: '1',
			bedRoom: '1',
			acreage: '30',
			price: '3 triệu 200 nghìn',
		},
		{
			src: 'https://cloud.mogi.vn/images/2023/03/08/314/fd4b5a9140054d26b756dde9f17321f7.jpg',
			des: 'Hệ thống căn hộ Full NT có cửa sổ gần Lotte_Himlam_Trung Sơn_ĐH RMIT',
			bathRoom: '1',
			bedRoom: '1',
			acreage: '35',
			price: '4 triệu 700 nghìn',
		},
	];
	return (
		<div className='mt-12 pb-12'>
			<DailyNews />
			<HotNews
				title='Dự án nổi bật'
				dataNews={dataHotNews}
			/>
			<Link to='vourcher'>
				<picture>
					<source
						media='(min-width: 992px)'
						srcSet='https://cdn.mogi.vn/banner/2023/6_9fb051d4-9ddb-4d54-a730-8bc2d79bd33e.png'
					/>
					<source
						media='(min-width: 767px)'
						srcSet='https://cdn.mogi.vn/banner/2023/6_9fb051d4-9ddb-4d54-a730-8bc2d79bd33e.png'
					/>
					<source
						media='(min-width: 320px)'
						srcSet='https://cdn.mogi.vn/banner/2023/6_9fb051d4-9ddb-4d54-a730-8bc2d79bd33e.png'
					/>
					<img
						src='https://cdn.mogi.vn/banner/2023/6_9fb051d4-9ddb-4d54-a730-8bc2d79bd33e.png'
						alt='Flowers'
						style={{ height: 'auto', marginTop: '2rem' }}
					/>
				</picture>
			</Link>
			<HotNews
				title='Bất động sản cho thuê'
				dataNews={dataHotNewsRent}
			/>
			<PaginationUtility />
		</div>
	);
};

export default WrapperElm;

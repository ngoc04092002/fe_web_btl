import React from 'react';

import CommentActions from '../CommentActions';

import { getImage } from '@/utils/CustomImagePath';

type Props = {};

const QAPost = (props: Props) => {
	return (
		<div className='bg-white rounded p-3 mt-12'>
			<div className='flex items-center'>
				<div className='mr-2'>
					<img
						src={getImage('user.png')}
						alt=''
						className='w-10 h-10 rounded-full'
					/>
				</div>
				<div className='font-bold'>
					<h1 className='text-[#657786]'>Ngọc Văn</h1>
					<p className='text-sm'>
						<span className='color-main'>Đã đăng:</span>{' '}
						<span className='text-[#657786]'>12/09/2022 10:20 Am</span>
					</p>
				</div>
			</div>
			<div className='mt-3'>
				<p className='leading-[1.5] text-[#3C4146]'>
					1% Ace nhận đủ hỗ trợ giúp mình Bán Nhà Đường Tỉnh Lộ 10, quận Bình Tân Ngang 4 - dài 8
					Xây dựng 1 trệt - 1 lầu (2 Phòng ngủ - 2 nhà vệ sinh), sổ hồng riêng (hoàn công đủ) Hẻm
					trước nhà 5m Giá 2.08 tỷ (thương lượng chính chủ, giao nhà trống, nhận nhà ngay) Liên hệ
					xem nhà trước 15 phút - sđt 0932.180.116 (gặp Kim Anh)
				</p>
				<img
					src='https://buddhify.com/wp-content/uploads/2018/07/iStock-689785084.jpg'
					alt=''
					className='w-full h-[300px] mt-2'
				/>
			</div>
			<CommentActions />
		</div>
	);
};

export default QAPost;

import { RightOutlined } from '@ant-design/icons';
import React, { FC } from 'react';

import { NewsCardVertical } from '@/components/helpers/NewsCardTypes';

type Props = {};

const NewsSearchDetailRoom: FC<Props> = (props: Props) => {
	return (
		<div className='h-fit shadow-026 p-3 rounded-xl cus-screen:col-span-1 cus-screen:block hidden'>
			<div className='flex items-center justify-between mb-3'>
				<h1 className='text-[#262637] text-sm font-bold'>Tin tức hàng ngày</h1>
				<a
					className='text-[#036b75] text-sm flex items-start
        '
					href='/news'
				>
					<span>Xem thêm</span>
					<RightOutlined className='text-xs' />
				</a>
			</div>
			<NewsCardVertical
				styleDivInfo='w-[100%]'
				styles='mb-3'
				src='https://cdnnews.mogi.vn/news/wp-content/uploads/2022/12/19013435/mau-nha-ong-1-tang-dep-5x20-1-696x392.jpg'
				styleImg='!w-[14rem]'
				title='10+ Ý Tưởng Thiết Kế Mẫu Nhà Ống 1 Tầng Đẹp 5×20 Đơn Giản Mà Thời Thượng'
				dateTime='22/02/2023'
			/>
			<NewsCardVertical
				styleDivInfo='w-[100%]'
				styles='mb-3'
				src='https://cdnnews.mogi.vn/news/wp-content/uploads/2022/12/21102624/nha-cap-4-mai-bang-5x20-26-1-1-696x392.jpg'
				styleImg='!w-[14rem]'
				title='Tổng Hợp Mẫu Đơn Khiếu Nại Viết Tay Chuẩn Và Mới Nhất Năm 2023'
				dateTime='22/02/2023'
			/>
		</div>
	);
};

export default NewsSearchDetailRoom;

import React, { FC } from 'react';

import { NewsCardVertical } from '@/components/helpers/NewsCardTypes';
// import NotFoundItem from '@/components/helpers/NotFoundItem/NotFoundItem';

type Props = {
	value: string;
	handleSeachNews: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const NewsDetailSearch: FC<Props> = ({ value, handleSeachNews }) => {
	return (
		<div className='w-full md:w-3/5'>
			<div>
				<form
					action='http://localhost:2002/news/search'
					method='get'
					className='flex items-center'
				>
					<input
						name='s'
						value={value || ''}
						className='flex-1 input-none !border !border-solid h-10 p-2 !border-[#ccc] bg-transparent'
						onChange={handleSeachNews}
					/>
					<button className='bg-[#222222] h-10 font-medium text-[13px] text-white p-2'>
						Tìm kiếm
					</button>
				</form>
				<p className='mt-3 text-sm'>Nếu bạn không hài lòng về kết quả này, bạn có thể tìm kiếm.</p>
				<div className='mt-12'>
					{/* <NotFoundItem /> */}
					<NewsCardVertical
						styles='mb-4'
						src='https://cdnnews.mogi.vn/news/wp-content/uploads/2023/02/17150756/ty-la-con-gi-696x470.jpg'
						title='Tỵ Là Con Gì Trong 12 Con Giáp – Chi Tiết Vận Mệnh Của Người Tuổi Tỵ'
						des='
Từng năm sẽ tương ứng với từng con giáp và người thuộc các tuổi khác nhau sẽ mang những đặc điểm, số phận khác...'
						styleTitle='!text-xl'
						styleImg='!h-[11rem]'
						dateTime=' 07/04/2023'
					/>
					<NewsCardVertical
						styles='mb-4'
						src='https://cdnnews.mogi.vn/news/wp-content/uploads/2023/02/17150756/ty-la-con-gi-696x470.jpg'
						title='Tỵ Là Con Gì Trong 12 Con Giáp – Chi Tiết Vận Mệnh Của Người Tuổi Tỵ'
						des='
Từng năm sẽ tương ứng với từng con giáp và người thuộc các tuổi khác nhau sẽ mang những đặc điểm, số phận khác...'
						styleTitle='!text-xl'
						styleImg='!h-[11rem]'
						dateTime=' 07/04/2023'
					/>
				</div>
			</div>
		</div>
	);
};

export default NewsDetailSearch;

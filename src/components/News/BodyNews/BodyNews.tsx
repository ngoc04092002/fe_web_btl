import { DownOutlined } from '@ant-design/icons';
import React, { FC, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import './body-news.css';

import NewsDetail from '../components/NewsDetail/NewsDetail';
import NewsDetailSearch from '../components/NewsDetailSearch/NewsDetailSearch';
import NewsHome from '../components/NewsHome/NewsHome';
import NewsHomeHot from '../components/NewsHomeHot/NewsHomeHot';
import NewsPagination from '../components/NewsPagination/NewsPagination';

import { NewsCardSingle, NewsCardVertical } from '@/components/helpers/NewsCardTypes';
import TitleNews from '@/components/helpers/TitleNews/TItleNews';
import { desTopicNewsData, topicNewsDatai18 } from '@/constants/NewsConst';

type Props = {};
const PageSize = 1;

const BodyNews: FC<Props> = () => {
	const { topic, category } = useParams();
	const isSearch: boolean = topic === 'search';
	const isNewsHome: boolean = !topic && !category;
	const isNewsDetail: boolean = !!topic && !(topic in topicNewsDatai18);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchParams, setSearchParams] = useSearchParams();

	function createMarkup() {
		let html = 'Trang chủ';
		if (topic && topic in topicNewsDatai18) {
			html += ` > ${topicNewsDatai18[topic]}`;
		}
		if (category && category in topicNewsDatai18) {
			html += ` > ${topicNewsDatai18[category]}`;
		}
		return { __html: html };
	}

	const handleSeachNews = (e: React.ChangeEvent<HTMLInputElement>) => {
		searchParams.set('s', e.target.value);
		setSearchParams(searchParams);
	};

	return (
		<div className='flex flex-col items-center justify-between'>
			{isNewsHome && <NewsHome />}
			{!isNewsHome && (
				<div className='w-full items-start'>
					<h6 className='text-[#747474] text-xs leading-4 mb-4'>
						<span
							className='overflow-hidden text-ellipsis max-w-[28rem] whitespace-nowrap'
							dangerouslySetInnerHTML={createMarkup()}
						></span>
					</h6>
					<h1 className={`flex text-3xl font-bold ${isSearch ? '' : 'uppercase'} leading-9`}>
						<p className='color-main overflow-hidden text-ellipsis max-w-[18rem]'>
							{isSearch && `${searchParams.get('s')}`}
						</p>
						{isSearch && <span> - </span>}
						{isNewsDetail && 'Tỵ Là Con Gì Trong 12 Con Giáp – Chi Tiết Vận Mệnh Của Người Tuổi Tỵ'}
						{(category && topicNewsDatai18[category]) || (topic && topicNewsDatai18[topic])}
					</h1>
					{!isSearch && !isNewsDetail && (
						<>
							<p className='text-[#777] text-xl mt-4 font-sans italic'>
								{(category && desTopicNewsData[category]) || (topic && desTopicNewsData[topic])}
							</p>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-1 mt-6 h-[80vh]'>
								<NewsHomeHot
									styles='news-category'
									href='/news'
									src='https://cdnnews.mogi.vn/news/wp-content/uploads/2023/03/29142459/xu-huong-kinh-doanh-2023-696x392.jpg'
									title='SXu Hướng Kinh Doanh 2023 – Cập nhập Những Thông Tin Mới Nhất'
									dateTime='06/04/2023'
								/>
								<div className='grid grid-cols-2 gap-1'>
									<NewsHomeHot
										styles='news-category'
										href='/news'
										src='https://cdnnews.mogi.vn/news/wp-content/uploads/2023/03/29231330/slogan-bat-dong-san-324x400.jpg'
										title='Slogan Bất Động Sản – Bỏ Túi Bí Quyết Sáng Tạo Slogan Nâng Tầm Giá Trị'
										dateTime='06/04/2023'
										styleTitle='text-sm'
									/>
									<NewsHomeHot
										styles='news-category'
										href='/news'
										src='https://cdnnews.mogi.vn/news/wp-content/uploads/2023/03/20111752/van-phong-cong-chung-go-vap-11-324x400.jpg'
										title='Top 5 Văn Phòng Công Chứng Gò Vấp Và Thông Tin Chi Tiết Mới Nhất'
										dateTime='06/04/2023'
										styleTitle='text-sm'
									/>
									<NewsHomeHot
										styles='news-category'
										href='/news'
										src='https://cdnnews.mogi.vn/news/wp-content/uploads/2023/03/16131934/van-phong-cong-chung-cau-giay-324x400.jpg'
										title='Danh Sách Và Thông Tin Liên Hệ Các Văn Phòng Công Chứng Tại Cầu Giấy, Hà Nội'
										dateTime='06/04/2023'
										styleTitle='text-sm'
									/>
								</div>
							</div>
							<div className='mt-16'>
								<TitleNews title='không thể bỏ lỡ' />
								<div className='grid grid-cols-2 gap-8'>
									<NewsCardSingle
										styles='!w-full'
										src='https://cdnnews.mogi.vn/news/wp-content/uploads/2023/02/14124600/cac-mua-trong-nam-696x392.jpg'
										title='KHÔNG THỂ BỎ LỠ
	Các Mùa Trong Năm Ở Nước Việt Nam Có Đặc Điểm Gì Nổi Bật Và Đặc Biệt?'
									/>
									<NewsCardSingle
										styles='!w-full'
										src='	https://cdnnews.mogi.vn/news/wp-content/uploads/2023/02/08231228/vang-tay-la-gi-696x392.jpg'
										title='Vàng Tây Là Gì? Cách Để Phân Biệt Vàng Tây Với Các Loại Vàng Khác'
									/>
									<NewsCardSingle
										styles='!w-full'
										src='https://cdnnews.mogi.vn/news/wp-content/uploads/2023/02/14124600/cac-mua-trong-nam-696x392.jpg'
										title='KHÔNG THỂ BỎ LỠ
	Các Mùa Trong Năm Ở Nước Việt Nam Có Đặc Điểm Gì Nổi Bật Và Đặc Biệt?'
									/>
								</div>
							</div>
						</>
					)}
					{(isSearch || isNewsDetail) && (
						<div className='flex flex-col md:flex-row items-start mt-10 w-full '>
							{isSearch && (
								<NewsDetailSearch
									value={searchParams.get('s') || ''}
									handleSeachNews={handleSeachNews}
								/>
							)}
							{isNewsDetail && (
								<div className='w-full md:w-3/5'>
									<NewsDetail />
								</div>
							)}
							<div className='w-full md:w-2/5 ml-12 flex flex-col items-center'>
								<div className='w-full mb-14'>
									<a href='http://localhost:2002/news'>
										<TitleNews
											title='tin liên quan'
											styles='uppercase !text-sm !font-medium !bg-[#000000]'
											underLineColor='#000000'
										/>
									</a>
									<div className='flex flex-col items-start justify-between mt-6'>
										<NewsCardVertical
											src='https://cdnnews.mogi.vn/news/wp-content/uploads/2018/04/cac-cong-trinh-kien-truc-co-dai-phuong-dong-485x360.jpg'
											styleTitle='!text-sm'
											dateTime='07/04/2023'
											styles='mb-8'
											title='Bày trí nội thất sai cách – Nguy hiểm không tưởng!Bày trí nội thất sai cách –Nguy hiểm không tưởng!Bày trí nội thất sai cách – Nguy hiểm không tưởng!'
										/>
										<NewsCardVertical
											src='https://cdnnews.mogi.vn/news/wp-content/uploads/2018/04/cac-cong-trinh-kien-truc-co-dai-phuong-dong-485x360.jpg'
											styleTitle='!text-sm'
											dateTime='07/04/2023'
											styles='mb-8'
											title='Bày trí nội thất sai cách – Nguy hiểm không tưởng!Bày trí nội thất sai cách –Nguy hiểm không tưởng!Bày trí nội thất sai cách – Nguy hiểm không tưởng!'
										/>
										<NewsCardVertical
											src='https://cdnnews.mogi.vn/news/wp-content/uploads/2018/04/cac-cong-trinh-kien-truc-co-dai-phuong-dong-485x360.jpg'
											styleTitle='!text-sm'
											dateTime='07/04/2023'
											styles='mb-8'
											title='Bày trí nội thất sai cách – Nguy hiểm không tưởng!Bày trí nội thất sai cách –Nguy hiểm không tưởng!Bày trí nội thất sai cách – Nguy hiểm không tưởng!'
										/>
									</div>
								</div>
								<div className='cursor-pointer px-3 transition-none py-2 flex items-baseline border border-solid border-[#ccc]  hover:bg-[#4db2ec] text-[#aaa] hover:text-white'>
									<button className='text-sm mr-2'>Xem thêm</button>
									<DownOutlined className='text-sm' />
								</div>
							</div>
						</div>
					)}
					{!isNewsDetail && (
						<div className='my-12 flex items-center justify-between w-full'>
							<NewsPagination
								className='pagination-bar'
								currentPage={currentPage}
								totalCount={30}
								pageSize={PageSize}
								onPageChange={(page: number) => setCurrentPage(page)}
							/>
							<p className='text-sm'>
								Trang <span className='color-main'>{currentPage}</span>/<span>{30}</span>
							</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default BodyNews;

import { EyeOutlined, ShareAltOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC } from 'react';
import { FacebookShareButton } from 'react-share';

import styles from './news-detail.module.scss';

import { FacebookIcon } from '@/assets/icons';
import Evaluate from '@/components/helpers/Evaluate/Evaluate';
type Props = {};
const cx = classNames.bind(styles);

const currentPageUrl = 'facebook.com';

const NewsDetail: FC<Props> = () => {
	return (
		<div className='w-full md:w-[70%]'>
			<div className={cx('wrapper_news_detail')}>
				<div className='flex items-center justify-between'>
					<time className='text-sm'>21/02/2023</time>
					<div className='text-sm'>
						<EyeOutlined className='align-baseline mr-1' />
						<span>2002</span>
					</div>
				</div>
				<div className='flex items-center mt-4'>
					<div
						className={`${cx(
							'news_arrow_right',
						)} bg-white p-3 flex items-center mr-5 border border-solid border-[#e9e9e9]`}
					>
						<ShareAltOutlined className='align-baseline pr-1 border-r-[1px] border-solid border-0 mr-2 border-[#e9e9e9]' />
						<p className='text-[12px]'>Chia sẻ</p>
					</div>
					<FacebookShareButton
						url={currentPageUrl}
						quote='Vui lòng chia sẻ tin tức này'
						hashtag='#NgocVan'
					>
						<div className='cursor-pointer'>
							<FacebookIcon size='44px' />
						</div>
					</FacebookShareButton>
				</div>
				<div>
					<div>
						<div>
							<img
								src='https://mogi.vn/news/wp-content/uploads/2017/04/27262_20_choang_ngop_truoc_hanh_trinh_lot_xac_ngoan_muc_cua_can_ho_nho_65m2_009651df71-696x464.jpg'
								alt='ngocvan'
								className='my-8 w-full'
							/>
							<p className='text-justify text-[#222] text-[17px]'>
								<em>
									Hiện nay, ở các khu vực thành phố lớn diện tích đất thường có chiều dài sâu nhưng
									chiều rộng hạn chế nên kiến trúc nhà ống ngày càng được ưa chuộng hơn, nhu cầu về
									thiết <b>kế nhà ống đẹp</b>, hiện đại cũng được nhiều người quan tâm. Trong bài
									viết này
								</em>
							</p>
						</div>
					</div>
				</div>
				<Evaluate />
			</div>
		</div>
	);
};

export default NewsDetail;

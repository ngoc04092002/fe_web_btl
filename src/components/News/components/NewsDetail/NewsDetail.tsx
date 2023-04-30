import { EyeOutlined, ShareAltOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import React, { FC } from 'react';
import { FacebookShareButton } from 'react-share';

import NewsPiece from '../NewsPiece/NewsPiece';

import styles from './news-detail.module.scss';

import { FacebookIcon } from '@/assets/icons';
import Evaluate from '@/components/helpers/Evaluate/Evaluate';
import { INewsResponse } from '@/types/components/News/types';

type Props = { res: INewsResponse | undefined };
const cx = classNames.bind(styles);

const currentPageUrl = 'facebook.com';

const NewsDetail: FC<Props> = ({ res }) => {
	console.log(res);

	return (
		<div className='w-full md:w-[70%]'>
			<div className={cx('wrapper_news_detail')}>
				<div className='flex items-center justify-between'>
					<time className='text-sm'>{dayjs(res?.createdAt).format('DD/MM/YYYY')}</time>
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
					<div className='mb-10'>
						<div>
							<img
								src={res?.img}
								alt='ngocvan'
								className='my-8 w-full'
							/>
							<p className='text-justify text-[#222] text-[17px]'>
								<em>{res?.des}</em>
							</p>
						</div>
					</div>
					<div>
						{res &&
							res?.newsBody &&
							!!res?.newsBody.length &&
							res.newsBody.map((r, index) => {
								const { img, body, caption, title, des } = r;
								return (
									<NewsPiece
										key={index}
										pieces={{ caption, title, des }}
										url={img}
										body={body}
									/>
								);
							})}
					</div>
				</div>
				<Evaluate />
			</div>
		</div>
	);
};

export default NewsDetail;

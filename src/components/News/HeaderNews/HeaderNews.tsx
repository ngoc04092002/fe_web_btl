import { CaretDownOutlined, SearchOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './header-news.module.scss';

import { ITopicNewsData } from '@/types/components/News/types';
import { getImage } from '@/utils/CustomImagePath';
const cx = classNames.bind(styles);

type Props = {};
const topicNewsData: ITopicNewsData[] = [
	{
		to: '/news',
		topic: 'Tin tức bds',
		child: [
			{ to: '/news', title: 'Thị trường nhà đất' },
			{ to: '/news', title: 'Tài chính BĐS' },
			{ to: '/news', title: 'Phân tích - nhận định' },
		],
	},
	{
		to: '/news',
		topic: 'Kiến thức bds',
		child: [
			{ to: '/news', title: 'Xây dựng' },
			{ to: '/news', title: 'Kiến trúc' },
			{ to: '/news', title: 'Nhà của sao' },
		],
	},
	{ to: '/news', topic: 'Phong thuỷ', child: [] },
	{
		to: '/news',
		topic: 'Lời khuyên',
		child: [
			{ to: '/news', title: 'Góc đầu tư' },
			{ to: '/news', title: 'Cho người thuê' },
		],
	},
	{
		to: '/news',
		topic: 'luật nhà đất',
		child: [
			{ to: '/news', title: 'Quyền sở hữu' },
			{ to: '/news', title: 'Tranh chấp' },
			{ to: '/news', title: 'Nghĩa vụ tài chính' },
		],
	},
];

const HeaderNews: FC<Props> = () => {
	return (
		<div className='px-8 pt-2 flex flex-col'>
			<div className='mb-4 w-fit'>
				<a href='/'>
					<img
						src={getImage('branch.png')}
						alt='branch'
						className='h-32 w-48 object-fill object-center'
					/>
				</a>
			</div>
			<div>
				<ul className='flex items-center'>
					{topicNewsData.map((t) => (
						<li
							className={`${cx('topic')} w-fit h-12 px-4 relative`}
							key={t.topic}
						>
							<Link
								to={t.to}
								className={`${cx(
									'head-topic',
								)} flex items-center h-full leading-[48px] align-middle relative`}
							>
								<span className='mr-2 font-bold text-base uppercase font-[system-ui]'>
									{t.topic}
								</span>{' '}
								{!!t.child.length && <CaretDownOutlined />}
							</Link>
							<ul className='absolute top-12 bg-white w-fit shadow-cs-sm-0 text-sm'>
								{!!t.child.length &&
									t.child.map((tc, index) => (
										<li
											key={index}
											className='hover:color-main cursor-pointer py-2 px-6'
										>
											<Link
												to='/'
												className='whitespace-nowrap'
											>
												{tc.title}
											</Link>
										</li>
									))}
							</ul>
						</li>
					))}
					<li className='text-[22px] cursor-pointer'>
						<SearchOutlined />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HeaderNews;

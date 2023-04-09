import { RightOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { IListSearchData } from '@/types/components/News/types';

type Props = {
	showSearch: boolean;
};

const NewsSearch: FC<Props> = ({ showSearch }) => {
	const listSearchData: IListSearchData[] = Array(6).fill({
		to: '',
		img: 'https://cdnnews.mogi.vn/news/wp-content/uploads/2022/11/30100256/ong-lam-to-trong-nha-tot-hay-xau-324x400.jpg',
		des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio omnis mollitia officia natus sunt assumenda veniam debitis minus hic ipsam ab illo, recusandae voluptatibus earum repellendus impedit aperiam alias id.',
		createdAt: dayjs().format('DD/MM/YYYY'),
	});
	return (
		<div
			className={`lg:block hidden absolute bg-white pt-4 pb-0 w-[600px] ${
				showSearch ? 'top-[48px] opacity-100 visible' : 'invisible top-[70px] opacity-0'
			} -right-[14px]  shadow-sm-cs-0360`}
		>
			<form
				action='http://localhost:2002/news/search'
				method='get'
				className='border-b border-solid border-0 border-[#ccc] mb-5 mx-6'
			>
				<div className='flex items-center'>
					<input
						type='text'
						name='s'
						className='flex-1 input-none'
					/>
					<button className='flex items-center text-xs'>
						<span className='uppercase mr-2 hover:color-main'>tìm kiếm</span>
						<RightOutlined />
					</button>
				</div>
			</form>
			<div className='w-full flex items-center flex-col'>
				<ul className='grid grid-cols-2 gap-3 mx-6'>
					{!!listSearchData.length &&
						listSearchData.map((l, i) => (
							<li key={i}>
								<Link
									to={l.to}
									className='flex items-center'
								>
									<div className='mr-3'>
										<img
											src={l.img}
											alt=''
											className='w-[38rem] h-[5rem] object-cover object-center'
										/>
									</div>
									<div>
										<h3 className='vertical-2 text-[#111111] text-[14px] font-semibold hover:color-main'>
											{l.des}
										</h3>
										<p className='text-[#767676] text-[12px]'>{l.createdAt}</p>
									</div>
								</Link>
							</li>
						))}
				</ul>
				<Link
					to=''
					className='text-sm p-3 text-center hover:color-main border-solid border-0 border-t border-[#ccc] w-full mt-4'
				>
					Xem tất cả các kết quả
				</Link>
			</div>
		</div>
	);
};

export default NewsSearch;

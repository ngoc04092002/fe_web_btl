import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import Search from '@/components/helpers/Search';
import { getImage } from '@/utils/CustomImagePath';

type Props = {};

const QALeft: FC<Props> = () => {
	const [showSearch, setShowSearch] = useState(false);
	const [value, changeValue] = useState('');

	const handleShowSearch = () => {
		setShowSearch(!showSearch);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		changeValue(e.target.value);
	};

	const handleSearch = () => {
		// eslint-disable-next-line no-restricted-globals
		const { origin } = location;
		window.location.replace(`${origin}/q-a?s=${value}`);
	};

	return (
		<>
			<div>
				<ul>
					<li className='hover:bg-[#e4e6eb] mb-2 hover:color-main p-1 rounded'>
						<Link
							className='flex items-center'
							to='/q-a'
						>
							<img
								src='https://mogi.vn/hoi-dap/icons/news-feed.svg'
								alt=''
								className='mr-2'
							/>
							<p className='text-sm'>Bảng tin</p>
						</Link>
					</li>
					<li
						className='hover:bg-[#e4e6eb] cursor-pointer hover:color-main p-1 rounded'
						onClick={handleShowSearch}
					>
						<div className='flex items-center'>
							<img
								src={getImage('search-svgrepo.png')}
								alt=''
								className='mr-2 w-[24px] h-[24px]'
							/>
							<p className='text-sm'>Tìm kiếm</p>
						</div>
					</li>
				</ul>
			</div>
			<div
				className={`absolute here bg-backdrop inset-0 -top-[80px] z-[9997] cus-screen:hidden ${
					showSearch ? '!block' : 'hidden'
				}`}
				onClick={handleShowSearch}
			></div>
			{showSearch && (
				<div className='bg-white rounded pt-2 absolute z-[9998] left-1/2 -translate-x-1/2 w-[400px] h-[100px]'>
					<h1 className='text-center font-semibold mb-2'>Tìm kiếm bài đăng</h1>
					<Search
						handleChange={handleChange}
						handleClick={handleSearch}
						placeholder='Từ khóa'
					/>
				</div>
			)}
		</>
	);
};

export default QALeft;

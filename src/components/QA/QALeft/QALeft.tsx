import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const QALeft: FC<Props> = () => {
	return (
		<div>
			<ul>
				<li className='hover:bg-[#e4e6eb] hover:color-main p-1 rounded'>
					<Link
						className='flex items-center'
						to='/q-a'
					>
						<img
							src='	https://mogi.vn/hoi-dap/icons/news-feed.svg'
							alt=''
							className='mr-2'
						/>
						<p className='text-sm'>Bảng tin</p>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default QALeft;

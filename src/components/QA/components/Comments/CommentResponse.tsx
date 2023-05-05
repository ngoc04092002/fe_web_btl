import React, { FC } from 'react';

import { getImage } from '@/utils/CustomImagePath';

type Props = {
	child?: boolean;
};

const CommentResponse: FC<Props> = ({ child = false }) => {
	const isOwner = false;
	return (
		<div>
			<div>
				<div className='flex items-start'>
					<img
						src={getImage('user.png')}
						alt=''
						className={`${
							child ? 'h-7 w-7' : 'h-8 w-8'
						} select-none mr-2 object-cover object-center`}
					/>
					<div
						className={`${
							isOwner ? 'bg-[#2faff942]' : 'bg-[#f0f2f5]'
						} rounded-xl cursor-default p-2`}
					>
						<h1 className={`font-bold ${child ? 'text-[12px]' : 'text-sm'}`}>
							<span className='mr-3'>Ngọc văn</span>
							<span>1 phút trước</span>
						</h1>
						<p className={`${child ? 'text-[12px]' : 'text-[15px]'}`}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores commodi
							reprehenderit cumque perferendis alias tenetur? Alias dolores exercitationem eos
							facere rerum ipsam, distinctio tenetur neque, quo est laboriosam sequi cumque?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommentResponse;

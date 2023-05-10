import React, { FC } from 'react';

import { getImage } from '@/utils/CustomImagePath';

type Props = {
	isOwern?: boolean;
};

const Message: FC<Props> = ({ isOwern = false }) => {
	return (
		<div className='flex items-center mb-4'>
			{!isOwern && (
				<img
					src={getImage('user.png')}
					alt=''
					className='w-10 h-10 mr-2 rounded-[50%]'
				/>
			)}
			<p
				className={`text-sm ${
					isOwern ? 'bg-[#0084ff] text-white' : 'bg-[#e9e9e9]'
				}  p-2 rounded-[14px]`}
			>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam distinctio molestiae
				accusamus corporis repellendus quibusdam veniam eveniet necessitatibus placeat unde
				voluptates exercitationem, ad amet quisquam sed deleniti odit ut voluptatibus.
			</p>
		</div>
	);
};

export default Message;

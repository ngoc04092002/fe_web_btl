import React, { FC } from 'react';

type Props = {
	isOwern?: boolean;
};

const Message: FC<Props> = ({ isOwern = false }) => {
	return (
		<div className='flex items-center mb-4'>
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

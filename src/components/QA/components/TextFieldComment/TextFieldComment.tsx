import { SendOutlined } from '@ant-design/icons';
import React, { FC, memo } from 'react';

import { ITextFieldComment } from '@/types/pages/IQA';
import { getImage } from '@/utils/CustomImagePath';

const TextFieldComment: FC<ITextFieldComment> = ({
	value,
	handleChange,
	styles,
	isChild = false,
	handleSend,
}) => {
	const resizeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		e.target.style.height = '40px';
		e.target.style.height = e.target.scrollHeight + 'px';
	};
	return (
		<div className={`pl-3 mt-3 border-0 border-l-2 border-solid border-[#e6ecf0] ${styles}`}>
			<div className='flex items-center pb-3 border-0 border-b border-solid border-[#e6ecf0]'>
				<div>
					<img
						src={getImage('user.png')}
						alt=''
						className={`${isChild ? 'w-8 h-8' : 'w-10 h-10'}  rounded-[50%]`}
					/>
				</div>
				<textarea
					value={value}
					onChange={handleChange}
					onInput={resizeTextArea}
					className='text-[15px] flex-1 mx-2 resize-none bg-[#f7f8f9] h-[40px] min-h-[40px] rounded-2xl input-none overflow-hidden duration-[0s]'
					placeholder='Nhập bình luận...'
				/>
				<SendOutlined
					onClick={handleSend}
					className='cursor-pointer p-3 hover:bg-[#f7f8f9] rounded-full'
				/>
			</div>
		</div>
	);
};

export default memo(TextFieldComment);

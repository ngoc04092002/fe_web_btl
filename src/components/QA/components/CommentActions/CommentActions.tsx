import { EllipsisOutlined } from '@ant-design/icons';
import React, { FC, useState } from 'react';

import Comments from '../Comments';
import TextFieldComment from '../TextFieldComment';

import { CommentIcon, LikeIcon } from '@/assets/icons';
import { reportList } from '@/constants/initialValueQA';

type Props = {};

const CommentActions: FC<Props> = () => {
	const [showComment, setShowComment] = useState(false);
	const [like, setLike] = useState(false);
	const [showReport, setShowReport] = useState(false);

	const handleShowComment = () => {
		setShowComment(!showComment);
	};

	const handleClickLike = () => {
		setLike(!like);
	};

	const handleShowReport = () => {
		setShowReport(!showReport);
	};

	return (
		<>
			<div className='flex justify-between text-[#657786] font-medium pt-4 flex-col'>
				<div className='flex items-center justify-between select-none'>
					<div className='flex items-center'>
						<div
							onClick={handleClickLike}
							className='text-center py-2 px-4 flex items-center cursor-pointer hover:bg-[#f7f8f9] hover:rounded-lg'
						>
							<LikeIcon className={`${like ? 'fill-[#01adba]' : ''}`} />
							<p>Thích</p>
						</div>
						<div
							onClick={handleShowComment}
							className='text-center py-2 px-4 flex items-center cursor-pointer hover:bg-[#f7f8f9] hover:rounded-lg'
						>
							<CommentIcon />
							<p>Bình luận</p>
						</div>
					</div>
					<div className='flex items-center relative'>
						<EllipsisOutlined
							onClick={handleShowReport}
							className='ml-4 text-3xl cursor-pointer hover:bg-[#f7f8f9] hover:rounded-full'
						/>
						{showReport && (
							<ul className='absolute bg-white p-3 w-fit rounded-md top-full right-0 shadow-0416'>
								{reportList.map((r, index) => (
									<li
										key={index}
										className='whitespace-nowrap hover:bg-[#f7f8f9] p-2 cursor-pointer'
									>
										{r}
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
				{showComment && <TextFieldComment />}
			</div>
			{showComment && <Comments />}
		</>
	);
};

export default CommentActions;

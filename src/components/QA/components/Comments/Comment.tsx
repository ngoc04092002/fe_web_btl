import React, { useState } from 'react';

import TextFieldComment from '../TextFieldComment';

import CommentResponse from './CommentResponse';

type Props = {};

const Comment = (props: Props) => {
	const [showChildComments, setShowChildComments] = useState(false);
	const [showAnswers, setShowAnswers] = useState(false);

	const handleShowChildComments = () => {
		setShowChildComments(!showChildComments);
	};

	const handleShowAnswer = () => {
		setShowAnswers(!showAnswers);
	};

	return (
		<div className='pl-3 mt-3 border-0 border-l-2 border-solid border-[#e6ecf0]'>
			<CommentResponse />
			<div className=' ml-12 flex items-center'>
				{!showChildComments && (
					<p
						onClick={handleShowChildComments}
						className='text-sm mr-4 font-medium cursor-pointer color-main'
					>
						Xem thêm
					</p>
				)}
				<p
					onClick={handleShowAnswer}
					className='select-none text-sm font-medium cursor-pointer color-main'
				>
					Trả lời
				</p>
			</div>
			{showAnswers && (
				<TextFieldComment
					styles='ml-12'
					isChild
				/>
			)}
			{showChildComments && (
				<div className='pl-3 mt-3 border-0 border-l-2 border-solid border-[#e6ecf0]'>
					<CommentResponse child={true} />
				</div>
			)}
		</div>
	);
};

export default Comment;

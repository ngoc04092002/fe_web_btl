import React, { FC, useContext } from 'react';

import { AuthContext } from '@/context/AuthProvider';
import { IComments, ICommentChild } from '@/types/pages/IQA';
import { IUser } from '@/types/pages/types';
import { getImage } from '@/utils/CustomImagePath';
import { getTimeAgo } from '@/utils/FormatTime';

type Props = {
	child?: boolean;
	comment?: IComments | ICommentChild;
};

const CommentResponse: FC<Props> = ({ comment, child = false }) => {
	const { user } = useContext(AuthContext);
	const isOwner = (user as IUser)?.id === comment?.clientComment.id;
	if (!comment) {
		return <></>;
	}
	return (
		<div>
			<div>
				<div className='flex items-start'>
					<img
						src={comment?.clientComment?.avatar || getImage('user.png')}
						alt=''
						className={`${
							child ? 'h-7 w-7' : 'h-8 w-8'
						} select-none mr-2 rounded-[50%] object-cover object-center`}
					/>
					<div
						className={`${
							isOwner ? 'bg-[#2faff942]' : 'bg-[#f0f2f5]'
						} rounded-xl cursor-default p-2`}
					>
						<h1 className={`font-bold ${child ? 'text-[12px]' : 'text-sm'}`}>
							<span className='mr-3'>{comment?.clientComment.username}</span>
							<span>{getTimeAgo(comment?.createdAt || '')}</span>
						</h1>
						<p className={`${child ? 'text-[12px]' : 'text-[15px]'}`}>{comment?.content}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommentResponse;

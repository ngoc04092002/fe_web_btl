import { MoreOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import React, { FC, memo, useContext, useState } from 'react';

import { AuthContext } from '@/context/AuthProvider';
import { deleteComment, deleteCommentChild } from '@/infrastructure/qaActions';
import { IComments, ICommentChild } from '@/types/pages/IQA';
import { IUser } from '@/types/pages/types';
import { getImage } from '@/utils/CustomImagePath';
import { getToast } from '@/utils/CustomToast';
import { getTimeAgo } from '@/utils/FormatTime';

import './comment.scss';

type Props = {
	child?: boolean;
	comment: IComments | ICommentChild;
	setChildCommentDatas: React.Dispatch<React.SetStateAction<[] | ICommentChild[]>>;
	setCommentDatas: React.Dispatch<React.SetStateAction<IComments[]>>;
};

const CommentResponse: FC<Props> = ({
	comment,
	child = false,
	setChildCommentDatas,
	setCommentDatas,
}) => {
	const { user } = useContext(AuthContext);
	const isOwner = (user as IUser)?.id === comment?.clientComment.id;
	const [show, setShow] = useState(false);
	const handleClickMenuComment = () => {
		setShow(!show);
	};

	const { mutate } = useMutation<AxiosResponse<boolean, any>, AxiosError, { id: number }, unknown>({
		mutationFn: (formData: { id: number }) => {
			const res = child ? deleteCommentChild(formData.id) : deleteComment(formData.id);
			return res;
		},
	});

	const handleClickDel = () => {
		setShow(!show);
		mutate(
			{ id: comment.id as number },
			{
				onError: (res: AxiosError) => {
					getToast(res.response?.data as string, 'error');
				},
				onSuccess: (res) => {
					if (res.data) {
						if (child) {
							setChildCommentDatas((prev) => {
								return prev.filter((p) => p.id !== comment.id);
							});
						} else {
							setCommentDatas((prev) => {
								return prev.filter((p) => p.id !== comment.id);
							});
						}
						getToast('Xoá thành công!', 'success');
					}
				},
			},
		);
	};

	if (!comment) {
		return <></>;
	}
	return (
		<div className='mb-1 comment_response-container'>
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
					} rounded-xl cursor-default p-2 relative`}
				>
					<h1 className={`font-bold ${child ? 'text-[12px]' : 'text-sm'}`}>
						<span className='mr-3'>{comment?.clientComment.username}</span>
						<span>{getTimeAgo(comment?.createdAt || '')}</span>
					</h1>
					<p className={`${child ? 'text-[12px]' : 'text-[15px]'} break-all`}>{comment?.content}</p>
					{isOwner && (
						<MoreOutlined
							onClick={handleClickMenuComment}
							className={`menu ${
								!show ? 'hidden' : ''
							} absolute top-1/2 -translate-y-1/2 -right-[20px] cursor-pointer hover:bg-[#d5d5d54d] p-1 rounded-[50%]`}
						/>
					)}
					{show && (
						<ul className='z-10 absolute bg-white w-fit rounded-md -right-[18px] top-[60%] shadow-0416'>
							<li
								className='whitespace-nowrap hover:bg-[#f7f8f9] p-2 cursor-pointer text-sm '
								onClick={handleClickDel}
							>
								Xoá
							</li>
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default memo(CommentResponse);

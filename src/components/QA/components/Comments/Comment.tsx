import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import React, { FC, memo, useContext, useState } from 'react';

import TextFieldComment from '../TextFieldComment';

import CommentResponse from './CommentResponse';

import SkeletonTypography from '@/components/helpers/SkeletonTypography';
import { AuthContext } from '@/context/AuthProvider';
import { createCommentChild } from '@/infrastructure/qaActions';
import { ICommentChild, IComments } from '@/types/pages/IQA';
import { IUser } from '@/types/pages/types';
import { getToast } from '@/utils/CustomToast';

type Props = {
	comment: IComments;
	setCommentDatas: React.Dispatch<React.SetStateAction<IComments[]>>;
};

const Comment: FC<Props> = ({ comment, setCommentDatas }) => {
	const { user } = useContext(AuthContext);
	const [showChildComments, setShowChildComments] = useState(false);
	const [childCommentDatas, setChildCommentDatas] = useState<ICommentChild[] | []>(() => {
		if (comment?.commentChildren) {
			return comment?.commentChildren;
		}
		return [];
	});
	const [showAnswers, setShowAnswers] = useState(false);
	const [text, setText] = useState('');

	const handleShowChildComments = () => {
		setShowChildComments(!showChildComments);
	};

	const handleShowAnswer = () => {
		setShowAnswers(!showAnswers);
	};

	const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
	};

	const { mutate, isLoading } = useMutation<
		AxiosResponse<ICommentChild, any>,
		AxiosError,
		ICommentChild,
		unknown
	>({
		mutationFn: (formData: ICommentChild) => {
			const res = createCommentChild(formData);
			return res;
		},
	});

	const handleSend = () => {
		if (!Object.keys(user).length) {
			getToast('Bạn hãy đăng nhập', 'warn');
			return;
		}
		const { token, ...fields } = user as IUser;
		const formData: ICommentChild = {
			content: text,
			commentsEntity: comment,
			clientComment: fields,
		};
		mutate(formData, {
			onError: (res: AxiosError) => {
				getToast('', 'network bad');
			},
			onSuccess: (res) => {
				setChildCommentDatas((prev) => [...prev, res.data]);
				setText('');
			},
		});
	};

	return (
		<div className='pl-3 mr-4 mt-3 border-0 border-l-2 border-solid border-[#e6ecf0]'>
			<CommentResponse
				comment={comment}
				setChildCommentDatas={setChildCommentDatas}
				setCommentDatas={setCommentDatas}
			/>
			<div className=' ml-12 flex items-center'>
				<p
					onClick={handleShowChildComments}
					className='text-sm select-none mr-4 font-medium cursor-pointer color-main'
				>
					Xem thêm
				</p>
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
					handleChange={handleChangeValue}
					handleSend={handleSend}
					value={text}
				/>
			)}
			{isLoading && <SkeletonTypography loading />}
			{showChildComments && (
				<div className='pl-3 mt-3 border-0 border-l-2 border-solid border-[#e6ecf0]'>
					{!!childCommentDatas?.length &&
						childCommentDatas.map((c) => (
							<CommentResponse
								key={c.id}
								comment={c}
								child
								setChildCommentDatas={setChildCommentDatas}
								setCommentDatas={setCommentDatas}
							/>
						))}
				</div>
			)}
		</div>
	);
};

export default memo(Comment);

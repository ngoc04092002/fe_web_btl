import { EllipsisOutlined } from '@ant-design/icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import React, { FC, useContext, useState } from 'react';

import Comments from '../Comments';
import TextFieldComment from '../TextFieldComment';

import { CommentIcon, LikeIcon } from '@/assets/icons';
import SkeletonTypography from '@/components/helpers/SkeletonTypography';
import { reportList } from '@/constants/initialValueQA';
import { AuthContext } from '@/context/AuthProvider';
import { createComment, toggleLike } from '@/infrastructure/qaActions';
import { IComments, IQAResponse, IToggleLike } from '@/types/pages/IQA';
import { IUser } from '@/types/pages/types';
import { getToast } from '@/utils/CustomToast';

type Props = {
	data?: IQAResponse;
};

const CommentActions: FC<Props> = ({ data }) => {
	const queryClient = useQueryClient();
	const { user } = useContext(AuthContext);
	const [showComment, setShowComment] = useState(false);
	const [like, setLike] = useState(() => {
		return !!data?.likes?.find((l) => l.clientLikeEntities.id === (user as IUser)?.id);
	});
	const [amount, setAmount] = useState(data?.likes?.length || 0);
	const [comment, setComment] = useState('');
	const [showReport, setShowReport] = useState(false);

	const handleShowComment = () => {
		setShowComment(!showComment);
	};

	const { mutate: mutateLike } = useMutation<
		AxiosResponse<number, any>,
		AxiosError,
		IToggleLike,
		unknown
	>({
		mutationFn: (formData: IToggleLike) => {
			const res = toggleLike(formData);
			return res;
		},
	});

	const handleClickLike = () => {
		setLike(!like);
		const formData = {
			clientLikeEntities: {
				id: (user as IUser)?.id as number,
			},
			qaEntity: {
				id: data?.id as number,
			},
		};
		mutateLike(formData, {
			onError: (res: AxiosError) => {
				getToast('', 'network bad');
			},
			onSuccess: (res) => {
				queryClient.invalidateQueries({ queryKey: ['filter-qa'] });
				setAmount(res.data);
			},
		});
	};

	const handleShowReport = () => {
		setShowReport(!showReport);
	};

	const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setComment(e.target.value);
	};

	console.log(amount);

	const { mutate, isLoading } = useMutation<
		AxiosResponse<boolean, any>,
		AxiosError,
		IComments,
		unknown
	>({
		mutationFn: (formData: IComments) => {
			const res = createComment(formData);
			return res;
		},
	});

	console.log(data);

	const handleSend = () => {
		const { clientEntityQa, ...rest } = data as IQAResponse;
		const { token, ...fileds } = user as IUser;
		const formData: Omit<IComments, 'id' | 'commentChildren'> = {
			content: comment,
			qaEntity: rest,
			clientComment: fileds,
		};
		mutate(formData, {
			onError: (res: AxiosError) => {
				getToast('', 'network bad');
			},
			onSuccess: (res) => {
				if (!res.data) {
					getToast('', 'network bad');
					return;
				}
				queryClient.invalidateQueries({ queryKey: ['filter-qa'] });
				setComment('');
			},
		});
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
				{showComment && (
					<TextFieldComment
						value={comment}
						handleChange={handleChangeValue}
						handleSend={handleSend}
					/>
				)}
				{isLoading && <SkeletonTypography loading />}
			</div>
			{showComment && <Comments comments={data?.commentsEntities || []} />}
		</>
	);
};

export default CommentActions;

import { CloseOutlined, FileImageOutlined } from '@ant-design/icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useContext, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import ButtonWrapper from '@/components/helpers/ButtonWrapper/ButtonWrapper';
import { initValueImg } from '@/constants/NewsConst';
import { AuthContext } from '@/context/AuthProvider';
import { createQA } from '@/infrastructure/qaActions';
import { BackDropContext } from '@/pages/Home';
import { storage } from '@/pages/firebase';
import { IRequestBodyQA } from '@/types/pages/IQA';
import { IUser } from '@/types/pages/types';
import { getToast } from '@/utils/CustomToast';
import { deleteFirebaseImgPath } from '@/utils/DeleteFirebaseImgPath';

type Props = {};

const DialogCard = (props: Props) => {
	const queryClient = useQueryClient();
	const { user } = useContext(AuthContext);
	const { toggleBackDrop } = useContext(BackDropContext);
	const [img, setImg] = useState<{ url: string; file: File | null }>(initValueImg);
	const [text, setText] = useState('');

	const handlePreviewAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files?.length) {
			return;
		}

		const file: string = URL.createObjectURL(e.target.files[0]);
		setImg({ url: file, file: e.target.files[0] as unknown as File });
	};

	const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
	};

	const { mutate, isLoading } = useMutation<
		AxiosResponse<boolean, any>,
		AxiosError,
		IRequestBodyQA,
		unknown
	>({
		mutationFn: (formData: IRequestBodyQA) => {
			console.log(formData);

			const res = createQA(formData);
			return res;
		},
	});

	const handleCreateQA = () => {
		const imageRef = ref(storage, `/images/${img.file?.name + v4()}`);
		uploadBytes(imageRef, img.file as File)
			.then((d) => {
				getDownloadURL(d.ref)
					.then((url) => {
						const { token, ...rest } = user as IUser;
						if (!img.file) {
							deleteFirebaseImgPath(url);
						}
						const formData = {
							img: img.file ? url : '',
							content: text,
							clientEntityQa: rest as IUser,
						};
						mutate(formData, {
							onError: (res: AxiosError) => {
								if (typeof res.response?.data === 'string') {
									getToast(res.response?.data as string, 'error');
								}
								getToast('', 'network bad');
							},
							onSuccess: (res) => {
								if (!res.data) {
									getToast('Đã có lỗi xảy ra vui lòng thử lại', 'error');
									return;
								}
								queryClient.invalidateQueries({ queryKey: ['filter-qa'] });
								setImg(initValueImg);
								setText('');
								toggleBackDrop();
								getToast('Cập nhật thành công!', 'success');
							},
						});
					})
					.catch((err) => {
						getToast('Lỗi khi upload hình ảnh', 'warn');
					});
			})
			.catch((err) => {
				getToast('Lỗi khi upload hình ảnh', 'warn');
			});
	};

	useEffect(() => {
		return () => {
			img && URL.revokeObjectURL(img.url);
		};
	}, [img]);

	return (
		<section className='z-[9998] bg-white absolute top-[10px] left-1/2 -translate-x-1/2 w-[460px] rounded '>
			<div className='flex items-center justify-between text-xl border-b border-solid border-[#ccc] border-0 p-4'>
				<p>Thêm câu hỏi</p>
				<CloseOutlined
					onClick={toggleBackDrop}
					className='cursor-pointer'
				/>
			</div>
			<div className='p-4'>
				<textarea
					name=''
					id=''
					cols={10}
					className='w-full resize-none rounded caret-[#0499a8] border border-solid border-[#ccc]'
					placeholder='Đặt câu hỏi phù hợp'
					value={text}
					onChange={handleChangeText}
				/>
				<label
					htmlFor='update_file'
					className='bg-red cursor-pointer'
				>
					<div className='h-[200px] relative border border-dashed border-[#ccc]'>
						{img.file ? (
							<img
								className='w-full h-full'
								src={img.url}
								alt=''
							/>
						) : (
							<FileImageOutlined className='text-[90px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
						)}
						<input
							id='update_file'
							hidden
							accept='image/*'
							type='file'
							onChange={handlePreviewAvatar}
						/>
					</div>
				</label>
			</div>
			<div className='p-4'>
				<ButtonWrapper
					onClick={handleCreateQA}
					styles='float-right'
					isLoading={isLoading}
				>
					Đăng câu hỏi
				</ButtonWrapper>
			</div>
		</section>
	);
};

export default DialogCard;

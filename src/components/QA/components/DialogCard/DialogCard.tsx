import { CloseOutlined, FileImageOutlined } from '@ant-design/icons';
import React, { useContext, useEffect, useState } from 'react';

import ButtonWrapper from '@/components/helpers/ButtonWrapper/ButtonWrapper';
import { initValueImg } from '@/constants/NewsConst';
import { BackDropContext } from '@/pages/Home';

type Props = {};

const DialogCard = (props: Props) => {
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

	const handleCreateQA = () => {
		console.log(text, img);
		setImg(initValueImg);
		setText('');
	};

	useEffect(() => {
		return () => {
			img && URL.revokeObjectURL(img.url);
		};
	}, [img]);

	return (
		<section className='z-[10000] bg-white absolute top-[10%] left-1/2 -translate-x-1/2 w-[460px] rounded '>
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
				>
					Đăng câu hỏi
				</ButtonWrapper>
			</div>
		</section>
	);
};

export default DialogCard;

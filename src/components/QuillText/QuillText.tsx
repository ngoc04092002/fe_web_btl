import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import classNames from 'classnames/bind';
import React, { FC, useState } from 'react';
import ReactQuill from 'react-quill';

import ButtonWrapper from '../helpers/ButtonWrapper/ButtonWrapper';

import styles from './quill-text.module.scss';

import { topicNewsData } from '@/constants/NewsConst';
import { ITopicNewsData } from '@/types/components/News/types';

type Props = {};
const cx = classNames.bind(styles);

const modules = {
	toolbar: [
		[{ 'header': [1, 2, 3, 5, false] }],
		['bold', 'italic'],
		[{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
		['link'],
		['clean'],
	],
};

const QuillText: FC<Props> = () => {
	const [value, setValue] = useState('');
	const [topic, setTopic] = useState('');
	const [type, setType] = useState('');
	const [topicSeleted, setTopicSelected] = useState<ITopicNewsData | null>(null);
	const [typeSeleted, setTypeSelected] = useState<{ to: string; type: string } | null>(null);

	const [img, setImg] = useState<{ url: string; file: File | null }>({
		url: '',
		file: null,
	});

	const handleChangeTopic = (e: SelectChangeEvent<string>) => {
		setTopic(e.target.value);
	};
	const handleChangeType = (e: SelectChangeEvent<string>) => {
		setType(e.target.value);
	};

	const selectTopic = (value: ITopicNewsData) => {
		setTopicSelected(value);
	};

	const handlePreviewImg = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files?.length) {
			return;
		}
		const file: string = URL.createObjectURL(e.target.files[0]);
		setImg({ url: file, file: e.target.files[0] as unknown as File });
		let reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onloadend = function () {
			const base64data = reader.result;
			setValue((prev) => `${prev}${`<img src="${base64data}">`}`);
		};
	};

	const handleRecordNews = () => {
		console.log('record');
	};
	console.log(value, img, topic, typeSeleted);
	return (
		<div className={`${cx('quill_text-container')} mt-8 mb-20`}>
			<div className='mb-4 bg-white w-full p-4'>
				<h1 className='text-xl font-bold mb-4'>Tạo tin tức</h1>
				<div>
					<FormControl
						fullWidth
						className='mb-2'
					>
						<InputLabel id='demo-simple-select-label'>Topic</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={topic}
							label='Topic'
							onChange={handleChangeTopic}
						>
							{topicNewsData.map((t) => (
								<MenuItem
									key={t.to}
									value={t.topic}
									onClick={(e) => {
										e.stopPropagation();
										selectTopic(t);
									}}
								>
									{t.topic}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					{topicSeleted && !!topicSeleted.child.length && (
						<FormControl fullWidth>
							<InputLabel id='demo-simple-select-label1'>Type</InputLabel>
							<Select
								labelId='demo-simple-select-label1'
								id='demo-simple-select'
								value={type}
								label='Type'
								onChange={handleChangeType}
							>
								{topicSeleted.child.map((t) => (
									<MenuItem
										key={t.to}
										onClick={(e) => {
											e.stopPropagation();
											setTypeSelected({ to: t.to, type: t.type });
										}}
										value={t.type}
									>
										{t.type}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					)}
				</div>
				<div className='w-full'>
					<Button
						variant='contained'
						component='label'
						className='text-center mb-2 mt-8'
					>
						Thêm ảnh
						<input
							hidden
							accept='image/*'
							multiple
							type='file'
							onChange={handlePreviewImg}
						/>
					</Button>
					<ReactQuill
						className='bg-white'
						theme='snow'
						value={value}
						onChange={setValue}
						modules={modules}
					/>
					<ButtonWrapper
						onClick={handleRecordNews}
						styles='mt-3 mb-1'
					>
						Xong
					</ButtonWrapper>
				</div>
			</div>
			<div
				className={cx('quill_text-view')}
				dangerouslySetInnerHTML={{ __html: value }}
			/>
			<ButtonWrapper styles='float-right'>Tạo</ButtonWrapper>
		</div>
	);
};

export default QuillText;

import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import classNames from 'classnames/bind';
import React, { FC, useEffect, useState } from 'react';
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

// const sliceSrcImgRegex: RegExp = /src\s*=\s*"(.+?)"/gim;

const QuillText: FC<Props> = () => {
	const [body, setBody] = useState('');
	const [valueMain, setValueMain] = useState({
		topic: '',
		type: '',
		title: '',
		des: '',
		img: '',
	});
	const [bodes, setBodes] = useState<string[] | []>([]);
	const [topicSelected, setTopicSelected] = useState<ITopicNewsData | null>(null);

	const [img, setImg] = useState<{ url: string; file: File | null }>({
		url: '',
		file: null,
	});

	const [imgMain, setImgMain] = useState<{ url: string; file: File | null }>({
		url: '',
		file: null,
	});

	const handleChangeValueMain = (e: any) => {
		e.stopPropagation();
		setValueMain((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const selectTopic = (value: ITopicNewsData) => {
		setTopicSelected(value);
	};

	const handlePreviewImgMain = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files?.length) {
			return;
		}

		const file: string = URL.createObjectURL(e.target.files[0]);
		setImgMain({ url: file, file: e.target.files[0] as unknown as File });
	};

	const handlePreviewImgNewsPiece = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files?.length) {
			return;
		}
		const file: string = URL.createObjectURL(e.target.files[0]);
		setImg({ url: file, file: e.target.files[0] as unknown as File });
		let reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onloadend = function () {
			const base64data = reader.result;
			setBody((prev) => `${prev}${`<img src="${base64data}">`}`);
		};
	};

	const handleRecordNews = () => {
		console.log('record');
		setBodes((prev) => [...prev, body]);
		setBody('');
	};
	// console.log(body, img, valueMain, typeSeleted);
	// console.log('regex=>>', body.replace(sliceSrcImgRegex, "src='ok'"));

	const handleSubmit = () => {
		console.log(valueMain, bodes);
	};

	useEffect(() => {
		return () => {
			imgMain && URL.revokeObjectURL(imgMain.url);
			img && URL.revokeObjectURL(img.url);
		};
	}, [imgMain, img]);

	return (
		<div className={`${cx('quill_text-container')} mt-8 mb-20`}>
			<div className='mb-4 bg-white w-full p-4'>
				<div className='flex items-center justify-between'>
					<h1 className='text-xl font-bold mb-4'>Tạo tin tức</h1>
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
							onChange={handlePreviewImgMain}
						/>
					</Button>
				</div>
				<div>
					<TextField
						name='title'
						id='title'
						label='TItle'
						variant='outlined'
						className='w-full mb-2'
						multiline
						onChange={handleChangeValueMain}
						value={valueMain.title}
					/>
					<TextField
						name='des'
						id='des'
						label='Des'
						variant='outlined'
						className='w-full mb-2'
						multiline
						onChange={handleChangeValueMain}
						value={valueMain.des}
					/>
					<FormControl
						fullWidth
						className='mb-2'
					>
						<InputLabel id='demo-simple-select-label'>Topic</InputLabel>
						<Select
							name='topic'
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={valueMain.topic}
							label='Topic'
							onChange={handleChangeValueMain}
						>
							{topicNewsData.map((t) => (
								<MenuItem
									key={t.to}
									value={t.to}
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
					{topicSelected && !!topicSelected.child.length && (
						<FormControl fullWidth>
							<InputLabel id='demo-simple-select-label1'>Type</InputLabel>
							<Select
								name='type'
								labelId='demo-simple-select-label1'
								id='demo-simple-select'
								value={valueMain.type}
								label='Type'
								onChange={handleChangeValueMain}
							>
								{topicSelected.child.map((t) => (
									<MenuItem
										key={t.to}
										value={t.to}
									>
										{t.type}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					)}
					<img
						src={imgMain.url}
						alt=''
						className='max-h-[300px] mt-1'
					/>
				</div>
				<div className='w-full mt-8'>
					<div className='flex items-center justify-between'>
						<h1 className='text-xl font-bold mb-4'>Tạo các ý nhỏ</h1>
						<Button
							variant='contained'
							component='label'
							className='text-center mb-2 mt-2'
						>
							Thêm ảnh
							<input
								hidden
								accept='image/*'
								multiple
								type='file'
								onChange={handlePreviewImgNewsPiece}
							/>
						</Button>
					</div>
					<ReactQuill
						className='bg-white'
						theme='snow'
						value={body}
						onChange={setBody}
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
				dangerouslySetInnerHTML={{ __html: body }}
			/>
			<ButtonWrapper
				onClick={handleSubmit}
				styles='float-right'
			>
				Tạo
			</ButtonWrapper>
		</div>
	);
};

export default QuillText;

import { Button, TextField } from '@mui/material';
import React, { FC } from 'react';
import ReactQuill from 'react-quill';

import ButtonWrapper from '../helpers/ButtonWrapper';

import { ICreateNewsPiece, IKeysNewsPiece, INewsInputElement } from '@/types/components/News/types';

const modules = {
	toolbar: [
		[{ 'header': [1, 2, 3, 5, false] }],
		['bold', 'italic'],
		[{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
		['link'],
		['clean'],
	],
};

const fieldsNewsPiece: INewsInputElement[] = [
	{
		id: 'titlePiece',
		name: 'title',
		label: 'Title',
	},
	{
		id: 'desPiece',
		name: 'des',
		label: 'Des',
	},
	{
		id: 'captionPiece',
		name: 'caption',
		label: 'Caption',
	},
];

const CreateNewsPiece: FC<ICreateNewsPiece> = ({
	handlePreviewImgNewsPiece,
	handleRecordNews,
	body,
	handleChangeValuePiece,
	setBody,
	valuePiece,
	isImg,
}) => {
	return (
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
			{fieldsNewsPiece.map((fi) => {
				if (fi.id === 'captionPiece' && !isImg) {
					return null;
				}
				return (
					<TextField
						key={fi.id}
						name={fi.name}
						id={fi.id}
						label={fi.label}
						variant='outlined'
						className='w-full mb-2'
						multiline
						onChange={handleChangeValuePiece}
						value={valuePiece[fi.name as IKeysNewsPiece]}
					/>
				);
			})}
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
	);
};

export default CreateNewsPiece;

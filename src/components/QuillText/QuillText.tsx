/* eslint-disable max-lines */
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import classNames from 'classnames/bind';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { FC, useContext, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import NewsPiece from '../News/components/NewsPiece/NewsPiece';
import ButtonWrapper from '../helpers/ButtonWrapper/ButtonWrapper';

import CreateNewsPiece from './CreateNewsPiece';
import styles from './quill-text.module.scss';

import {
	initValueImg,
	initValueNewsMain,
	initValueNewsPiece,
	topicNewsData,
} from '@/constants/NewsConst';
import { AuthContext } from '@/context/AuthProvider';
import { createNews } from '@/infrastructure/dashboardActions';
import { storage } from '@/pages/firebase';
import {
	IKeysNewsMain,
	INewsImage,
	INewsInputElement,
	INewsMainData,
	INewsPieceData,
	ITopicNewsData,
} from '@/types/components/News/types';
import { IUser } from '@/types/pages/types';
import { getToast } from '@/utils/CustomToast';

type Props = {
	fieldsNewsMain: INewsInputElement[];
};
const cx = classNames.bind(styles);

const QuillText: FC<Props> = ({ fieldsNewsMain }) => {
	const { user } = useContext(AuthContext);
	const [pieces, setPieces] = useState<INewsPieceData[] | []>([]);
	const [body, setBody] = useState<string>('');
	const [fileImgs, setFileImgs] = useState<INewsImage[] | []>([]);
	const [topicSelected, setTopicSelected] = useState<ITopicNewsData | null>(null);
	const [valuePiece, setValuePiece] =
		useState<Omit<INewsPieceData, 'img' | 'body'>>(initValueNewsPiece);
	const [valueMain, setValueMain] = useState<INewsMainData>(initValueNewsMain);

	const [img, setImg] = useState<INewsImage>(initValueImg);

	const [imgMain, setImgMain] = useState<INewsImage>(initValueImg);

	const handleChangeValueMain = (e: any) => {
		e.stopPropagation();
		setValueMain((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleChangeValuePiece = (e: any) => {
		e.stopPropagation();
		setValuePiece((prev) => ({
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
		setImg({ id: pieces.length, url: file, file: e.target.files[0] as unknown as File });
	};

	const handleRecordNews = (e: any) => {
		const { title, des, caption } = valuePiece;
		if (img.file) {
			setFileImgs((prev) => [...prev, img]);
		}
		setPieces((prev) => [
			...prev,
			{
				title,
				des,
				caption,
				img: img?.url || '',
				body,
			},
		]);
		//reset
		setValuePiece(initValueNewsPiece);
		setBody('');
		setImg(initValueImg);
	};

	// handle submit
	const { mutate, isLoading } = useMutation<
		AxiosResponse<boolean, any>,
		AxiosError,
		INewsMainData,
		unknown
	>({
		mutationFn: (formData: INewsMainData) => {
			const res = createNews(formData);

			return res;
		},
	});

	const handleSubmit = () => {
		if ([valueMain.title, valueMain.topic, valueMain.des].includes('')) {
			getToast('Bạn bắt buộc phải nhập phần tin tức', 'warn');
			return;
		}
		if (valuePiece.title.trim().length) {
			getToast('Bạn chưa nhấn xong!', 'warn');
			return;
		}

		// upload imgs pieces
		async function updateImgsPiece() {
			await fileImgs?.forEach((f) => {
				const imgRef = ref(storage, `/images/${f.file?.name + v4()}`);
				uploadBytes(imgRef, f.file as File)
					.then((d) => {
						getDownloadURL(d.ref)
							.then((url) => {
								pieces[f.id as number].img = url;
							})
							.catch((err) => {
								getToast('Lỗi khi upload hình ảnh', 'warn');
							});
					})
					.catch((err) => {
						getToast('Lỗi khi upload hình ảnh', 'warn');
					});
			});
		}
		updateImgsPiece();

		//upload img main
		const imageRef = ref(storage, `/images/${imgMain.file?.name + v4()}`);
		uploadBytes(imageRef, imgMain.file as File)
			.then((d) => {
				getDownloadURL(d.ref)
					.then((url) => {
						valueMain.img = url;
						valueMain.newsBody = pieces;
						valueMain.clientEntity = {
							id: (user as IUser).id,
						};
						mutate(valueMain, {
							onError: (res: AxiosError) => {
								getToast('', 'network bad');
							},
							onSuccess: (res) => {
								if (res.data) {
									getToast('Tạo thành công!', 'success');
									//reset value main
									setImgMain(initValueImg);
									setValueMain(initValueNewsMain);
								} else {
									getToast('', 'network bad');
								}
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

	// reset all
	const handleReset = () => {
		setValuePiece(initValueNewsPiece);
		setBody('');
		setImg(initValueImg);
		setTopicSelected(null);
		setImgMain(initValueImg);
		setValueMain(initValueNewsMain);
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
					{fieldsNewsMain.map((fi) => (
						<TextField
							required
							key={fi.id}
							name={fi.name}
							id={fi.id}
							label={fi.label}
							variant='outlined'
							className='w-full mb-2'
							multiline
							onChange={handleChangeValueMain}
							value={valueMain[fi.name as IKeysNewsMain]}
						/>
					))}
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
							required
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
								required
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
				<CreateNewsPiece
					handlePreviewImgNewsPiece={handlePreviewImgNewsPiece}
					handleRecordNews={handleRecordNews}
					handleChangeValuePiece={handleChangeValuePiece}
					body={body}
					setBody={setBody}
					valuePiece={valuePiece}
					isImg={!!img.file}
				/>
			</div>
			<NewsPiece
				pieces={valuePiece}
				url={img.url}
				body={body}
			/>
			<div className='float-right flex items-center'>
				<ButtonWrapper
					onClick={handleReset}
					styles='mr-4'
					isLoading={isLoading}
				>
					Đặt lại
				</ButtonWrapper>
				<ButtonWrapper
					onClick={handleSubmit}
					isLoading={isLoading}
				>
					Tạo
				</ButtonWrapper>
			</div>
		</div>
	);
};

export default QuillText;

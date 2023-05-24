import { TextField, InputLabel, Select, MenuItem, FormControl, Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useContext, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import ButtonWrapper from '@/components/helpers/ButtonWrapper';
import './add-post-room.scss';
import { initValuePostRoom, initialTextFiledPostRoom } from '@/constants/FilterRoom';
import { properties } from '@/constants/initValueIntro';
import { AuthContext } from '@/context/AuthProvider';
import { createPostRoom } from '@/infrastructure/dashboardActions';
import { storage } from '@/pages/firebase';
import { IPostRoomSrc, IRequestPostRoom } from '@/types/pages/IDashBoard';
import { IUser } from '@/types/pages/types';
import { getToast } from '@/utils/CustomToast';

type Props = {};

const AddPostRoom = (props: Props) => {
	const { user } = useContext(AuthContext);
	const [value, setValue] = useState<IRequestPostRoom>(initValuePostRoom);
	const [avatar, setAvatar] = useState<{ url: string; file: File | null }[] | []>([]);

	const handleChange = (e: any) => {
		e.stopPropagation();
		setValue((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handlePreviewAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files?.length) {
			return;
		}
		const files: FileList = e.target.files;
		let arrayFiles: any = [];
		Array.from(files)?.forEach((f) => {
			const fUrl: string = URL.createObjectURL(f);
			arrayFiles.push({ url: fUrl, file: f });
		});

		setAvatar((prev) => [...prev, ...arrayFiles]);
	};

	const { mutate, isLoading } = useMutation<
		AxiosResponse<boolean, any>,
		AxiosError,
		IRequestPostRoom,
		unknown
	>({
		mutationFn: (formData: IRequestPostRoom) => {
			const res = createPostRoom(formData);
			return res;
		},
	});

	const handleSubmit = () => {
		if (!avatar.length) {
			getToast('Bạn cần phải thêm ảnh', 'warn');
			return;
		}
		let arraySrc: IPostRoomSrc[] = [];
		const lenAvatar = avatar.length - 1;
		avatar?.forEach((a, index) => {
			const imageRef = ref(storage, `/images/${a.file?.name + v4()}`);
			uploadBytes(imageRef, a.file as File)
				.then((d) => {
					getDownloadURL(d.ref)
						.then((url) => {
							arraySrc.push({ src: url });
						})
						.then(() => {
							console.log(index, lenAvatar);
							if (index === lenAvatar) {
								const formData = {
									...value,
									status: true,
									src: arraySrc,
									clientEntityPostRoom: {
										id: (user as IUser).id,
									},
								};
								mutate(formData, {
									onError: (res: AxiosError) => {
										getToast('', 'network bad');
									},
									onSuccess: (res) => {
										getToast('Tạo thành công!', 'success');
										setValue(initValuePostRoom);
										setAvatar([]);
									},
								});
							}
						})
						.catch((err) => {
							getToast('Lỗi khi upload hình ảnh', 'warn');
						});
				})
				.catch((err) => {
					getToast('Lỗi khi upload hình ảnh', 'warn');
				});
		});
	};

	useEffect(() => {
		return () => {
			!!avatar.length &&
				avatar?.forEach((a) => {
					URL.revokeObjectURL(a.url);
				});
		};
	}, [avatar]);

	return (
		<div className='add_post_room bg-white p-4 w-full mb-12'>
			<h1 className='font-bold text-lg mb-4'>Tạo đăng phòng</h1>
			<form className='w-full'>
				{initialTextFiledPostRoom &&
					initialTextFiledPostRoom.slice(0, 4).map((p) => (
						<TextField
							key={p.id}
							required
							type={p.type}
							className='w-full mb-3'
							id={p.id}
							label={p.label}
							multiline
							name={p.id}
							onChange={handleChange}
						/>
					))}
				<div className='flex items-center justify-between mb-3 flex-wrap'>
					{initialTextFiledPostRoom &&
						initialTextFiledPostRoom.slice(4, initialTextFiledPostRoom.length).map((p) => (
							<TextField
								key={p.id}
								className='cus-h w-[48%] mb-3'
								required
								id={p.id}
								label={p.label}
								name={p.id}
								type={p.type}
								onChange={handleChange}
								InputProps={{
									endAdornment: <InputAdornment position='end'>{p.unit}</InputAdornment>,
								}}
							/>
						))}
				</div>
				<FormControl fullWidth>
					<InputLabel id='roomType'>Kiểu phòng</InputLabel>
					<Select
						labelId='roomType'
						id='roomType'
						value={value.roomType}
						label='Kiểu phòng'
						name='roomType'
						onChange={handleChange}
					>
						{properties.map((p) => (
							<MenuItem
								key={p}
								value={p}
							>
								{p}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<Button
					variant='contained'
					component='label'
					className='mt-4'
				>
					Upload
					<input
						hidden
						accept='video/*,image/*'
						multiple
						type='file'
						onChange={handlePreviewAvatar}
					/>
				</Button>
			</form>
			<div className='grid grid-cols-3 gap-2'>
				{avatar &&
					!!avatar.length &&
					avatar.map((a, index) => (
						<div key={index}>
							{a.file?.type.startsWith('video') ? (
								<video
									className='w-full h-[200px]'
									src={a?.url || ''}
									controls
									playsInline
								/>
							) : (
								<img
									className='w-full h-[200px]'
									src={a?.url || ''}
									alt=''
								/>
							)}
						</div>
					))}
			</div>

			<ButtonWrapper
				onClick={handleSubmit}
				styles='mt-4 self-end'
				isLoading={isLoading}
			>
				Tạo
			</ButtonWrapper>
		</div>
	);
};

export default AddPostRoom;

import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableFooter,
	TablePagination,
	TableRow,
	Paper,
	Backdrop,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SliderImgs from './SliderImgs';
import TablePaginationActions from './TablePaginationActions';

import Loading from '@/components/Loading';
import ButtonWrapper from '@/components/helpers/ButtonWrapper';
import { FetchApiGetAllPostRoomOfUser } from '@/hooks/fetchApiPostRoom';
import { deletePostRoom, updatePostRoom } from '@/infrastructure/dashboardActions';
import { IPostRoomResponse, IPostRoomSrc } from '@/types/pages/IDashBoard';
import { getToast } from '@/utils/CustomToast';
import { deleteFirebaseImgPath } from '@/utils/DeleteFirebaseImgPath';

type Props = {
	userId: number;
};

const ListPostRoom: FC<Props> = ({ userId }) => {
	const navigation = useNavigate();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [srcs, setSrcs] = useState<IPostRoomSrc[] | []>([]);
	const [values, setValues] = useState<IPostRoomResponse[] | []>([]);

	const { res, isLoading } = FetchApiGetAllPostRoomOfUser(userId);

	const [open, setOpen] = useState(false);
	const handleClose = (e: any) => {
		if (e.target.className.includes('MuiBackdrop-root')) {
			setOpen(false);
		}
	};
	const handleOpen = (n: IPostRoomSrc[] | []) => {
		setSrcs(n);
		setOpen(true);
	};

	const { mutate: mutateUpdateStatus, isLoading: loadingUpdate } = useMutation<
		AxiosResponse<IPostRoomResponse, any>,
		AxiosError,
		IPostRoomResponse,
		unknown
	>({
		mutationFn: (formData: IPostRoomResponse) => {
			const res = updatePostRoom(formData);
			return res;
		},
	});

	const { mutate: mutateDelete, isLoading: loadingDelete } = useMutation<
		AxiosResponse<boolean, any>,
		AxiosError,
		{ id: number },
		unknown
	>({
		mutationFn: (formData: { id: number }) => {
			const res = deletePostRoom(formData.id);
			return res;
		},
	});

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - values.length) : 0;

	const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleDeletePostRoom = (room: IPostRoomResponse) => {
		console.log(room);
		const srcs: IPostRoomSrc[] | [] = room.src || [];
		srcs.forEach((src) => {
			if (src.src.includes('firebase')) {
				deleteFirebaseImgPath(src.src);
			}
		});
		mutateDelete(
			{ id: room.id },
			{
				onError: (res) => {
					getToast('', 'network bad');
				},
				onSuccess: (res) => {
					if (res.data) {
						getToast('Xoá thành công!', 'success');
						const updateRooms = values.filter((v) => v.id !== room.id);
						setValues(updateRooms);
					} else {
						getToast('', 'network bad');
					}
				},
			},
		);
	};

	const handleUpdatePostRoom = (room: IPostRoomResponse) => {
		navigation(`/dash-board/post-room/add-post-room/${room.id}`);
	};

	const updateStatusPostRoom = (room: IPostRoomResponse) => {
		const newRoomData = {
			...room,
			status: !room.status,
		};
		mutateUpdateStatus(newRoomData, {
			onError: (res) => {
				getToast('', 'network bad');
			},
			onSuccess: (res) => {
				const updateRooms = values.map((v) => {
					if (v.id === res.data.id) {
						return res.data;
					}
					return v;
				});
				setValues(updateRooms);
				getToast('Chuyển đổi trạng thái thành công!', 'success');
			},
		});
	};

	useEffect(() => {
		if (res && res.length) {
			setValues(res);
		}
	}, [res]);

	return (
		<div className='post_room bg-white p-4 w-full mb-12'>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<h1 className='font-bold text-lg mb-4'>Các bài đăng phòng</h1>
					<TableContainer component={Paper}>
						<Table
							sx={{ minWidth: 500 }}
							aria-label='custom pagination table'
						>
							<TableBody>
								{(rowsPerPage > 0
									? values.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									: values
								).map((row) => (
									<TableRow key={row.id}>
										<TableCell
											component='th'
											scope='row'
											className='w-[100px] h-full cursor-pointer'
											onClick={() => handleOpen(row?.src || [])}
										>
											<img
												src={row.src?.[0]?.src || ''}
												alt=''
												className='object-cover w-full h-full'
											/>
										</TableCell>
										<TableCell
											align='left'
											className='max-w-[400px] break-words'
										>
											{row.title}
										</TableCell>
										<TableCell
											align='left'
											className='whitespace-nowrap'
										>
											<ButtonWrapper
												onClick={() => updateStatusPostRoom(row)}
												isLoading={loadingUpdate}
												styles={`${
													row.status
														? 'border-[#ff0000] !text-[#ff0000]'
														: 'border-[#01adba] !text-[#01adba]'
												} border border-solid  bg-[transparent]  hover:!text-white`}
											>
												{row.status ? 'Hết phòng' : 'Còn phòng'}
											</ButtonWrapper>
										</TableCell>
										<TableCell align='left'>{row.price}</TableCell>
										<TableCell
											align='right'
											className=''
										>
											<ButtonWrapper onClick={() => handleUpdatePostRoom(row)}>Sửa</ButtonWrapper>
											<ButtonWrapper
												isLoading={loadingDelete}
												onClick={() => handleDeletePostRoom(row)}
												styles='ml-2 !bg-red-500'
											>
												Xóa
											</ButtonWrapper>
										</TableCell>
									</TableRow>
								))}
								{emptyRows > 0 && (
									<TableRow style={{ height: 53 * emptyRows }}>
										<TableCell colSpan={6} />
									</TableRow>
								)}
							</TableBody>
							<TableFooter>
								<TableRow>
									<TablePagination
										rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
										colSpan={4}
										count={res.length}
										rowsPerPage={rowsPerPage}
										page={page}
										SelectProps={{
											inputProps: {
												'aria-label': 'rows per page',
											},
											native: true,
										}}
										onPageChange={handleChangePage}
										onRowsPerPageChange={handleChangeRowsPerPage}
										ActionsComponent={TablePaginationActions}
									/>
								</TableRow>
							</TableFooter>
						</Table>
					</TableContainer>
					<Backdrop
						sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
						open={open}
						onClick={handleClose}
					>
						<SliderImgs srcs={srcs} />
					</Backdrop>
				</>
			)}
		</div>
	);
};

export default ListPostRoom;

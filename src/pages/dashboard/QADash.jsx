import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
} from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import React, { useContext } from 'react';

import ButtonWrapper from '@/components/helpers/ButtonWrapper';
import SkeletonTypography from '@/components/helpers/SkeletonTypography';
import { AuthContext } from '@/context/AuthProvider';
import { FetchApiGetAllQaByUser } from '@/hooks/fetchApiQA';
import { deleteQa, updateQa } from '@/infrastructure/qaActions';
import { getToast } from '@/utils/CustomToast';
import { deleteFirebaseImgPath } from '@/utils/DeleteFirebaseImgPath';

const columns = ['Ảnh', 'Nội dung', 'Lượt thích', 'Lượt bình luận', 'Ngày tạo', 'Hành động'];

const QADash = ({ AdminData, AdminLoading }) => {
	const queryClient = useQueryClient();
	const { user } = useContext(AuthContext);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const { res, isLoading } = FetchApiGetAllQaByUser(user?.id || 0);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const { mutate, isLoading: delLoading } = useMutation({
		mutationFn: (formData) => {
			const res = deleteQa(formData.id);
			return res;
		},
	});

	const { mutate: mutateUpdate, isLoading: updateLoading } = useMutation({
		mutationFn: (formData) => {
			const res = updateQa(formData);
			return res;
		},
	});

	const handleCancel = (row) => {
		const formData = {
			id: row.id,
			report: false,
		};
		mutateUpdate(formData, {
			onError: (res) => {
				getToast(res.response?.data, 'error');
			},
			onSuccess: (res) => {
				if (res.data) {
					queryClient.invalidateQueries({ queryKey: ['get-all-QA'] });
					getToast('Hủy thành công!', 'success');
				}
			},
		});
	};

	const handleDelete = (row) => {
		mutate(
			{ id: row.id },
			{
				onError: (res) => {
					getToast(res.response?.data, 'error');
				},
				onSuccess: (res) => {
					if (res.data) {
						if (row.img.includes('firebase')) {
							deleteFirebaseImgPath(row.img);
						}
						if (AdminData) {
							queryClient.invalidateQueries({ queryKey: ['get-all-QA'] });
						} else {
							queryClient.invalidateQueries({ queryKey: ['get-all-QA-user'] });
						}
						getToast('Cập nhật thành công!', 'success');
					}
				},
			},
		);
	};
	let data = AdminData || res;
	console.log(AdminData, res);

	if ((!AdminData && (!res || isLoading)) || (AdminData && AdminLoading)) {
		return (
			<SkeletonTypography
				styles='w-full'
				loading
			/>
		);
	}
	return (
		<Paper
			sx={{ width: '100%', overflow: 'hidden' }}
			className='mb-10'
		>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table
					stickyHeader
					aria-label='sticky table'
				>
					<TableHead>
						<TableRow>
							{columns.map((column, index) => (
								<TableCell
									key={index}
									style={{ minWidth: 160 }}
									className='whitespace-nowrap'
								>
									{column}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
							return (
								<TableRow
									hover
									role='checkbox'
									tabIndex={-1}
									key={row.id}
								>
									<TableCell>
										{row.img ? (
											<img
												src={row.img}
												alt=''
												className='object-cover w-14 h-14'
											/>
										) : null}
									</TableCell>
									<TableCell>{row.content}</TableCell>
									<TableCell>{row.likes.length}</TableCell>
									<TableCell>{row.commentsEntities.length}</TableCell>
									<TableCell>{dayjs(row.createdAt).format('DD/MM/YYYY')}</TableCell>
									<TableCell>
										{AdminData && (
											<ButtonWrapper
												styles='!bg-red-500 ml-2'
												isLoading={updateLoading}
												onClick={() => handleCancel(row)}
											>
												Hủy
											</ButtonWrapper>
										)}
										<ButtonWrapper
											styles='!bg-red-500 ml-2'
											isLoading={delLoading}
											onClick={() => handleDelete(row)}
										>
											Xóa
										</ButtonWrapper>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component='div'
				count={data.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
};

export default QADash;

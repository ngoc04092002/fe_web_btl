import { ArrowLeftOutlined, DeleteOutlined } from '@ant-design/icons';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import React, { useContext, useState } from 'react';

import Loading from '@/components/Loading';
import { AuthContext } from '@/context/AuthProvider';
import { FetchApiGetClientFeedbackReportInfo } from '@/hooks/fetchApiFeedback';
import { deleteClientFeedback } from '@/infrastructure/feedbackAction';
import { IClientFeedback } from '@/types/pages/IDashBoard';
import { IUser } from '@/types/pages/types';
import { getToast } from '@/utils/CustomToast';

type Props = {};

const ClientFeedback = (props: Props) => {
	const queryClient = useQueryClient();
	const { user } = useContext(AuthContext);
	const [detailShow, setDetailShow] = useState<IClientFeedback | {}>({});
	const { res, isLoading } = FetchApiGetClientFeedbackReportInfo((user as IUser)?.id as number);

	const { mutate, isLoading: loadingDel } = useMutation<
		AxiosResponse<boolean, any>,
		AxiosError,
		number,
		unknown
	>({
		mutationFn: (data) => {
			const res = deleteClientFeedback(data);
			return res;
		},
	});

	const handleClick = (value: IClientFeedback | {}) => {
		setDetailShow(value);
	};

	const handleDeleteFeedback = (id: number) => {
		mutate(id, {
			onError: (res) => {
				getToast('', 'network bad');
			},
			onSuccess: (res) => {
				if (res.data) {
					getToast('Xóa thành công!', 'success');
					queryClient.invalidateQueries({ queryKey: ['get-client-feedback'] });
					setDetailShow({});
				} else {
					getToast('Đã có lỗi!', 'error');
				}
			},
		});
	};

	if (isLoading) {
		return <Loading />;
	}
	return (
		<>
			{!Object.keys(detailShow).length ? (
				<TableContainer
					component={Paper}
					className='mb-12'
				>
					<Table sx={{ minWidth: 650 }}>
						<TableHead>
							<TableRow>
								<TableCell className='whitespace-nowrap'>Tên khách hàng</TableCell>
								<TableCell
									align='left'
									className='whitespace-nowrap'
								>
									Số điện thoại
								</TableCell>
								<TableCell align='left'>Email</TableCell>
								<TableCell
									align='left'
									className='whitespace-nowrap'
								>
									Nội dung
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{res &&
								!!res.length &&
								res.map((r) => (
									<TableRow
										key={r.name}
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
										className='cursor-pointer hover:bg-[#ebeaea]'
										onClick={() => handleClick(r)}
									>
										<TableCell
											component='th'
											scope='row'
											className='w-[25%]'
										>
											{r.name}
										</TableCell>
										<TableCell
											className='w-[25%]'
											align='left'
										>
											{r.phone}
										</TableCell>
										<TableCell
											className='w-[25%]'
											align='left'
										>
											{r.email}
										</TableCell>
										<TableCell
											align='left'
											className='break-all vertical-2 w-full h-[60px]'
										>
											{r.content}
										</TableCell>
									</TableRow>
								))}
						</TableBody>
					</Table>
				</TableContainer>
			) : (
				<div className='bg-white w-full p-4 rounded mb-12 shadow-lg'>
					<div className='flex items-center justify-between mb-10'>
						<ArrowLeftOutlined
							onClick={() => handleClick({})}
							className='text-xl cursor-pointer hover:bg-[#ebeaea] rounded-[50%] py-2 px-3'
						/>
						<DeleteOutlined
							onClick={() => handleDeleteFeedback((detailShow as IClientFeedback)?.id as number)}
							className='text-xl cursor-pointer hover:bg-[#ebeaea] rounded-[50%] py-2 px-3'
						/>
					</div>
					{loadingDel ? <Loading /> : <p>{(detailShow as IClientFeedback)?.content}</p>}
				</div>
			)}
		</>
	);
};

export default ClientFeedback;

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableContainer,
	TableRow,
	Paper,
	tableCellClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react';

import Loading from '@/components/Loading';
import ButtonWrapper from '@/components/helpers/ButtonWrapper';
import { AuthContext } from '@/context/AuthProvider';
import { GetOrders } from '@/hooks/fetchApiOrders';
import { deleteOrder, verifyRent } from '@/infrastructure/orderAction';
import { IBill } from '@/types/components/Order/type';
import { IUser } from '@/types/pages/types';
import { getToast } from '@/utils/CustomToast';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

type Props = {};

const OrdersDash = (props: Props) => {
	const queryClient = useQueryClient();
	const { user } = useContext(AuthContext);
	const [values, setValues] = useState<IBill[] | []>([]);

	const { mutate: mutateDel, isLoading: delLoading } = useMutation<
		AxiosResponse<boolean, any>,
		AxiosError,
		{ id: number },
		unknown
	>({
		mutationFn: (Data) => {
			const res = deleteOrder(Data.id);
			return res;
		},
	});

	const { mutate: mutateVerify, isLoading: verifyLoading } = useMutation<
		AxiosResponse<boolean, any>,
		AxiosError,
		{ billId: number; rid: number },
		unknown
	>({
		mutationFn: (Data) => {
			const res = verifyRent(Data.billId, Data.rid);
			return res;
		},
	});

	const { res, isLoading } = GetOrders((user as IUser)?.id as number);

	useEffect(() => {
		if (res) {
			setValues(res);
		}
	}, [res]);

	if (!user) {
		return <></>;
	}

	if (isLoading) {
		return <Loading />;
	}

	const handleDeleteOrder = (id: number) => {
		const newData = values.filter((nd) => nd.id !== id);
		mutateDel(
			{ id },
			{
				onError: (res) => {
					getToast('', 'network bad');
				},
				onSuccess: (res) => {
					if (res.data) {
						getToast('Hủy đơn đặt!', 'success');
						setValues(newData);
					} else {
						getToast('Đã có lỗi!', 'error');
					}
				},
			},
		);
	};
	const handleVerify = (billId: number, rid: number) => {
		const newData = values.filter((nd) => nd.id !== billId);
		mutateVerify(
			{ billId, rid },
			{
				onError: (res) => {
					getToast('', 'network bad');
				},
				onSuccess: (res) => {
					if (res.data) {
						queryClient.invalidateQueries({ queryKey: ['get-post_room-user', { type: 'done' }] });
						getToast('Đã cập nhật trạng thái phòng', 'success');
						setValues(newData);
					} else {
						getToast('Đã có lỗi!', 'error');
					}
				},
			},
		);
	};

	return (
		<TableContainer
			component={Paper}
			className='mb-10'
		>
			<Table
				sx={{ minWidth: 700 }}
				aria-label='customized table'
			>
				<TableHead>
					<TableRow>
						<StyledTableCell>Phòng</StyledTableCell>
						<StyledTableCell>Tên</StyledTableCell>
						<StyledTableCell align='right'>Số điện thoại</StyledTableCell>
						<StyledTableCell align='right'>Ngày đặt</StyledTableCell>
						<StyledTableCell align='center'>Hành động</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{values &&
						values.map((row) => (
							<StyledTableRow key={row.id}>
								<StyledTableCell align='left'>
									<a
										href={`/room-item/${row.rid}`}
										className='color-main'
									>
										Xem
									</a>
								</StyledTableCell>
								<StyledTableCell
									component='th'
									scope='row'
								>
									{row.name}
								</StyledTableCell>
								<StyledTableCell align='right'>{row.phone}</StyledTableCell>
								<StyledTableCell align='right'>
									{dayjs(row.createdAt).format('DD/MM/YYYY')}
								</StyledTableCell>
								<StyledTableCell align='center'>
									<ButtonWrapper
										styles='!bg-red-500 mr-2'
										isLoading={delLoading}
										onClick={() => handleDeleteOrder(row.id as number)}
									>
										Hủy
									</ButtonWrapper>
									<ButtonWrapper
										isLoading={verifyLoading}
										onClick={() => handleVerify(row.id as number, row.rid as number)}
									>
										Cho thuê
									</ButtonWrapper>
								</StyledTableCell>
							</StyledTableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default OrdersDash;

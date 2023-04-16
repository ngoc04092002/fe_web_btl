import { useQuery } from '@tanstack/react-query';
import React from 'react';

import TableDash from '@/components/DashBoardComponents/Table/TableDash';
import Loading from '@/components/Loading/Loading';
import { getAllEWaitingRs, getAllFeedbacks } from '@/infrastructure/dashboardActions';
import { getToast } from '@/utils/CustomToast';

const headCellsFeedback = [
	{
		id: 'id',
		numeric: false,
		disablePadding: true,
		label: 'ID',
	},
	{
		id: 'feedback',
		numeric: true,
		disablePadding: true,
		label: 'Feedback',
	},
	{
		id: 'type',
		numeric: true,
		disablePadding: false,
		label: 'Type',
	},
];
const headCellsForgotPassword = [
	{
		id: 'id',
		numeric: false,
		disablePadding: true,
		label: 'ID',
	},
	{
		id: 'user_email',
		numeric: true,
		disablePadding: false,
		label: 'Email',
	},
];

export default function FeedBackForgotPassword() {
	const {
		data: rowsFeedback,
		isLoading: loadingFeedback,
		error: errorFeedback,
	} = useQuery({
		queryKey: ['get-all-feedback'],
		queryFn: () => getAllFeedbacks(),
		staleTime: 10 * 60 * 1000,
		cacheTime: 20 * 60 * 1000,
	});
	const {
		data: rowsForgotPassword,
		isLoading: loadingEWaitingR,
		error: errorForgotPassword,
	} = useQuery({
		queryKey: ['get-all-ewaitingr'],
		queryFn: () => getAllEWaitingRs(),
		staleTime: 10 * 60 * 1000,
		cacheTime: 20 * 60 * 1000,
	});
	if (errorForgotPassword || errorFeedback) {
		getToast('', 'network bad');
		return;
	}

	return (
		<section>
			{loadingFeedback ? (
				<Loading />
			) : (
				<TableDash
					rows={rowsFeedback?.data || []}
					headCells={headCellsFeedback}
					title='Các ý kiến'
					pathDelete='delete-feedback-ids'
					pathGet='get-all-feedback'
				/>
			)}
			{loadingEWaitingR ? (
				<Loading />
			) : (
				<TableDash
					rows={rowsForgotPassword?.data || []}
					headCells={headCellsForgotPassword}
					title='Quên mật khẩu'
					pathDelete='delete-forgotpass-ids'
					pathGet='get-all-ewaitingr'
				/>
			)}
		</section>
	);
}

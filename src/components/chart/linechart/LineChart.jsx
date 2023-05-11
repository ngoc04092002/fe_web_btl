import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useLocation } from 'react-router-dom';

import Loading from '@/components/Loading';
import { FetchApiGetFeedbackReportInfo } from '@/hooks/fetchApiFeedback';

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const LineChart = () => {
	const location = useLocation();
	const pathname = location.pathname;
	const splitPathname = pathname.split('/');
	const isAdmin = splitPathname.at(-1) === 'admin';
	const { res, isLoading } = FetchApiGetFeedbackReportInfo(isAdmin);
	console.log(res);
	const smiles = new Map();
	const meh = new Map();
	const frown = new Map();
	if (res) {
		res?.smiles?.map((s) => smiles.set(s.month, s.amount));
		res?.meh?.map((s) => meh.set(s.month, s.amount));
		res?.frown?.map((s) => frown.set(s.month, s.amount));
	}

	const data1 = isAdmin ? months.map((m) => (smiles.get(m) ? smiles.get(m) : 0)) : [];
	const data2 = isAdmin ? months.map((m) => (meh.get(m) ? meh.get(m) : 0)) : [];
	const data3 = isAdmin ? months.map((m) => (frown.get(m) ? frown.get(m) : 0)) : [];

	const config = {
		data: {
			labels: months,
			datasets: [
				{
					label: isAdmin ? 'Hài lòng' : 'Tuần',
					backgroundColor: '#f8fdff',
					borderColor: '#f8fdff',
					fill: false,
					data: data1,
				},
				{
					label: isAdmin ? 'Bình thường' : 'Tháng',
					backgroundColor: '#8965e0',
					borderColor: '#8965e0',
					fill: false,
					data: data2,
				},
				{
					label: isAdmin ? 'Không hài lòng' : 'Năm',
					backgroundColor: '#2f45ff',
					borderColor: '#2f45ff',
					fill: false,
					data: data3,
				},
			],
		},
		options: {
			plugins: {
				title: {
					display: true,
					text: 'Tiền hàng tháng',
				},
			},
			// scales:{

			// }
		},
	};
	if (isLoading) {
		return <Loading />;
	}
	return (
		<div className='w-full bg-[#172b4d] rounded-lg mb-8'>
			<Line
				className='p-3 rounded-lg '
				data={config.data}
				options={config.options}
				style={{ minHeight: '550px' }}
			/>
		</div>
	);
};

export default LineChart;

import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useLocation } from 'react-router-dom';

const LineChart = () => {
	const location = useLocation();
	const pathname = location.pathname;
	const splitPathname = pathname.split('/');
	const isAdmin = splitPathname.at(-1) === 'admin';

	const config = {
		data: {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: isAdmin ? 'Hài lòng' : 'Tuần',
					backgroundColor: '#f8fdff',
					borderColor: '#f8fdff',
					fill: false,
					data: [10, 20, 30, 40, 100, 50, 150, 300, 200, 500],
				},
				{
					label: isAdmin ? 'Bình thường' : 'Tháng',
					backgroundColor: '#8965e0',
					borderColor: '#8965e0',
					fill: false,
					data: [50, 300, 100, 450, 150, 200, 300],
				},
				{
					label: isAdmin ? 'Không hài lòng' : 'Năm',
					backgroundColor: '#2f45ff',
					borderColor: '#2f45ff',
					fill: false,
					data: [40, 60, 50, 40, 300, 200, 150],
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

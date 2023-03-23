import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
const config = {
	data: {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'Tháng',
				backgroundColor: '#f8fdff',
				borderColor: '#f8fdff',
				fill: false,
				data: [10, 20, 30, 40, 100, 50, 150, 300, 200, 500],
			},
			{
				label: 'Tuần',
				backgroundColor: '#8965e0',
				borderColor: '#8965e0',
				fill: false,
				data: [50, 300, 100, 450, 150, 200, 300],
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

const LineChart = () => {
	return (
		<Line
			className='p-3 rounded-lg '
			data={config.data}
			options={config.options}
			style={{ minHeight: '550px' }}
		/>
	);
};

export default LineChart;

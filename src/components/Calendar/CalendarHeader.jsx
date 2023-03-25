import dayjs from 'dayjs';
import React, { useContext } from 'react';

import GlobalContext from '@/context/GlobalContext';
import { getImage } from '@/utils/CustomImagePath';

export default function CalendarHeader() {
	const { monthIndex, setMonthIndex } = useContext(GlobalContext);
	function handlePrevMonth() {
		setMonthIndex(monthIndex - 1);
	}
	function handleNextMonth() {
		setMonthIndex(monthIndex + 1);
	}
	function handleReset() {
		setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
	}
	return (
		<header className='px-4 py-2 flex items-center'>
			<img
				src={getImage('logo.png')}
				alt='calendar'
				className='mr-2 w-12 h-12'
			/>
			<h1 className='mr-10 text-xl text-gray-500 fond-bold'>Lịch cá nhân</h1>
			<button
				onClick={handleReset}
				className='border rounded py-2 px-4 mr-5'
			>
				Hôm nay
			</button>
			<button onClick={handlePrevMonth}>
				<span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
					Tháng trước
				</span>
			</button>
			<button onClick={handleNextMonth}>
				<span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
					Tháng tiếp
				</span>
			</button>
			<h2 className='ml-4 text-xl text-gray-500 font-bold'>
				{dayjs(new Date(dayjs().year(), monthIndex)).locale('vi').format('MMMM YYYY')}
			</h2>
		</header>
	);
}

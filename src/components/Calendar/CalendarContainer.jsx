import React, { useState, useContext, useEffect } from 'react';

import CalendarHeader from './CalendarHeader';
import EventModal from './EventModal';
import Month from './Month';
import SidebarCalendar from './SidebarCalendar';

import GlobalContext from '@/context/GlobalContext';
import { getMonth } from '@/utils/CustomMonthDayjs';
import 'dayjs/locale/vi';

function CalendarContainer() {
	const [currenMonth, setCurrentMonth] = useState(getMonth());
	const { monthIndex, showEventModal } = useContext(GlobalContext);
	useEffect(() => {
		setCurrentMonth(getMonth(monthIndex));
	}, [monthIndex]);
	return (
		<div className='bg-white w-full h-full rounded-md mb-8 p-4 shadow-md'>
			{showEventModal && <EventModal />}

			<div className='h-full flex flex-col'>
				<CalendarHeader />
				<div className='flex flex-1'>
					<SidebarCalendar />
					<Month month={currenMonth} />
				</div>
			</div>
		</div>
	);
}

export default CalendarContainer;

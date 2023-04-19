import React, { useContext } from 'react';

import { PlusCalendar } from '@/assets/icons';
import GlobalContext from '@/context/GlobalContext';

export default function CreateEventButton() {
	const { setShowEventModal } = useContext(GlobalContext);
	const handleClickCreate = () => {
		setShowEventModal(true);
	};
	return (
		<button
			onClick={handleClickCreate}
			className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'
		>
			<PlusCalendar />
			<span className='pl-3 pr-7'> Tạo ghi chú</span>
		</button>
	);
}

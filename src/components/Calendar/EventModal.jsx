import React, { useContext, useState } from 'react';

import GlobalContext from '@/context/GlobalContext';

const labelsClasses = [
	{
		color: 'indigo',
		i18: 'Xanh đậm',
	},
	{
		color: 'gray',
		i18: 'Xám',
	},
	{
		color: 'green',
		i18: 'Xanh lá cây',
	},
	{
		color: 'blue',
		i18: 'Xanh dương',
	},
	{
		color: 'red',
		i18: 'Đỏ',
	},
	{
		color: 'purple',
		i18: 'Tím',
	},
];

export default function EventModal() {
	const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
		useContext(GlobalContext);

	const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : '');
	const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : '');
	const [selectedLabel, setSelectedLabel] = useState(
		selectedEvent
			? labelsClasses.find((lbl) => lbl.color === selectedEvent.label)
			: labelsClasses[0],
	);

	function handleSubmit(e) {
		e.preventDefault();
		const calendarEvent = {
			title,
			description,
			i18: selectedLabel.i18,
			label: selectedLabel.color,
			day: daySelected.valueOf(),
			id: selectedEvent ? selectedEvent.id : Date.now(),
		};
		if (selectedEvent) {
			dispatchCalEvent({ type: 'update', payload: calendarEvent });
		} else {
			dispatchCalEvent({ type: 'push', payload: calendarEvent });
		}

		setShowEventModal(false);
	}
	return (
		<div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>
			<form className='bg-white rounded-lg shadow-2xl w-fit'>
				<header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
					<span className='material-icons-outlined text-gray-400'></span>
					<div>
						{selectedEvent && (
							<span
								onClick={() => {
									dispatchCalEvent({
										type: 'delete',
										payload: selectedEvent,
									});
									setShowEventModal(false);
								}}
								className='material-icons-outlined text-gray-400 cursor-pointer mr-3'
							>
								Xóa
							</span>
						)}
						<button onClick={() => setShowEventModal(false)}>
							<span className='material-icons-outlined text-gray-400'>Đóng</span>
						</button>
					</div>
				</header>
				<div className='p-3'>
					<div className='grid grid-cols-1/5 items-end gap-y-7'>
						<div></div>
						<input
							type='text'
							name='title'
							placeholder='Tiêu đề'
							value={title}
							required
							className=' pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'
							onChange={(e) => setTitle(e.target.value)}
						/>
						<span className='material-icons-outlined text-gray-400'>Lịch:</span>
						<p>{daySelected.format('dddd, MMMM DD')}</p>
						<span className='material-icons-outlined text-gray-400'>Miêu tả:</span>
						<input
							type='text'
							name='description'
							placeholder='Thêm miêu tả'
							value={description}
							required
							className='pt-3 border-solid text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'
							onChange={(e) => setDescription(e.target.value)}
						/>
						<span className='material-icons-outlined text-gray-400 whitespace-nowrap mr-2'>
							Đánh dấu:
						</span>
						<div className='flex gap-x-2'>
							{labelsClasses.map((lblClass, i) => (
								<span
									key={i}
									onClick={() => setSelectedLabel(lblClass)}
									className={`bg-${lblClass.color}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
								>
									{selectedLabel.color === lblClass.color && (
										<span className='material-icons-outlined text-white text-sm'>v</span>
									)}
								</span>
							))}
						</div>
					</div>
				</div>
				<footer className='flex justify-end border-t p-3 mt-5'>
					<button
						type='submit'
						onClick={handleSubmit}
						className='bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white'
					>
						Lưu
					</button>
				</footer>
			</form>
		</div>
	);
}

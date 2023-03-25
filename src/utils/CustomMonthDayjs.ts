import dayjs from 'dayjs';

export function getMonth(month = dayjs().locale('vi').month()) {
	month = Math.floor(month);
	const year = dayjs().locale('vi').year();
	const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).locale('vi').day();
	let currentMonthCount = 0 - firstDayOfTheMonth;
	const daysMatrix = new Array(5).fill([]).map(() => {
		return new Array(7).fill(null).map(() => {
			currentMonthCount++;
			return dayjs(new Date(year, month, currentMonthCount));
		});
	});
	return daysMatrix;
}

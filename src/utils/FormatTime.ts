import dayjs from 'dayjs';
import 'dayjs/locale/vi'; // Import locale nếu bạn muốn sử dụng ngôn ngữ khác
import relativeTime from 'dayjs/plugin/relativeTime'; // Import plugin relativeTime

dayjs.locale('vi'); // Thiết lập ngôn ngữ mặc định
dayjs.extend(relativeTime); // Sử dụng plugin relativeTime để sử dụng tính năng from now

export function getTimeAgo(createdAt: string) {
	const date = dayjs(createdAt);
	const day = Math.ceil(dayjs().diff(date, 'day', true));
	const month = Math.ceil(dayjs().diff(date, 'month', true));
	const year = Math.ceil(dayjs().diff(date, 'year', true));
	const hour = Math.ceil(dayjs().diff(date, 'hour', true));
	const minute = Math.ceil(dayjs().diff(date, 'minute', true));
	const second = Math.ceil(dayjs().diff(date, 'second', true));

	if (second <= 60) {
		return `${second} giây trước`;
	}
	if (minute <= 60) {
		return `${minute} phút trước`;
	}
	if (hour <= 24) {
		return `${hour} giờ trước`;
	}
	if (day <= 31) {
		return `${day} ngày trước`;
	}
	if (month <= 12) {
		return `${month} tháng trước`;
	}
	return `${year} năm trước`;
}

import dayjs from 'dayjs';
import 'dayjs/locale/vi'; // Import locale nếu bạn muốn sử dụng ngôn ngữ khác
import relativeTime from 'dayjs/plugin/relativeTime'; // Import plugin relativeTime

dayjs.locale('vi'); // Thiết lập ngôn ngữ mặc định
dayjs.extend(relativeTime); // Sử dụng plugin relativeTime để sử dụng tính năng from now

export function getTimeAgo(createdAt: string) {
	const date = dayjs(createdAt);
	const day = date.diff(dayjs(), 'day', true); // Tính số ngày chênh lệch giữa hai ngày
	const month = date.diff(dayjs(), 'month', true); // Tính số ngày chênh lệch giữa hai ngày
	const year = date.diff(dayjs(), 'year', true); // Tính số ngày chênh lệch giữa hai ngày
	const hour = date.diff(dayjs(), 'hour', true); // Tính số ngày chênh lệch giữa hai ngày
	const minute = date.diff(dayjs(), 'minute', true); // Tính số ngày chênh lệch giữa hai ngày

	console.log(date.fromNow(true), day, month, year, hour, minute); // Kết quả: "trong 1 năm"
}

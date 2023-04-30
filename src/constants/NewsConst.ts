import {
	INewsImage,
	INewsMainData,
	INewsPieceData,
	ITopicNewsData,
} from '@/types/components/News/types';

export const topicNewsData: ITopicNewsData[] = [
	{
		to: 'tin-tuc-bds',
		topic: 'Tin tức bds',
		child: [
			{
				to: 'thi-truong-nha-dat',
				type: 'Thị trường nhà đất',
			},
			{ to: 'tai-chinh-bds', type: 'Tài chính BĐS' },
			{
				to: 'phan-tich-va-nhan-dinh',
				type: 'Phân tích - nhận định',
			},
		],
	},
	{
		to: 'kien-thuc-bds',
		topic: 'Kiến thức bds',
		child: [
			{ to: 'xay-dung', type: 'Xây dựng' },
			{ to: 'kien-truc', type: 'Kiến trúc' },
			{ to: 'nha-cua-sao', type: 'Nhà của sao' },
		],
	},
	{ to: 'phong-thuy', topic: 'Phong thuỷ', child: [] },
	{
		to: 'loi-khuyen',
		topic: 'Lời khuyên',
		child: [
			{ to: 'goc-dau-tu', type: 'Góc đầu tư' },
			{ to: 'cho-nguoi-thue', type: 'Cho người thuê' },
		],
	},
	{
		to: 'luat-nha-dat',
		topic: 'luật nhà đất',
		child: [
			{ to: 'quyen-so-huu', type: 'Quyền sở hữu' },
			{ to: 'tranh-chap', type: 'Tranh chấp' },
			{
				to: 'nghia-vu-tai-chinh',
				type: 'Nghĩa vụ tài chính',
			},
		],
	},
];

export const topicNewsDatai18: { [key: string]: string } = {
	'search': 'Tìm kiếm',
	'thi-truong-nha-dat': 'Thị trường nhà đất',
	'phan-tich-va-nhan-dinh': 'Phân tích - nhận định',
	'tin-tuc-bds': 'Tin tức bất động sản',
	'nghia-vu-tai-chinh': 'Nghĩa vụ tài chính',
	'tai-chinh-bds': 'Tài chính bất động sản',
	'xay-dung': 'Xây dựng',
	'quyen-so-huu': 'Quyền sở hữu',
	'tranh-chap': 'Tranh chấp',
	'luat-nha-dat': 'Luật nhà đất',
	'kien-truc': 'Kiến trúc',
	'kien-thuc-bds': 'Kiến thức bất động sản',
	'phong-thuy': 'Phong thủy',
	'goc-dau-tu': 'Góc đầu tư',
	'nha-cua-sao': 'Nhà của sao',
	'cho-nguoi-thue': 'Cho người thuê',
	'loi-khuyen': 'Lời khuyên',
};

export const desTopicNewsData: { [key: string]: string } = {
	'tin-tuc-bds':
		'Kênh thông tin thị trường bất động sản, mua bán, cho thuê nhà đất, căn hộ chung cư, nhà mặt tiền, nhà mặt ngõ, đất nền, đất chia lô,…',
	'thi-truong-nha-dat':
		'Cập nhật thông tin bất động sản thật, thông tin mua bán đất, mua bán nhà uy tín, dự án nổi bật, thông tin quy hoạch mới nhất',
	'tai-chinh-bds':
		'Chính sách ngân hàng, thông tin lãi suất, tài chính bất động sản, mua nhà đất trả góp, vay vốn đầu tư',
	'phan-tich-va-nhan-dinh':
		'Báo cáo, phân tích, nhận định minh bạch về thị trường bất động sản toàn quốc, góc nhìn chuyên gia, thông tin chính xác về giá nhà đất, dự án, cho thuê, mua bán nhà đất… ',
	'nghia-vu-tai-chinh':
		'Chuyên trang cung cấp thông tin về nghĩa vụ tài chính trong bất động sản, luôn được cập nhật thông tin một cách đầy đủ, nhanh chóng và mới nhất.',
	'xay-dung':
		'Kênh thông tin xây dựng, căn hộ đẹp, mẫu thiết kế đẹp và trang trí nội thất, ngoại thất & vật liệu xây dựng',
	'quyen-so-huu':
		'Trang chuyên cung cấp thông tin về luật sở hữu – bất động sản cho mọi người, luôn luôn được cập nhật nhanh chóng, đầy đủ, tiện lợi.',
	'tranh-chap':
		'Trang chuyên cung cấp các thông tin, tư vấn, phương hướng giải quyết về các vấn đề tranh chấp quyền sở hữu bất động sản.',
	'luat-nha-dat':
		'Luật nhà đất, pháp lý bất động sản và hàng trăm loại thủ tục hành chính chuẩn xác nhất năm 2022. Đây là trang chuyên mục cung cấp các bộ luật mới nhất, gợi ý hướng giải quyết cho nhiều vấn đề liên quan đến mua bán nhà đất, mua bán căn hộ chung cư, Cho thuê nhà đất, sang nhượng mặt bằng,… giúp bạn giao dịch thuận lợi, an toàn.',
	'kien-truc':
		'Kênh thông tin kiến trúc nhà đẹp, căn hộ trong mơ, phong cách thiết kế nội thất, ngoại thất theo xu hướng mới nhất',
	'kien-thuc-bds':
		'Kênh thông tin kiến thức bất động sản nhà đẹp, căn hộ đẹp, mẫu thiết kế và trang trí nội thất, ngoại thất theo kiến trúc hiện đại, hợp phong thuỷ',
	'phong-thuy':
		'Kênh thông tin phong thuỷ bất động sản cần thiết cho mua bán nhà đất, cho thuê bất động sản, chi tiết về phòng ngủ, phòng bếp, phòng khách,…',
	'goc-dau-tu':
		'u hướng đầu tư bất động sản, nhà ở, quy hoạch bất động sản, giao thông, khu dân cư, khu công nghiệp, khu nghỉ dưỡng',
	'nha-cua-sao':
		'Xem nhà đẹp của các sao việt, không gian đẹp của sao Việt nổi tiếng của showbiz, tận mắt ngắm sân vườn, kiến trúc nhà của những ngôi sao lớn',
	'cho-nguoi-thue':
		'Chuyên mục dành cho những lời khuyên thiết thực dành cho người đang có nhu cầu thuê nhà. Tổng hợp lời khuyên từ việc thuê phòng trọ, căn hộ, nhà nguyên căn.',
	'loi-khuyen':
		'Chuyên đề kiến thức, lời khuyên, lưu ý, bí kíp bỏ túi về đầu tư, mua bán nhà đất, bất động sản cho thuê',
};

export const initValueNewsMain: INewsMainData = {
	topic: '',
	type: '',
	title: '',
	des: '',
	img: '',
};

export const initValueNewsPiece: Omit<INewsPieceData, 'img' | 'body'> = {
	title: '',
	caption: '',
	des: '',
};

export const initValueImg: INewsImage = {
	url: '',
	file: null,
};

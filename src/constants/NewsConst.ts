import { ITopicNewsData } from '@/types/components/News/types';

export const topicNewsData: ITopicNewsData[] = [
	{
		to: '/',
		topic: 'Tin tức bds',
		child: [
			{ to: '/news', title: 'Thị trường nhà đất' },
			{ to: '/news', title: 'Tài chính BĐS' },
			{ to: '/news', title: 'Phân tích - nhận định' },
		],
	},
	{
		to: '/news',
		topic: 'Kiến thức bds',
		child: [
			{ to: '/news', title: 'Xây dựng' },
			{ to: '/news', title: 'Kiến trúc' },
			{ to: '/news', title: 'Nhà của sao' },
		],
	},
	{ to: '/news', topic: 'Phong thuỷ', child: [] },
	{
		to: '/news',
		topic: 'Lời khuyên',
		child: [
			{ to: '/news', title: 'Góc đầu tư' },
			{ to: '/news', title: 'Cho người thuê' },
		],
	},
	{
		to: '/news',
		topic: 'luật nhà đất',
		child: [
			{ to: '/news', title: 'Quyền sở hữu' },
			{ to: '/news', title: 'Tranh chấp' },
			{ to: '/news', title: 'Nghĩa vụ tài chính' },
		],
	},
];

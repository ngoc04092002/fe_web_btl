import { FacebookOutlined } from '@ant-design/icons';
import React, { FC } from 'react';

import TitleNews from '@/components/helpers/TitleNews';
import { getImage } from '@/utils/CustomImagePath';

type Props = {};

const footerData = [
	{
		title: 'Lời khuyên',
		listAdvice: [
			{
				img: 'https://cdnnews.mogi.vn/news/wp-content/uploads/2018/01/mua-nha-ho-chi-minh-1-485x360.jpg',
				des: 'Quyết không về quê ăn Tết, tôi đã mua được nhà ở Tp. Hồ Chí Minh',
			},
			{
				img: 'https://cdnnews.mogi.vn/news/wp-content/uploads/2018/08/luu-y-khi-thue-phong-tro-mogi-485x360.jpg',
				des: 'Thuê phòng trọ và 10 điều nhất định phải lưu ý!',
			},
			{
				img: 'https://cdnnews.mogi.vn/news/wp-content/uploads/2018/04/kinh-nghiem-thue-phong-tro-cho-tan-sinh-vien-hinh-anh-2-485x360.jpg',
				des: 'Ở ký túc xá hay thuê trọ: băn khoăn của sinh viên năm nhất',
			},
		],
	},
	{
		title: 'Tin xem nhiều',
		listAdvice: [
			{
				img: 'https://cdnnews.mogi.vn/news/wp-content/uploads/2022/01/14111840/hat-xi-hoi-2-696x392.jpg',
				des: 'Hắt xì hơi liên tục 1, 2, 3,… cái theo ngày giờ là điềm gì?',
			},
			{
				img: 'https://cdnnews.mogi.vn/news/wp-content/uploads/2022/01/Cocvaonhaladiemgi-0_result-1-696x392.jpg',
				des: 'Cóc vào nhà là điềm gì và ý nghĩa trong phong thủy?',
			},
			{
				img: 'https://cdnnews.mogi.vn/news/wp-content/uploads/2019/03/ngu-ma-cu-lien-tuc-bi-bong-de-chinh-la-do-phong-thuy-nha-o-co-van-de-1-696x392.jpg',
				des: 'Bóng đè là gì? 10 cách chống bóng đè hiệu quả nhất theo phong thuỷ',
			},
		],
	},
];

const contentMain: { topic: string; amount: number }[] = [
	{ topic: 'Thị trường', amount: 1178 },
	{ topic: 'Kiến thức bất động sản', amount: 853 },
	{ topic: 'Phong thuỷ', amount: 113 },
	{ topic: 'Lời khuyên', amount: 200 },
	{ topic: 'Kiến trúc', amount: 100 },
	{ topic: 'Góc Đầu Tư', amount: 118 },
];

const FooterNews: FC<Props> = () => {
	return (
		<div className='flex flex-col mx-12'>
			<div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
				{footerData.map((f, index) => (
					<div
						className=' mb-4 flex flex-col'
						key={index}
					>
						<TitleNews title={f.title} />
						{f.listAdvice.map((fl) => (
							<a
								href='/news'
								className='mb-12'
								key={fl.img}
							>
								<ul className='flex justify-between'>
									<li className='w-[30%]'>
										<img
											src={fl.img}
											alt=''
											className='w-[90px] h-[60px] object-cover object-center'
										/>
									</li>
									<li className='w-[65%] hover:color-main text-white text-md transition-none'>
										<span>{fl.des}</span>
									</li>
								</ul>
							</a>
						))}
					</div>
				))}
				<div className=' mb-4 flex flex-col'>
					<TitleNews title='Nội dung chính' />
					{contentMain.map((c) => (
						<a
							href='/news'
							className='mb-2'
							key={c.topic}
						>
							<ul className='flex justify-between text-md text-white'>
								<li>
									<span>{c.topic}</span>
								</li>
								<li>
									<span>{c.amount}</span>
								</li>
							</ul>
						</a>
					))}
				</div>
			</div>
			<div className='flex items-start text-white lg:justify-around justify-between flex-wrap'>
				<div className='mb-8'>
					<a href='/'>
						<img
							src={getImage('branch.png')}
							alt='branch'
							className='h-32 w-40 object-cover object-center'
						/>
					</a>
				</div>
				<div className='mb-8'>
					<h1 className='text-2xl font-bold mb-4'>Về chúng tôi</h1>
					<ul>
						<li>Sinh viên Học viện Công nghệ Bưu chính viễn thông</li>
						<li>Hotline: 0338787233</li>
						<li>Email: NgocVV.B20CN476@stu.ptit.edu.vn</li>
					</ul>
				</div>
				<div className='mb-8'>
					<h1 className='text-2xl font-bold'>Theo dõi chúng tôi</h1>
					<ul>
						<li>
							<a
								href='https://www.facebook.com/profile.php?id=100009696701104'
								target='_blank'
								rel='noreferrer'
								className='text-[40px]'
							>
								<FacebookOutlined />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default FooterNews;

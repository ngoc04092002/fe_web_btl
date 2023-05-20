import React from 'react';

import HeadTitle from '@/hooks/Head';
import { getImage } from '@/utils/CustomImagePath';

const steps = [
	'Bạn có thể tìm kiếm hoặc lựa chọn các kiểu như hình',
	'Các phòng sẽ hiển thị tương ứng với lựa chọn của bạn',
	'Thông tin chi tiết của phòng',
	'Sau khi lưu tin bạn có thể đặt phòng và nhập thông tương ứng',
];

const RentRoom = () => {
	HeadTitle('Induction - Rent');
	return (
		<section className='pb-20 pt-10 px-16'>
			<h1 className='text-center font-bold text-2xl mb-8'>Hướng dẫn thuê phòng</h1>
			{steps.map((st, index) => (
				<div
					key={index}
					className='mb-14'
				>
					<p className='font-bold text-xl'>
						<span className='color-main'>Bước {index + 1}:</span> {st}
					</p>
					<figure>
						<img
							src={getImage(`rent${index + 1}.png`)}
							alt=''
							className='w-[80%] h-[400px] m-auto'
						/>
					</figure>
				</div>
			))}
			<p className='font-bold text-lg'>
				Cảm ơn bạn đã dành thời gian cho website của chúng tôi, nếu bạn thấy không hài lòng về
				website của chúng tôi hãy phản hồi cho chúng tôi để chúng tôi cải thiện và phát triển hơn
				nữa ạ. Xin cảm ơn bạn!{' '}
			</p>
		</section>
	);
};

export default RentRoom;

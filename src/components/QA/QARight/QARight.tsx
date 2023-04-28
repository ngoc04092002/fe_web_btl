import React, { FC } from 'react';

type Props = {};

const QARight: FC<Props> = () => {
	return (
		<div className='bg-white p-4 rounded-lg'>
			<h1 className='font-bold mb-2'>Thống kê</h1>
			<div className='grid grid-cols-2 gap-1'>
				<div className='bg-[#f7f8f9] text-center p-2'>
					<p className='font-bold text-2xl'>2887</p>
					<p className='text-sm'>Câu hỏi</p>
				</div>
				<div className='bg-[#f7f8f9] text-center p-2'>
					<p className='font-bold text-2xl'>4593</p>
					<p className='text-sm'>Trả lời</p>
				</div>
				<div className='bg-[#f7f8f9] text-center p-2'>
					<p className='font-bold text-2xl'>4593</p>
					<p className='text-sm'>Thành viên</p>
				</div>
			</div>
		</div>
	);
};

export default QARight;

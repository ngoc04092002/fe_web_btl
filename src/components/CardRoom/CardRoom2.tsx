import React, { FC } from 'react';

import ButtonWrapper from '../helpers/ButtonWrapper/ButtonWrapper';

type Props = {
	styles?: string;
};

const CardRoom2: FC<Props> = ({ styles }) => {
	return (
		<div
			className={`flex items-center sm:flex-row flex-col justify-between shadow-006 p-3 rounded-md mb-4 ${styles}`}
		>
			<a
				href={'room-item/1'}
				className='flex items-center'
			>
				<div>
					<img
						src='https://tse3.mm.bing.net/th?id=OIP.BVVOMDDzgudoR-BL-YkrmwHaE7&pid=Api&P=0'
						alt=''
						className='w-72 h-56'
					/>
				</div>
				<div className='w-[80%] px-2 self-start'>
					<h1 className='font-bold text-lg vertical-1'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem, aut tempora,
						quisquam maiores reiciendis similique explicabo est, deleniti distinctio perspiciatis
						adipisci repellendus. Corrupti, maxime? Eius sed porro cum unde!
					</h1>
					<p className='text-sm'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis sit itaque ullam unde
						sequi possimus dicta,
					</p>
					<ul className='my-2'>
						<li>
							<span className='font-bold'>Số điện thoại:</span> <span>012322132</span>
						</li>
						<li>
							<span className='font-bold'>Kiểu phòng:</span> <span>Đơn</span>
						</li>
						<li>
							<span className='font-bold'>Giá:</span> <span>1 triệu</span>
						</li>
					</ul>
					<div className='flex items-center'>
						<span className='font-bold mr-4'>
							25 m<sub className='align-super'>2</sub>
						</span>
						<span className='mr-4'>12 WC</span>
						<span>3 VP</span>
					</div>
				</div>
			</a>
			<div className='sm:w-fit w-full'>
				<ButtonWrapper styles='!mb-0 sm:mt-0 mt-6 sm:!w-auto !w-[100%]'>Xoá</ButtonWrapper>
			</div>
		</div>
	);
};

export default CardRoom2;

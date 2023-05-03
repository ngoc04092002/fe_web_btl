import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import React, { FC, useContext, useState } from 'react';

import ButtonWrapper from '../helpers/ButtonWrapper/ButtonWrapper';

import HeadTitle from '@/hooks/Head';
import { BackDropContext } from '@/pages/Home';
import { IUser } from '@/types/pages/types';
import { getImage } from '@/utils/CustomImagePath';
import { formatPhoneNumber } from '@/utils/FormatPhoneNumber';

type Props = {
	userData: IUser | undefined;
};

const CardUserInfo: FC<Props> = ({ userData }) => {
	HeadTitle('Room Item');
	const { toggleBackDrop } = useContext(BackDropContext);
	const [showPhoneNumber, setShowPhoneNumber] = useState(false);
	const day = dayjs(userData?.created_at as unknown as string).day();
	const month = dayjs(userData?.created_at as unknown as string).month();
	const year = dayjs(userData?.created_at as unknown as string).year();

	const handleShowPhoneNumber = (e: any) => {
		e.stopPropagation();
		if (!showPhoneNumber) {
			setShowPhoneNumber(true);
		}
	};

	return (
		<div className='shadow-026 p-3 rounded-xl cus-screen:col-span-1 cus-screen:block hidden'>
			<div className='flex items-center p-4 border-0 border-b border-solid border-[#ccc]'>
				<div>
					<img
						src={userData?.avatar || getImage('user.png')}
						alt='user'
						className='w-[48px] h-[48px] mr-4 rounded-full'
					/>
				</div>
				<div>
					<h1 className='text-[#3c4146] font-bold text-lg'>{userData?.username}</h1>
					<p className='text-[#657786] text-sm'>
						{`Đã tham gia: ngày ${day} tháng ${month} năm ${year}`}
					</p>
				</div>
			</div>
			<div className='flex flex-col'>
				<ButtonWrapper styles='w-full !bg-white my-2 border border-solid border-[#01adba] rounded-md'>
					<div className='flex items-center justify-between flex-wrap'>
						<p className='w-fit'>
							<PhoneOutlined className='rotate-90 text-[#01adba] align-baseline' />
							<span className='text-[#222] hover:text-[#01adba] font-medium'>
								{formatPhoneNumber(userData?.sdt || '0338787233', showPhoneNumber)}
							</span>
						</p>
						<p
							className='text-[#01adba] font-semibold text-base w-fit'
							onClick={handleShowPhoneNumber}
						>
							Bấm để hiện số
						</p>
					</div>
				</ButtonWrapper>

				<ButtonWrapper
					onClick={toggleBackDrop}
					styles='w-full !bg-white border border-solid border-[#d0d6e0] rounded-md hover:!bg-[#e1e1e152]'
				>
					<div>
						<MailOutlined className='text-[#01adba] align-baseline mr-2' />
						<span className='text-base text-[#222] font-medium'>Gửi tin nhắn</span>
					</div>
				</ButtonWrapper>
			</div>
		</div>
	);
};

export default CardUserInfo;

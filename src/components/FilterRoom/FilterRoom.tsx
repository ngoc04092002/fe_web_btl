import { LeftOutlined, RightOutlined } from '@ant-design/icons';
// import classNames from 'classnames/bind';
import React, { FC, useContext, useState } from 'react';

import ButtonWrapper from '../helpers/ButtonWrapper/ButtonWrapper';

// import styles from './filter-room.module.scss';

import { initFilterRoom } from '@/constants/FilterRoom';
import { BackDropContext } from '@/pages/Home';

type Props = {};
// const cx = classNames.bind(styles);
type KEY = 'acreage' | 'roomNumber' | 'price' | 'timestamp';

const FilterRoom: FC<Props> = () => {
	const { toggleBackDrop } = useContext(BackDropContext);
	const [child, setChild] = useState<{
		action: string;
		title: string;
		child: [] | string[];
	} | null>(null);
	const [filterRoom, setFilterRoom] = useState({
		acreage: '',
		roomNumber: '',
		price: '',
		timestamp: '',
	});
	const chooseDetail = (ifr: { action: string; title: string; child: [] | string[] }) => {
		if (ifr.child.length) {
			setChild(ifr);
		} else {
			setChild(null);
		}
	};

	const handleSelectItem = (value: string) => {
		setFilterRoom((prev) => ({
			...prev,
			[child?.action as string]: value,
		}));
		setChild(null);
	};

	const handleResetFilter = () => {
		setFilterRoom({
			acreage: '',
			roomNumber: '',
			price: '',
			timestamp: '',
		});
	};

	return (
		<div className={`p-3 flex flex-col ${child ? '' : 'justify-between'} min-h-[400px]`}>
			<div className='flex items-center w-full relative'>
				{!!child && (
					<LeftOutlined
						className='p-3 absolute text-[#657786] text-[15px] left-2 cursor-pointer'
						onClick={() => setChild(null)}
					/>
				)}
				<div className='text-center w-full'>
					<span className='font-semibold text-lg cursor-default'>
						{!child ? 'Bộ lọc' : child.title}
					</span>
				</div>
				{!child && (
					<span
						onClick={toggleBackDrop}
						className='absolute text-[#657786] text-[15px] right-2 cursor-pointer font-medium'
					>
						Đóng
					</span>
				)}
			</div>
			<ul className={`${child ? 'h-[370px]' : 'mt-4 h-[280px]'} overflow-hidden-scroll`}>
				{!child &&
					initFilterRoom.map((ifr) => {
						const isValueFilter = filterRoom[ifr.action as KEY];

						return (
							<li
								key={ifr.action}
								onClick={() => chooseDetail(ifr)}
								className='border border-solid border-[#e6ecf0] cursor-pointer rounded-lg flex items-center justify-between p-2 mb-3'
							>
								<div>
									<p className='text-sm text-[#262637]'>{ifr.title}</p>
									<p
										className={`h-[20px] text-sm text-[#262637] font-bold ${
											isValueFilter ? 'visible' : 'invisible'
										}`}
									>
										{isValueFilter}
									</p>
								</div>
								<RightOutlined className='text-sm' />
							</li>
						);
					})}
				{child?.child && child?.child.length && (
					<li
						className='color-main font-bold text-base cursor-pointer px-2 py-3 border-0 border-b border-solid border-[#ccc] hover:bg-[#f5f5f5]'
						onClick={() => handleSelectItem('')}
					>
						Tất cả
					</li>
				)}
				{child?.child &&
					child?.child.length &&
					child.child.map((c) => (
						<li
							onClick={() => handleSelectItem(c)}
							key={c}
							className='font-bold text-base cursor-pointer px-2 py-3 border-0 border-b border-solid border-[#ccc] hover:bg-[#f5f5f5]'
						>
							{c}
						</li>
					))}
			</ul>
			{!child && (
				<div className='flex flex-col'>
					<ButtonWrapper
						onClick={handleResetFilter}
						styles='!mb-0 mt-3 rounded-lg !bg-white border border-solid border-[#1cbcc7] !text-[#1cbcc7]'
					>
						Xóa lọc
					</ButtonWrapper>
					<ButtonWrapper styles='!mb-0 mt-3 rounded-lg'>Tìm kiếm</ButtonWrapper>
				</div>
			)}
		</div>
	);
};

export default FilterRoom;

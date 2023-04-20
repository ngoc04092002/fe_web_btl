import { AppstoreOutlined } from '@ant-design/icons';
import React, { FC, useContext, useState } from 'react';

import { BackDropContext } from './Home';

import { MarkIcon } from '@/assets/icons';
import Search from '@/components/helpers/Search/Search';
import SelectTypeIntro from '@/components/helpers/SelectTypeIntro/SelectTypeIntro';
import HeadTitle from '@/hooks/Head';
import { IChoose } from '@/types/components/IntroObj/intro';

type Props = {};

const SearchDetailRoom: FC<Props> = () => {
	HeadTitle('Search Details');
	const { toggleBackDrop } = useContext(BackDropContext);
	const [click, setClick] = useState<IChoose>({
		'chooseTitle': 0,
		'chooseChild1': '',
		'chooseChild2': '',
		'chooseChild3': '',
	});

	const handleChooseType: (value: IChoose) => void = (value: IChoose) => {
		setClick((prev) => {
			if (prev.chooseTitle === value.chooseTitle) {
				return {
					...value,
					chooseTitle: 0,
				};
			}
			return value;
		});
	};

	const handleHiddenChooseType = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		const className = (e.target as HTMLElement).className;

		if (className !== 'choose_type') {
			setClick((prev) => ({
				...prev,
				chooseTitle: 0,
			}));
		}
	};
	return (
		<div
			onClick={handleHiddenChooseType}
			className='py-4 mx-4 lg:px-4 xl:px-24'
		>
			<div className='flex items-baseline'>
				<Search styles='!mx-0 cus-screen:!flex !hidden' />
				<SelectTypeIntro
					select={click}
					chooseType={handleChooseType}
					styleText='!text-black text-base font-medium mr-10'
					isSeachRoom={true}
					styles='cus-screen:!w-[64%] !w-[80%] !justify-end'
				/>
				<button
					onClick={toggleBackDrop}
					className='border border-solid border-[#ccc] rounded py-2 px-3 h-[42px] flex items-center'
				>
					<AppstoreOutlined className='color-main mr-1' />
					<span className='whitespace-nowrap'>Lọc thêm</span>
				</button>
			</div>
			<div className='grid grid-cols-3 gap-2 mt-8'>
				<h1 className='col-span-3 font-bold text-[#3c4146] text-lg'>
					Thuê Nhà Đất Giá Rẻ Tại Việt Nam, Giá Thuê Mới Nhất
				</h1>
				<div className='rounded-lg bg-[#f7f8f9] p-3 col-span-2 flex items-center justify-between'>
					<span className='flex items-center'>
						<p className='text-[15px] font-bold'>16 - 30</p>
						<small className='mx-2'>trong</small>
						<p className='text-[15px] font-bold'>2002</p>
					</span>
					<a
						href='/view-later'
						rel='noreferrer'
						className='flex items-center border border-solid border-[#ccc] p-[6px] rounded'
					>
						<MarkIcon />
						<p className='text-sm'>Lưu tìm kiếm</p>
					</a>
				</div>
				<div className='col-span-2'></div>
				<div className='col-span-1'></div>
			</div>
		</div>
	);
};

export default SearchDetailRoom;

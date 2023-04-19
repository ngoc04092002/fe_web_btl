import { AppstoreOutlined } from '@ant-design/icons';
import React, { FC, useContext, useState } from 'react';

import { BackDropContext } from './Home';

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
		</div>
	);
};

export default SearchDetailRoom;

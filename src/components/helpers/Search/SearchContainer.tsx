import React from 'react';

import Search from './Search';

import { ISearch } from '@/types/components/helpers/searchType';

const SeachContainer: React.FC<ISearch> = ({
	searchValue = '',
	styles,
	handleChange,
	handleClick,
	isTippy = false,
	isHeader = false,
	isQa = false,
	placeholder = 'Từ khóa, Đường, Quận, Dự án hoặc địa danh ...',
}) => {
	return (
		<section
			className={`${isHeader ? 'cus-screen:hidden flex' : 'cus-screen:flex hidden'}  flex-1 `}
		>
			{!isQa && (
				<Search
					searchValue={searchValue}
					handleChange={handleChange}
					styles={styles}
					handleClick={handleClick}
					isTippy={isTippy}
					placeholder={placeholder}
				/>
			)}
		</section>
	);
};

export default SeachContainer;

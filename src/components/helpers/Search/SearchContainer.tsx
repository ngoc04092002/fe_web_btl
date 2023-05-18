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
}) => {
	return (
		<section
			className={`${isHeader ? 'cus-screen:hidden flex' : 'cus-screen:flex hidden'}  flex-1 `}
		>
			<Search
				searchValue={searchValue}
				handleChange={handleChange}
				styles={styles}
				handleClick={handleClick}
				isTippy={isTippy}
			/>
		</section>
	);
};

export default SeachContainer;

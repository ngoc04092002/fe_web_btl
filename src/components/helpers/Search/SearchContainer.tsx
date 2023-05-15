import React from 'react';

import Search from './Search';

import { ISearch } from '@/types/components/helpers/searchType';

const SeachContainer: React.FC<ISearch> = ({
	searchValue = '',
	styles,
	handleChange,
	handleClick,
	isTippy = false,
}) => {
	return (
		<section className='flex flex-1 cus-screen:hidden'>
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

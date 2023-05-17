import { SearchOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';

import Tippy from '../Tippy';

import { ISearch } from '@/types/components/helpers/searchType';
import './search.css';

const Search: React.FC<ISearch> = ({
	isTippy = false,
	searchValue = '',
	styles,
	handleChange,
	handleClick,
}) => {
	useEffect(() => {
		const div: HTMLDivElement | null = document.querySelector('.tippy');
		if (!div) {
			return;
		}
		if (!searchValue) {
			div.style.display = 'none';
		}
		const input: HTMLInputElement = document.querySelector('input') as HTMLInputElement;

		input.addEventListener('focus', () => {
			div.style.display = 'block';
		});

		input.addEventListener('blur', () => {
			div.style.display = 'none';
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<form
			className={`search-container flex flex-1 items-center border-[1px] border-solid rounded-md border-[#657786] mx-7 ${styles} relative`}
		>
			<input
				className='w-full h-9 caret-[#01adba] p-1 rounded-md input-none'
				type='text'
				placeholder='Từ khóa, Đường, Quận, Dự án hoặc địa danh ...'
				onChange={(e) => handleChange?.(e)}
			/>
			<SearchOutlined
				onClick={handleClick}
				className='text-lg p-1 text-[#657786] cus-shadow'
			/>
			{isTippy && <Tippy value={searchValue} />}
		</form>
	);
};

export default Search;

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

		function targetElement(e:any) {
			const className = e.target.className;
			if (typeof className === 'string' && !className.includes('tippy')){
				(div as HTMLDivElement).style.display = 'none';
			}
		}
		const input: HTMLInputElement = document.querySelector('input') as HTMLInputElement;

		input.addEventListener('focus', () => {
			div.style.display = 'block';
		});

		window.addEventListener('click', targetElement);
		return () => {
			window.removeEventListener('click', targetElement);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<form
			className={`search-container flex flex-1 items-center border-[1px] border-solid rounded-md border-[#657786] mx-7 ${styles} relative`}
		>
			<input
				className='w-full h-9 caret-[#01adba] tippy-input p-1 rounded-md input-none'
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

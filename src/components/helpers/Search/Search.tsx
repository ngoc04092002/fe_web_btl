import { SearchOutlined } from '@ant-design/icons';
import React from 'react';

interface Props {
	styles?: string;
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({ styles, handleChange }) => {
	return (
		<div
			className={`flex flex-1 items-center border-[1px] border-solid rounded-md border-[#657786] mx-7 ${styles}`}
		>
			<input
				className='w-full h-9 caret-[#01adba] p-1 rounded-md input-none'
				type='text'
				placeholder='Từ khóa, Đường, Quận, Dự án hoặc địa danh ...'
				onChange={(e) => handleChange?.(e)}
			/>
			<SearchOutlined className='text-lg p-1 text-[#657786] cus-shadow' />
		</div>
	);
};

export default Search;

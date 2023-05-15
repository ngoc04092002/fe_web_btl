import React from 'react';

import Search from './Search';
interface Props {
	styles?: string;
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleClick?: () => void;
}
const SeachContainer: React.FC<Props> = ({ styles, handleChange, handleClick }) => {
	return (
		<section className='flex flex-1 cus-screen:hidden'>
			<Search
				handleChange={handleChange}
				styles={styles}
				handleClick={handleClick}
			/>
		</section>
	);
};

export default SeachContainer;

import React from 'react';

import Search from './Search';
type Props = {};

const SeachContainer: React.FC<Props> = () => {
	return (
		<section className='flex flex-1 cus-screen:hidden'>
			<Search />
		</section>
	);
};

export default SeachContainer;

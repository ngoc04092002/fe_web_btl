import React, { FC } from 'react';

import HeaderNews from './HeaderNews';

type Props = {
	hanleShowSearch: React.MouseEventHandler<HTMLElement>;
	hanleShowMenu: React.MouseEventHandler<HTMLElement>;
};

const HeaderNewsContainer: FC<Props> = ({ hanleShowSearch, hanleShowMenu }) => {
	return (
		<div className='drop-shadow-lg bg-white'>
			<HeaderNews
				hanleShowSearch={hanleShowSearch}
				hanleShowMenu={hanleShowMenu}
			/>
		</div>
	);
};

export default HeaderNewsContainer;

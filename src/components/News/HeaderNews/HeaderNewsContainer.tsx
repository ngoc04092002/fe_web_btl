import React, { FC, useState } from 'react';

import HeaderNews from './HeaderNews';

type Props = {
	hanleShowSearch: React.MouseEventHandler<HTMLElement>;
	hanleShowMenu: React.MouseEventHandler<HTMLElement>;
};

const HeaderNewsContainer: FC<Props> = ({ hanleShowSearch, hanleShowMenu }) => {
	const [showSearch, setShowSearch] = useState(false);
	return (
		<div className={`drop-shadow-lg bg-white relative ${showSearch ? 'z-10' : '-z-10'}`}>
			<HeaderNews
				hanleShowSearch={hanleShowSearch}
				hanleShowMenu={hanleShowMenu}
				setShowSearch={setShowSearch}
				showSearch={showSearch}
			/>
		</div>
	);
};

export default HeaderNewsContainer;

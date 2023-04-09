import React, { FC } from 'react';

import BackdropNewsMenu from './BackdropNewsMenu';
import BackdropNewsSearch from './BackdropNewsSearch';

type Props = {
	hanleShowSearch: React.MouseEventHandler<HTMLElement>;
	showSearch: boolean;
	hanleShowMenu: React.MouseEventHandler<HTMLElement>;
	showMenu: boolean;
};

const BackdropNewsSearchContainer: FC<Props> = ({
	hanleShowSearch,
	showSearch,
	hanleShowMenu,
	showMenu,
}) => {
	return (
		<div className='fixed scroll-none py-4 px-8 flex-col items-center bg-backdrop-md will-change-contents inset-0 z-[9999] flex'>
			{showSearch && <BackdropNewsSearch hanleShowSearch={hanleShowSearch} />}
			{showMenu && (
				<BackdropNewsMenu
					hanleShowMenu={hanleShowMenu}
					showMenu={showMenu}
				/>
			)}
		</div>
	);
};

export default BackdropNewsSearchContainer;

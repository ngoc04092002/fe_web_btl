import React, { FC, useCallback, useState } from 'react';

import BackdropNews from '@/components/BackdropNews';
import BodyNews from '@/components/News/BodyNews';
import FooterNews from '@/components/News/FooterNews';
import HeaderNews from '@/components/News/HeaderNews';
import Goup from '@/components/helpers/Goup';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

type Props = {};
const isLg = window.innerWidth >= 1024;

const News: FC<Props> = () => {
	const [showSearch, setShowSearch] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	const conditionShow = showSearch || showMenu;

	const hanleShowSearch = useCallback(() => {
		setShowSearch(!showSearch);
	}, [showSearch]);

	const hanleShowMenu = useCallback(() => {
		setShowMenu(!showMenu);
	}, [showMenu]);

	if (showSearch || showMenu) {
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'overlay';
	}
	return (
		<>
			<section
				className={`${conditionShow ? 'scale-95' : 'scale-100'} duration-500 relative`}
				style={{ boxShadow: `${conditionShow ? '0 0 46px' : ' none'}` }}
			>
				<HeaderNews
					hanleShowSearch={hanleShowSearch}
					hanleShowMenu={hanleShowMenu}
				/>
				<BodyNews />
				<FooterNews />
				<Goup />
			</section>
			{!isLg && conditionShow && (
				<BackdropNews
					hanleShowSearch={hanleShowSearch}
					hanleShowMenu={hanleShowMenu}
					showSearch={showSearch}
					showMenu={showMenu}
				/>
			)}
		</>
	);
};

export default News;

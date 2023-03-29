import React, { FC, useCallback, useState } from 'react';

import BackdropNewsSearch from '@/components/BackdropNewsSearch';
import BodyNews from '@/components/News/BodyNews';
import FooterNews from '@/components/News/FooterNews';
import HeaderNews from '@/components/News/HeaderNews';
import Goup from '@/components/helpers/Goup';

type Props = {};

const News: FC<Props> = () => {
	const [showSearch, setShowSearch] = useState(false);

	const hanleShowSearch = useCallback(() => {
		setShowSearch(!showSearch);
	}, [showSearch]);

	if (showSearch) {
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'overlay';
	}
	return (
		<>
			<section
				className={`${showSearch ? 'scale-95' : 'scale-100'} duration-500 relative`}
				style={{ boxShadow: `${showSearch ? '0 0 46px' : ' none'}` }}
			>
				<HeaderNews hanleShowSearch={hanleShowSearch} />
				<BodyNews />
				<FooterNews />
				<Goup />
			</section>
			<BackdropNewsSearch
				hanleShowSearch={hanleShowSearch}
				showSearch={showSearch}
			/>
		</>
	);
};

export default News;

import React, { FC } from 'react';

import FooterNews from './FooterNews';

type Props = {};

const FooterNewsContainer: FC<Props> = () => {
	return (
		<div
			className={
				"bottom-0 w-full bg-[url('https://giadungviet.vn/wp-content/uploads/footer-background.jpg')] p-8"
			}
		>
			<FooterNews />
		</div>
	);
};

export default FooterNewsContainer;

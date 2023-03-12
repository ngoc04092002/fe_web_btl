import { useEffect } from 'react';

const HeadTitle = (title: string) => {
	useEffect(() => {
		document.title = title;
	}, [title]);
};

export default HeadTitle;

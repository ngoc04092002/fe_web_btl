import React from 'react';

import { TableNews } from '@/components';
import Loading from '@/components/Loading';
import { FetchApiGetAllNews } from '@/hooks/fetchApiNews';

type Props = {};

const ANews = (props: Props) => {
	const { res, isLoading } = FetchApiGetAllNews();
	if (isLoading || !res) {
		return <Loading />;
	}
	return (
		<div className='mb-14'>
			<TableNews
				rows={res}
				pathDelete='delete-news-ids'
				pathGet='getAll-news-post'
			/>
		</div>
	);
};

export default ANews;

import React from 'react';

import Loading from '@/components/Loading/Loading';
import { NewsCardVertical } from '@/components/helpers/NewsCardTypes';
import TitleNews from '@/components/helpers/TitleNews/TItleNews';
import { FetchApiFilterNews } from '@/hooks/fetchApiNews';

type Props = {};
const pageLimit = 3;
const topic = 'kien-thuc-bds';

const Knowledge = (props: Props) => {
	const { res, isLoading } = FetchApiFilterNews(pageLimit, 0, topic, '');
	return (
		<div className='w-full mb-14'>
			<a href={`http://localhost:2002/news/${topic}`}>
				<TitleNews
					title='Kiến thức bất động sản'
					styles='uppercase !text-base'
				/>
			</a>
			<div className='flex flex-col items-start justify-between mt-6'>
				{!res || isLoading ? (
					<Loading />
				) : (
					<>
						{res &&
							!!res.length &&
							res.map((r) => (
								<NewsCardVertical
									key={r.id}
									href={`/news/${r.id}`}
									styleTitle='!text-lg'
									styleImg='h-[8rem]'
									styles='mb-8'
									styleDivInfo='!w-[70%]'
									styleDivImg='!w-[40%]'
									src={r.img}
									des={r.des}
									title={r.title}
								/>
							))}
					</>
				)}
			</div>
		</div>
	);
};

export default Knowledge;

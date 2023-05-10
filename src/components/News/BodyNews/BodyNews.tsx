import React, { FC } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import './body-news.scss';

import NewsRelated from '../components/NewRelated';
import NewsDetail from '../components/NewsDetail';
import NewsDetailSearch from '../components/NewsDetailSearch';
import NewsHome from '../components/NewsHome';
import NewsTopicType from '../components/NewsTopicType';

import Loading from '@/components/Loading';
import { topicNewsDatai18 } from '@/constants/NewsConst';
import { FetchApiGetNewsById } from '@/hooks/fetchApiNews';

type Props = {};

const BodyNews: FC<Props> = () => {
	const [searchParams] = useSearchParams();
	const { topic, category } = useParams();
	const isSearch: boolean = topic === 'search';
	const isNewsHome: boolean = !topic && !category;
	const isNewsDetail: boolean = !!topic && !(topic in topicNewsDatai18);
	const { res, isLoading } = FetchApiGetNewsById(+(topic as string) || 1);

	function createMarkup() {
		let html = 'Trang chủ';
		if (topic && topic in topicNewsDatai18) {
			html += ` > ${topicNewsDatai18[topic]}`;
		}
		if (category && category in topicNewsDatai18) {
			html += ` > ${topicNewsDatai18[category]}`;
		}
		if (isNewsDetail) {
			html += ` > ${topic}`;
		}
		return { __html: html };
	}

	return (
		<div className='flex flex-col items-center justify-between'>
			{isNewsHome && <NewsHome />}
			{!isNewsHome && (
				<div className='w-full items-start'>
					<h6 className='text-[#747474] text-xs leading-4 mb-4'>
						<span
							className='overflow-hidden text-ellipsis max-w-[28rem] whitespace-nowrap'
							dangerouslySetInnerHTML={createMarkup()}
						></span>
					</h6>
					<h1 className={`flex text-3xl font-bold ${isSearch ? '' : 'uppercase'} leading-9`}>
						<p className='color-main overflow-hidden text-ellipsis max-w-[18rem]'>
							{isSearch && `${searchParams.get('s')}`}
						</p>
						{isSearch && <span> - </span>}
						{isNewsDetail && res && res.title}
						{(category && topicNewsDatai18[category]) || (topic && topicNewsDatai18[topic])}
					</h1>
					{!isSearch && !isNewsDetail && <NewsTopicType />}
					{(isSearch || isNewsDetail) && (
						<div className='flex flex-col md:flex-row items-start mt-10 w-full '>
							{isSearch && <NewsDetailSearch />}
							{isNewsDetail && (isLoading || !res ? <Loading /> : <NewsDetail res={res} />)}
							<NewsRelated />
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default BodyNews;

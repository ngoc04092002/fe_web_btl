import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import QAPost from './QAPost';

import Loading from '@/components/Loading';
import ButtonWrapper from '@/components/helpers/ButtonWrapper/ButtonWrapper';
import { FetchApiFilterQA } from '@/hooks/fetchApiQA';

type Props = {};
const pageSize = 8;

const QAPosts = (props: Props) => {
	const [currentPage, setCurrentPage] = useState(0);
	const [searchParams] = useSearchParams();
	const { res, isLoading } = FetchApiFilterQA({
		s: searchParams.get('s') || '',
		limit: pageSize,
		offset: currentPage * pageSize,
	});

	const handleClick = () => {
		if (res && !!res.length) {
			setCurrentPage(currentPage + 1);
		} else {
			if (currentPage > 0) {
				setCurrentPage(currentPage - 1);
			}
		}
	};

	if (isLoading) {
		return <Loading />;
	}
	return (
		<div>
			{!!res &&
				!!res.length &&
				res.map((r) => (
					<QAPost
						key={r.id}
						data={r}
					/>
				))}

			<div className='text-center w-full'>
				<ButtonWrapper
					onClick={handleClick}
					styles='shadow-md !text-[#657786] w-1/3 !bg-white font-bold rounded mt-12 hover:!color-main'
				>
					{res && !!res.length ? 'Xem thêm' : 'Quay lại'}
				</ButtonWrapper>
			</div>
		</div>
	);
};

export default QAPosts;

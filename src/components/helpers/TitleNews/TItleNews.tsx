import React, { FC } from 'react';

type Props = {
	title: string;
};

const TitleNews: FC<Props> = ({ title }) => {
	return (
		<div className='my-3'>
			<h4 className='border-b-[#01adba] border-b-2 text-left border-0 border-solid'>
				<span className='bg-[#01ADBE] font-black text-lg text-white pt-2 px-3 pb-1 leading-4'>
					{title}
				</span>
			</h4>
		</div>
	);
};

export default TitleNews;

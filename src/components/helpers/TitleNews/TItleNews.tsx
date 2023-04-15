import React, { FC } from 'react';

type Props = {
	title: string;
	styles?: string;
	underLineColor?: string;
};

const TitleNews: FC<Props> = ({ title, styles, underLineColor = '#01adba' }) => {
	return (
		<div className='my-3'>
			<h4 className={`border-[${underLineColor}] border-b-2 text-left border-0 border-solid`}>
				<span
					className={`bg-[${underLineColor}] font-black ${styles} text-lg text-white pt-2 px-3 pb-1 leading-4 `}
				>
					{title}
				</span>
			</h4>
		</div>
	);
};

export default TitleNews;

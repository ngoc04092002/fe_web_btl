import React, { FC } from 'react';
import './news-piece.scss';

type Props = {
	pieces: {
		title: string;
		des: string;
		caption: string;
	};
	url: string;
	body: string;
};

const NewsPiece: FC<Props> = (props: Props) => {
	const { pieces, url, body } = props;
	return (
		<div className='news_piece mb-12'>
			<h1 className='font-bold text-2xl'>{pieces.title}</h1>
			<p className='break-words text-justify my-6'>{pieces.des}</p>
			{url && (
				<figure className='mb-8'>
					<img
						src={url}
						alt=''
						className='w-full h-[490px]'
					/>
					<figcaption className='italic font-light text-[15px]'>{pieces.caption}</figcaption>
				</figure>
			)}
			<div dangerouslySetInnerHTML={{ __html: body }} />
		</div>
	);
};

export default NewsPiece;

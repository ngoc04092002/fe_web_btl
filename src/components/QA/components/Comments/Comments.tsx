import React, { FC } from 'react';

import Comment from './Comment';

import { IComments } from '@/types/pages/IQA';

type Props = {
	comments: IComments[] | [];
};

const Comments: FC<Props> = ({ comments }) => {
	console.log(comments);

	return (
		<div className='mt-2'>
			{comments &&
				!!comments.length &&
				comments.map((c) => (
					<Comment
						key={c.id}
						comment={c}
					/>
				))}
		</div>
	);
};

export default Comments;

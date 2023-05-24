import React, { FC } from 'react';

import Comment from './Comment';

import { IComments } from '@/types/pages/IQA';

type Props = {
	comments: IComments[] | [];
	setCommentDatas: React.Dispatch<React.SetStateAction<IComments[]>>;
};

const Comments: FC<Props> = ({ comments, setCommentDatas }) => {
	console.log(comments);

	return (
		<div className='mt-2'>
			{comments &&
				!!comments.length &&
				comments.map((c) => (
					<Comment
						key={c.id}
						comment={c}
						setCommentDatas={setCommentDatas}
					/>
				))}
		</div>
	);
};

export default Comments;

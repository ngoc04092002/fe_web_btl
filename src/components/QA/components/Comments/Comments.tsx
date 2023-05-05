import React from 'react';

import Comment from './Comment';

type Props = {};

const Comments = (props: Props) => {
	return (
		<div className='mt-2'>
			<Comment />
			<Comment />
		</div>
	);
};

export default Comments;

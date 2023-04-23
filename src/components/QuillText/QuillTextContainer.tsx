import React, { FC } from 'react';

import QuillText from './QuillText';
import 'react-quill/dist/quill.snow.css';

type Props = {};

const QuillTextContainer: FC<Props> = () => {
	return (
		<section>
			<QuillText />
		</section>
	);
};

export default QuillTextContainer;

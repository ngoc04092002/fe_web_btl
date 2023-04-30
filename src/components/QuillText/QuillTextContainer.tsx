import React, { FC } from 'react';

import QuillText from './QuillText';

import 'react-quill/dist/quill.snow.css';
import { INewsInputElement } from '@/types/components/News/types';

type Props = {};
const fieldsNewsMain: INewsInputElement[] = [
	{
		id: 'title',
		name: 'title',
		label: 'Title',
	},
	{
		id: 'des',
		name: 'des',
		label: 'Des',
	},
];

const QuillTextContainer: FC<Props> = () => {
	return (
		<section>
			<QuillText fieldsNewsMain={fieldsNewsMain} />
		</section>
	);
};

export default QuillTextContainer;

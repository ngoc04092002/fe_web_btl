import React, { FC, useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
type Props = {};

const modules = {
	toolbar: [
		[{ 'header': [1, 2, 3, 5, false] }],
		['bold', 'italic'],
		[{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
		['link', 'image'],
		['clean'],
	],
};

const QuillText: FC<Props> = () => {
	const [value, setValue] = useState('');
	const handleCom = () => {};
	const handleDes = () => {};
	return (
		<div>
			<ReactQuill
				className='bg-white'
				theme='snow'
				value={value}
				onChange={setValue}
				modules={modules}
			/>
			<div dangerouslySetInnerHTML={{ __html: value }} />
			<button onClick={handleCom}>compression</button>
			<button onClick={handleDes}>descryption</button>
		</div>
	);
};

export default QuillText;

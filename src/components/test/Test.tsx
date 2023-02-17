import React from 'react';

import { ITest } from '@/types/components/test/type';

const Test: React.FC<ITest> = ({ num }) => {
	console.log(num);
	return <div>Test</div>;
};

export default Test;

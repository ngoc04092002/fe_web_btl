import React from 'react';

import { QADash } from '../Dashboard';

import { FetchApiGetAllQa } from '@/hooks/fetchApiQA';

type Props = {};

const QAReport = (props: Props) => {
	const { res, isLoading } = FetchApiGetAllQa();
	return (
		<QADash
			AdminData={res}
			AdminLoading={isLoading}
		/>
	);
};

export default QAReport;

import React, { FC, useContext } from 'react';

import LineChart from '@/components/chart/linechart/LineChart';
import SkeletonTypography from '@/components/helpers/SkeletonTypography';
import { AuthContext } from '@/context/AuthProvider';
import { FetchApiGetPostRoomAmountByMonth } from '@/hooks/fetchApiPostRoom';
import { IUser } from '@/types/pages/types';

type Props = {};

const DashBoardMain: FC<Props> = () => {
	const { user } = useContext(AuthContext);
	const { res, isLoading } = FetchApiGetPostRoomAmountByMonth((user as IUser).id || 0);
	console.log(res, isLoading);
	const loading = isLoading || !res;
	return (
		<>
			{loading ? (
				<SkeletonTypography
					styles='w-full'
					loading
				/>
			) : (
				<LineChart data={res || []} />
			)}
		</>
	);
};

export default DashBoardMain;

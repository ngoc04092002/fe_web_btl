import { Skeleton, Typography } from '@mui/material';
import React from 'react';

const SkeletonTypography = ({ loading }) => {
	return (
		<Typography
			component='div'
			variant='h3'
		>
			{loading && <Skeleton />}
		</Typography>
	);
};

export default SkeletonTypography;

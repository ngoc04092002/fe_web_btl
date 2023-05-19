import { Skeleton, Typography } from '@mui/material';
import React from 'react';

const SkeletonTypography = ({ loading, styles = '' }) => {
	return (
		<Typography
			component='div'
			variant='h3'
			className={styles}
		>
			{loading && <Skeleton />}
		</Typography>
	);
};

export default SkeletonTypography;

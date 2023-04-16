import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import React from 'react';

const EnhancedTableToolbar = (props) => {
	const { numSelected, title, handleDeleteData } = props;

	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
				...(numSelected > 0 && {
					bgcolor: (theme) =>
						alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
				}),
			}}
		>
			{numSelected > 0 ? (
				<Typography
					sx={{ flex: '1 1 100%' }}
					color='inherit'
					variant='subtitle1'
					component='div'
				>
					{numSelected} Lựa chọn
				</Typography>
			) : (
				<Typography
					sx={{ flex: '1 1 100%' }}
					variant='h6'
					id='tableTitle'
					component='div'
				>
					{title}
				</Typography>
			)}
			{numSelected > 0 && (
				<Tooltip
					title='Delete'
					onClick={handleDeleteData}
				>
					<IconButton>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			)}
		</Toolbar>
	);
};

export default EnhancedTableToolbar;

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';

export default function AlertDialog({ open, handleClickAccess, handleClose }) {
	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>Bạn đã chắc chắn chưa?</DialogTitle>
				<DialogActions>
					<Button onClick={handleClose}>Huỷ bỏ</Button>
					<Button
						onClick={handleClickAccess}
						autoFocus
					>
						Đồng ý
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

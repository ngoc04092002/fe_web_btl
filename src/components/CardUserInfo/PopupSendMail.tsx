import { CloseOutlined } from '@ant-design/icons';
import { Button, TextField } from '@mui/material';
import classNames from 'classnames/bind';
import React, { FC, useContext } from 'react';

// import Loading from '../Loading/Loading';

import styles from './card-user-info.module.scss';

import { BackDropContext } from '@/pages/Home';

type Props = { styles?: string };
const cx = classNames.bind(styles);

const PopupSendMail: FC<Props> = ({ styles }) => {
	const { toggleBackDrop } = useContext(BackDropContext);
	return (
		<div className={styles}>
			<div className='flex items-center justify-between pb-3 border-b border-solid border-[#ccc] border-0 mb-2'>
				<p className='text-[#262637]'>Gửi tin nhắn</p>
				<CloseOutlined
					onClick={toggleBackDrop}
					className='cursor-pointer'
				/>
			</div>
			<div className={cx('send-content')}>
				<TextField
					id='Họ & tên'
					label='Họ & tên'
					variant='outlined'
					className='w-full !mb-2'
				/>
				<TextField
					id='tel'
					label='Số điện thoại'
					variant='outlined'
					className='w-full !mb-2'
				/>
				<TextField
					id='email'
					label='Email'
					variant='outlined'
					className='w-full !mb-2'
				/>
				<TextField
					id='content'
					label='Nột dung'
					variant='outlined'
					className='w-full !mb-2'
					multiline
				/>
			</div>
			<div className='flex items-center'>
				<Button
					variant='contained'
					// disabled
					style={{ marginRight: '10px' }}
				>
					{/* <Loading styles='text-sm' /> */}Gửi
				</Button>
				<Button
					onClick={toggleBackDrop}
					variant='outlined'
				>
					Bỏ qua
				</Button>
			</div>
		</div>
	);
};

export default PopupSendMail;

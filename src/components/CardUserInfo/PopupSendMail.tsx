import { CloseOutlined } from '@ant-design/icons';
import { Button, TextField } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import classNames from 'classnames/bind';
import React, { FC, useContext, useState } from 'react';

// import Loading from '../Loading/Loading';

import Loading from '../Loading/Loading';

import styles from './card-user-info.module.scss';

import { FeedbackInfor, initValueFeedbackInfo } from '@/constants/initialValueFeedback';
import { createClientFeedback } from '@/infrastructure/feedbackAction';
import { BackDropContext } from '@/pages/Home';
import { IClientFeedback } from '@/types/pages/IDashBoard';
import { getToast } from '@/utils/CustomToast';

type Props = { styles?: string; userId?: number };
const cx = classNames.bind(styles);

const PopupSendMail: FC<Props> = ({ styles, userId }) => {
	const { toggleBackDrop } = useContext(BackDropContext);
	const [values, setValues] = useState(initValueFeedbackInfo);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	};

	const { mutate, isLoading } = useMutation<
		AxiosResponse<boolean, any>,
		AxiosError,
		IClientFeedback,
		unknown
	>({
		mutationFn: (formData: IClientFeedback) => {
			const res = createClientFeedback(formData);
			return res;
		},
	});

	const handleSubmit = () => {
		values.clientId = userId;
		mutate(values, {
			onError: (res: AxiosError) => {
				getToast(res.response?.data as string, 'error');
			},
			onSuccess: (res) => {
				if (res.data) {
					getToast('Cập nhật thành công!', 'success');
					setValues(initValueFeedbackInfo);
					toggleBackDrop();
				}
			},
		});
	};

	return (
		<div className={styles}>
			<div className='flex items-center justify-between pb-3 border-b border-solid border-[#ccc] border-0 mb-2'>
				<p className='text-[#262637]'>Góp ý</p>
				<CloseOutlined
					onClick={toggleBackDrop}
					className='cursor-pointer'
				/>
			</div>
			<div className={cx('send-content')}>
				{FeedbackInfor.map((i) => (
					<TextField
						key={i.id}
						id={i.id}
						label={i.label}
						onChange={handleChange}
						variant='outlined'
						className='w-full !mb-2'
					/>
				))}
			</div>
			<div className='flex items-center'>
				<Button
					onClick={handleSubmit}
					variant='contained'
					disabled={isLoading}
					style={{ marginRight: '10px' }}
				>
					{isLoading ? <Loading styles='text-sm' /> : 'Gửi'}
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

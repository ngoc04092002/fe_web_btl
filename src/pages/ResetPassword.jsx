import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, Form, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import FormGroup from '@/components/AuthLayoutWrapper/FormGroup';
import Loading from '@/components/Loading';
import AlertDialog from '@/components/helpers/AlertDialog';
import Button from '@/components/helpers/ButtonWrapper';
import HeadTitle from '@/hooks/Head';
import { accessReset, resetPassword } from '@/infrastructure/authActions';
import { getToast } from '@/utils/CustomToast';

// eslint-disable-next-line no-restricted-globals
const { origin } = location;

const ResetPassword = () => {
	HeadTitle('reset-password');
	const { e } = useParams();
	const navigate = useNavigate();
	const [visible, setVisible] = useState(false);
	const [open, setOpen] = useState(false);

	const {
		handleSubmit,
		register,
		formState: { errors },
		getValues,
	} = useForm({
		defaultValues: { password: '' },
		resolver: yupResolver(
			yup
				.object({
					password: yup
						.string()
						.trim()
						.max(1024, 'Chỉ cho phép giới hạn 1024 ký tự')
						.required('Trường này bắt buộc')
						.matches(
							/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/gim,
							'Cần có ký tự đặc biệt,chữ,số',
						),
				})
				.required(),
		),
	});

	const { data, isLoading, isError, error, isSuccess } = useQuery({
		queryKey: ['reset-password', e],
		queryFn: () => resetPassword(e),
		staleTime: 5 * 60 * 1000,
		cacheTime: 7 * 60 * 1000,
	});

	const { mutate, isLoading: loadingAccess } = useMutation({
		mutationFn: (Data) => {
			const res = accessReset(Data);
			return res;
		},
	});

	if (isError) {
		if (typeof error.response?.data === 'string') {
			getToast(error.response?.data, 'error');
			return;
		}
		getToast('', 'network bad');
	}

	const handleVisibilityChange = () => {
		setVisible(!visible);
	};

	const handleClickOpen = () => {
		if (!errors?.password && getValues('password').trim().length !== 0) {
			setOpen(true);
		}
	};

	const handleClose = () => {
		setOpen(false);
	};

	const onSubmit = () => {};

	const handleAccess = () => {
		setOpen(false);
		mutate(
			{ email: e, password: getValues('password').trim() },
			{
				onError: (res) => {
					getToast('', 'network bad');
				},
				onSuccess: (res) => {
					if (!res.data) {
						getToast('', 'network bad');
						return;
					}
					getToast('Đổi thành công!', 'success');
					navigate('/sign-in');
				},
			},
		);
	};

	if (isLoading && !isError) {
		return <Loading styles='!color-main' />;
	}

	return (
		<>
			<div className='w-fit mx-auto my-[100px]'>
				{isSuccess && data?.data === 'success' && (
					<>
						<Form
							onSubmit={handleSubmit(onSubmit)}
							method='post'
							className='flex items-center p-4 mb-8 rounded-md shadow-006 bg-white justify-between flex-wrap'
						>
							<FormGroup
								id='password'
								label='password'
								placeholder='Nhập mật khẩu của bạn'
								styleDiv='mb-10 flex-wrap'
								styleInput='pr-8 border-solid border-2 border-[#005aff47]'
								styleLabel='w-36'
								type={`${visible ? 'text' : 'password'}`}
								styleError='sm-500:left-36 left-0 text-xs sm-500:-bottom-4 -bottom-[2.4rem]'
								i18Label='Mật khẩu mới'
								errors={errors}
								{...register('password')}
							>
								<p
									onClick={handleVisibilityChange}
									className='absolute cursor-pointer md:right-[10px] sm-500:top-[5px] top-[28px] right-[7px]'
								>
									{visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
								</p>
							</FormGroup>
							<Button
								styles='mt-4 self-end'
								isLoading={loadingAccess}
								onClick={handleClickOpen}
							>
								Xác nhận
							</Button>
						</Form>
						<a
							href={`${origin}/sign-in`}
							className='underline text-white hover:bg-[#16c9d6] bg-main p-4'
						>
							Đăng nhập
						</a>
					</>
				)}
			</div>
			<AlertDialog
				open={open}
				handleClose={handleClose}
				handleClickAccess={handleAccess}
			/>
		</>
	);
};

export default ResetPassword;

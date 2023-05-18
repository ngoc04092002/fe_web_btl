import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import React, { FC, useContext, useState } from 'react';

import Loading from '../Loading/Loading';

import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';

import { createBill } from '@/infrastructure/orderAction';
import { BackDropContext } from '@/pages/Home';
import { IBill } from '@/types/components/Order/type';
import { IPostRoomResponse } from '@/types/pages/IDashBoard';
import { getToast } from '@/utils/CustomToast';

const steps = ['Điền thông tin'];
const initialValue = {
	name: '',
	phone: '',
};

type Props = {
	roomData: any;
	resetData: React.Dispatch<any>;
};

const DialogOrder: FC<Props> = ({ roomData, resetData }) => {
	const { toggleBackDrop } = useContext(BackDropContext);
	const [activeStep, setActiveStep] = useState(0);
	const [skipped, setSkipped] = useState(new Set<number>());
	const [checkStepOneValue, setCheckStepOneValue] = useState(false);
	const [stepOneValue, setStepOneValue] = useState<IBill>(initialValue);

	const isStepSkipped = (step: number) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		setCheckStepOneValue(true);
		if (Object.values(stepOneValue).includes('')) {
			return;
		}
		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const { mutate, isLoading } = useMutation<
		AxiosResponse<boolean, any>,
		AxiosError,
		IBill,
		unknown
	>({
		mutationFn: (formData: IBill) => {
			const res = createBill(formData);
			return res;
		},
	});

	const handleFinished = () => {
		const roomLocal = localStorage.getItem('rooms');
		let rooms = roomLocal ? JSON.parse(roomLocal) : [];
		const filterRoom = rooms.filter((r: IPostRoomResponse) => r.id !== roomData.id);
		const selected = {
			...stepOneValue,
			rid: roomData.id,
			clientEntityBill: roomData.client,
		};
		mutate(selected, {
			onError: (res) => {
				getToast('', 'network bad');
			},
			onSuccess: (res) => {
				if (res.data) {
					localStorage.setItem('rooms', JSON.stringify(filterRoom));
					getToast('Đã hoàn thành', 'success');
					resetData(filterRoom);
					setStepOneValue(initialValue);
					toggleBackDrop();
				} else {
					getToast('Đã có lỗi!', 'error');
				}
			},
		});
	};

	const handleChangeStepOneValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setStepOneValue((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<section className='absolute bg-white z-[10000] top-[30px] left-1/2 -translate-x-1/2 w-[440px] p-2'>
			<Box sx={{ width: '100%' }}>
				<Stepper activeStep={activeStep}>
					{steps.map((label, index) => {
						const stepProps: { completed?: boolean } = {};
						const labelProps: {
							optional?: React.ReactNode;
						} = {};
						if (isStepSkipped(index)) {
							stepProps.completed = false;
						}
						return (
							<Step
								key={label}
								{...stepProps}
							>
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>
				{activeStep === steps.length ? (
					<>
						<Typography sx={{ mt: 2, mb: 1 }}>
							Chúng tôi sẽ sớm gọi điện cho bạn. Trong vòng 3 ngày sau bạn không thấy cuộc gọi thì
							hãy chủ động gọi cho chúng tôi.
						</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
							<Box sx={{ flex: '1 1 auto' }} />
							<Button onClick={handleFinished}>{isLoading ? <Loading /> : 'Xong'}</Button>
						</Box>
					</>
				) : (
					<>
						<div className='mt-4'>
							{activeStep + 1 === 1 ? (
								<StepOne
									onChange={handleChangeStepOneValue}
									value={stepOneValue}
									checkStepOneValue={checkStepOneValue}
								/>
							) : (
								<StepTwo />
							)}
						</div>
						<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
							<Button
								color='inherit'
								disabled={activeStep === 0}
								onClick={handleBack}
								sx={{ mr: 1 }}
							>
								Quay lại
							</Button>
							<Box sx={{ flex: '1 1 auto' }} />
							<Button onClick={handleNext}>Tiếp</Button>
						</Box>
					</>
				)}
			</Box>
		</section>
	);
};

export default DialogOrder;

import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';

import FormGroup from '@/components/AuthLayoutWrapper/FormGroup';
import Button from '@/components/helpers/ButtonWrapper';
import { schemaFormEditProfie } from '@/constants/SchemaYups';
import { dataFormGroupEditProfile, dataFormGroupTextEditProfile } from '@/constants/SignUpConstant';
import { initialFormEditProfile } from '@/constants/initiallValues';
import { DashBoardFormIdEditProfile, IFromEditProfile } from '@/types/pages/IDashBoard';
import { getImage } from '@/utils/CustomImagePath';

type Props = {};

const EditProfile: FC<Props> = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
		setValue,
	} = useForm<IFromEditProfile>({
		defaultValues: initialFormEditProfile,
		resolver: yupResolver(schemaFormEditProfie),
	});

	const onSubmit: (value: IFromEditProfile) => void = (data) => {
		console.log(data);
		reset();
	};
	return (
		<Form
			onSubmit={handleSubmit(onSubmit)}
			method='post'
			className='flex items-center md:px-10 px-4 justify-between flex-wrap'
		>
			<div className='flex flex-col items-center mx-auto mb-8'>
				<div>
					<img
						src={getImage('user.png')}
						alt='user'
						className='w-60 h-60 object-cover object-center mb-6'
					/>
				</div>
				<Button>Thay đổi</Button>
			</div>
			<div className='mx-auto sm:w-[66%] w-full flex flex-col'>
				{!!dataFormGroupTextEditProfile &&
					dataFormGroupTextEditProfile.map((text) => (
						<FormGroup
							key={text.id}
							id={text.id}
							label={text.label}
							placeholder={text.placeholder}
							styleDiv={text.styleDiv}
							styleInput={'border-solid border-2 border-[#005aff47] '}
							styleLabel={text.styleLabel}
							type={text.type}
							styleError='sm-500:left-32 left-0 text-xs sm-500:-bottom-4 -bottom-[2.4rem]'
							i18Label={text.i18Label}
							errors={errors}
							{...register(text.id as DashBoardFormIdEditProfile)}
						/>
					))}
				<div className='flex sm:mt-0 mt-5 items-center self-baseline h-4 w-48 pt-2'>
					{!!dataFormGroupEditProfile &&
						dataFormGroupEditProfile.map((checkBox) => (
							<FormGroup
								key={checkBox.id}
								id={checkBox.id}
								label={checkBox.label}
								styleDiv={checkBox.styleDiv}
								styleInput='flex-none focus:ring-transparent'
								type={checkBox.type}
								styleError='left-0 text-xs -bottom-4'
								i18Label={checkBox.i18Label}
								errors={errors}
								{...register(checkBox.id as DashBoardFormIdEditProfile, {
									onChange(e) {
										const myId = e.target.id;
										const allCheckBox = document.querySelectorAll('input[type="checkbox"]');
										const input1 = allCheckBox[0] as HTMLInputElement;
										const input2 = allCheckBox[1] as HTMLInputElement;
										if (e.target.checked) {
											if (myId === 'male') {
												input2.checked = false;
												setValue('female', false);
											} else {
												input1.checked = false;
												setValue('male', false);
											}
										} else {
											if (myId === 'male' && !input2.checked) {
												input2.checked = true;
												setValue('female', true);
											} else {
												input1.checked = true;
												setValue('male', true);
											}
										}
									},
								})}
							/>
						))}
				</div>
				<Button styles='mt-4 self-end'>Xác nhận</Button>
			</div>
		</Form>
	);
};

export default EditProfile;

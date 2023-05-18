import React, { FC } from 'react';

import { IKeyBills, IStepOne } from '@/types/components/Order/type';

const formInfo = [
	{ label: 'Tên đầy đủ', id: 'name', placeholder: 'Vũ Văn N' },
	{ label: 'Số điện thoại', id: 'phone', placeholder: '0338787XXX' },
];

const StepOne: FC<IStepOne> = ({ onChange, value, checkStepOneValue = false }) => {
	return (
		<div>
			<form method='post'>
				{formInfo.map((fi) => (
					<div
						className='flex items-center mb-3'
						key={fi.id}
					>
						<label
							htmlFor={fi.id}
							className='select-none text-sm mr-2'
						>
							{fi.label}
						</label>
						<input
							type='text'
							name={fi.id}
							className={`${
								checkStepOneValue && !value[fi.id as IKeyBills].trim().length
									? 'border-red-500'
									: 'border-blue-500'
							} !shadow flex-1 border border-solid`}
							id={fi.id}
							value={value[fi.id as IKeyBills]}
							onChange={onChange}
							placeholder={fi.placeholder}
						/>
					</div>
				))}
			</form>
		</div>
	);
};

export default StepOne;

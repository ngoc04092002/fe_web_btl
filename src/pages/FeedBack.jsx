import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';

import Loading from '@/components/Loading';
import { sendFeedback } from '@/infrastructure/feedbackAction';
import { getToast } from '@/utils/CustomToast';

const FeedBack = () => {
	const [selectFeedback, setSelectFeedback] = useState('');
	const refTextarea = useRef('');

	const { mutate, isLoading } = useMutation({
		mutationFn: (formData) => {
			const res = sendFeedback({
				type: formData.type,
				feedback: formData.feedback,
			});

			return res;
		},
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!selectFeedback.length || !refTextarea.current.value.trim()) {
			return;
		}
		mutate(
			{
				type: selectFeedback,
				feedback: refTextarea.current.value.trim(),
			},
			{
				onError: (res) => {
					getToast('', 'network bad');
				},
				onSuccess: (res) => {
					refTextarea.current.value = '';
					refTextarea.current.focus();
					setSelectFeedback('');
					getToast('Bạn đã gửi thành công!', 'success');
				},
			},
		);
	};
	return (
		<div className='py-[50px] bg-[#f1f0f073]'>
			<form className='w-[38rem] mx-auto shadow-lg flex items-center flex-col p-4 bg-white'>
				<h1 className='text-2xl font-bold font-[math] mb-7'>
					Đóng góp ý kiến của bạn về trải nghiệm website
				</h1>
				<ul className='flex items-center mb-4'>
					<li>
						<SmileOutlined
							title='Hài lòng'
							className={`icon-feedback ${selectFeedback === 'smile' ? 'smile' : ''}`}
							onClick={() => setSelectFeedback('smile')}
						/>
					</li>
					<li>
						<MehOutlined
							title='Bình thường'
							className={`icon-feedback ${selectFeedback === 'meh' ? 'meh' : ''}`}
							onClick={() => setSelectFeedback('meh')}
						/>
					</li>
					<li>
						<FrownOutlined
							title='Không hài lòng'
							className={`icon-feedback ${selectFeedback === 'frown' ? 'frown' : ''}`}
							onClick={() => setSelectFeedback('frown')}
						/>
					</li>
				</ul>
				<div className='w-full'>
					<textarea
						name='feedback'
						ref={refTextarea}
						id='feedback'
						className='resize-none w-full h-40 border-solid border-2 border-[#005aff47]'
					/>
				</div>
				<button
					type='submit'
					disabled={isLoading}
					className={`self-end px-8 select-none cursor-pointer mb-4 py-2 font-semibold ${
						isLoading ? 'bg-[#ccc]' : 'bg-[#01adba] text-white hover:bg-[#1cbcc7]'
					}`}
					onClick={handleSubmit}
				>
					{isLoading ? <Loading /> : 'Gửi'}
				</button>
			</form>
		</div>
	);
};

export default FeedBack;

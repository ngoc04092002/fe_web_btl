import { SearchOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC, useState } from 'react';

import SelectTypeIntro from '../helpers/SelectTypeIntro/SelectTypeIntro';

import styles from './introduce-obj.module.scss';

import { IChoose } from '@/types/components/IntroObj/intro';

const cx = classNames.bind(styles);
type Props = {};

const IntroduceObj: FC<Props> = () => {
	const [click, setClick] = useState<IChoose>({
		'chooseTitle': 0,
		'chooseChild1': '',
		'chooseChild2': '',
		'chooseChild3': '',
	});
	const [value, setValue] = useState('');

	const handleChooseType: (value: IChoose) => void = (value: IChoose) => {
		setClick((prev) => {
			if (prev.chooseTitle === value.chooseTitle) {
				return {
					...value,
					chooseTitle: 0,
				};
			}
			return value;
		});
	};

	const handleHiddenChooseType = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		const className = (e.target as HTMLElement).className;
		if (className !== 'choose_type') {
			setClick((prev) => ({
				...prev,
				chooseTitle: 0,
			}));
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<section
			className={`${cx('intro-web')}`}
			onClick={handleHiddenChooseType}
		>
			<div className={`${cx('container-bg')}`}>
				<p className='lg:text-3xl md:text-2xl text-xl text-white'>
					An tâm chọn, An tâm thuê, Uy tín tạo lên thương hiệu!
				</p>
			</div>
			<div className='hidden lg:flex items-center flex-col w-[528px] h-[158px] bg-[rgba(40,40,46,.5)] pt-3 px-6 pb-4 rounded-2xl mt-4'>
				<ul className={`${cx('search-title')} flex items-center justify-evenly mb-4`}>
					<li className={`${cx('active')}`}>Thuê</li>
					<li>
						<a href='/'>Tham khảo bảng giá</a>
					</li>
				</ul>
				<div className='flex items-center w-full rounded overflow-hidden'>
					<input
						type='text'
						placeholder='Từ khóa, Đường, Quận, Dự án hoặc địa danh ...'
						className='flex-1'
						onChange={handleChange}
						value={value}
					/>
					<a
						href={`/search-room?s=${value}&address=${click.chooseChild1}&type=${click.chooseChild2}&price=${click.chooseChild3}`}
						className='bg-main text-white h-full px-4 pt-2'
					>
						<SearchOutlined />
					</a>
				</div>
				<SelectTypeIntro
					select={click}
					chooseType={handleChooseType}
				/>
			</div>
			<div className={`${cx('intro_web-buttons')} flex flex-col items-center mt-4 lg:hidden`}>
				<a
					href='/'
					className='bg-[#20cecc] text-[#262637] mb-3'
				>
					Tìm thuê
				</a>
				<a
					href='/search-room'
					className='text-white border border-solid border-white bg-[rgba(40,40,46,.5)]'
				>
					Tham khảo bảng giá
				</a>
			</div>
		</section>
	);
};

export default IntroduceObj;

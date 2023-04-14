import { DownCircleOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC, useState } from 'react';

import styles from './introduce-obj.module.scss';
const cx = classNames.bind(styles);
type Props = {};

const IntroduceObj: FC<Props> = () => {
	const [click, setClick] = useState(0);
	const handleChooseType: (value: number) => void = (value: number) => {
		setClick((prev) => {
			if (prev === value) {
				return 0;
			}
			return value;
		});
	};
	return (
		<section className={`${cx('intro-web')}`}>
			<div className={`${cx('container-bg')}`}>
				<p className='lg:text-3xl md:text-2xl text-xl text-white whitespace-nowrap'>
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
					/>
					<a
						href='/'
						className='bg-main text-white h-full px-4 pt-2'
					>
						<SearchOutlined />
					</a>
				</div>
				<ul className={`${cx('type_intro')} flex items-center justify-evenly mt-3`}>
					<li>
						<p onClick={() => handleChooseType(1)}>Toàn quốc</p>
						<DownOutlined />
						{click === 1 && (
							<ul className={`${cx('tippy_intro')} absolute left-0 top-7 z-[1] w-48`}>
								<li>
									<p className='color-main'>a</p>
									<DownCircleOutlined />
								</li>
								<li>a</li>
								<li>a</li>
								<li>a</li>
								<li>a</li>
								<li>a</li>
								<li>a</li>
								<li>a</li>
								<li>a</li>
								<li>a</li>
							</ul>
						)}
					</li>
					<li>
						<p>Loại bất động sản</p>
						<DownOutlined />
					</li>
					<li>
						<p>Giá thuê</p>
						<DownOutlined />
					</li>
				</ul>
			</div>
		</section>
	);
};

export default IntroduceObj;

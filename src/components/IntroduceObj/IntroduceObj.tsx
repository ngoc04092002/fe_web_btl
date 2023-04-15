import { DownCircleOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC, useState } from 'react';

import styles from './introduce-obj.module.scss';

import { typeIntros } from '@/constants/initValueIntro';
const cx = classNames.bind(styles);
type Props = {};

interface IChoose {
	[key: string]: string | number;
}

const IntroduceObj: FC<Props> = () => {
	const [click, setClick] = useState<IChoose>({
		'chooseTitle': 0,
		'chooseChild1': '',
		'chooseChild2': '',
		'chooseChild3': '',
	});

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

	return (
		<section
			className={`${cx('intro-web')}`}
			onClick={handleHiddenChooseType}
		>
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
				<ul className={`${cx('type_intro')} flex items-center justify-evenly mt-3 select-none`}>
					{typeIntros.map(({ title, child }, index) => {
						const isTitle = click.chooseTitle === index + 1;
						return (
							<li key={title}>
								<p
									className='choose_type'
									onClick={() => handleChooseType({ ...click, chooseTitle: index + 1 })}
								>
									<span>{click[`chooseChild${index + 1}`] || title}</span>
									<DownOutlined className='align-baseline' />
								</p>
								{isTitle && (
									<ul className={`${cx('tippy_intro')} absolute left-0 top-7 z-[1] w-48`}>
										{child.map((c) => (
											<li
												key={c}
												onClick={() =>
													handleChooseType({ ...click, [`chooseChild${index + 1}`]: c })
												}
											>
												<p className={click[`chooseChild${index + 1}`] === c ? 'color-main' : ''}>
													{c}
												</p>
												{click[`chooseChild${index + 1}`] === c && <DownCircleOutlined />}
											</li>
										))}
									</ul>
								)}
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default IntroduceObj;

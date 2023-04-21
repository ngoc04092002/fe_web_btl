import {
	BankOutlined,
	DollarOutlined,
	DownCircleOutlined,
	DownOutlined,
	EnvironmentOutlined,
} from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC } from 'react';

import styles from './select-type-intro.module.scss';

import { prices, properties, provinces } from '@/constants/initValueIntro';
import { IChoose } from '@/types/components/IntroObj/intro';

type Props = {
	select: IChoose;
	chooseType: (value: IChoose) => void;
	styleText?: string;
	styles?: string;
	isSeachRoom?: boolean;
};
const cx = classNames.bind(styles);

export const typeIntros: {
	title: string;
	child: string[] | [];
	// eslint-disable-next-line no-undef
	Icon: (style: string) => JSX.Element;
}[] = [
	{
		title: 'Toàn quốc',
		child: provinces,
		Icon: (style) => <EnvironmentOutlined className={style} />,
	},
	{
		title: 'Loại bất động sản',
		child: properties,
		Icon: (style) => <BankOutlined className={style} />,
	},
	{
		title: 'Giá thuê',
		child: prices,
		Icon: (style) => <DollarOutlined className={style} />,
	},
];

const SelectTypeIntro: FC<Props> = ({
	select,
	chooseType,
	styleText,
	isSeachRoom = false,
	styles,
}) => {
	return (
		<ul
			className={`${cx('type_intro')} flex items-center justify-evenly mt-3 select-none ${styles}`}
		>
			{typeIntros.map(({ title, child, Icon }, index) => {
				const isTitle = select.chooseTitle === index + 1;
				return (
					<li
						key={title}
						className={`${
							isSeachRoom
								? `border border-solid border-[#ccc] rounded py-2 px-3 mr-2 ${
										index === 0 ? ' lg:w-auto w-full ml-2' : 'lg:!flex !hidden '
								  }`
								: ''
						}`}
					>
						<p
							className='choose_type w-full'
							onClick={(e) => {
								e.stopPropagation();
								chooseType({ ...select, chooseTitle: index + 1 });
							}}
						>
							{isSeachRoom && Icon('!text-black text-[20px] align-baseline')}
							<span className={`${styleText}`}>{select[`chooseChild${index + 1}`] || title}</span>
							<DownOutlined
								className={`align-baseline ${
									isSeachRoom ? '!text-[#657786] text-xs float-right mt-[3px]' : ''
								}`}
							/>
						</p>
						{isTitle && (
							<ul
								className={`${cx('tippy_intro')} absolute left-0 ${
									isSeachRoom ? 'top-[2.5rem]' : 'top-7'
								} z-[1] w-48`}
							>
								{child.map((c) => (
									<li
										key={c}
										onClick={() => chooseType({ ...select, [`chooseChild${index + 1}`]: c })}
									>
										<p className={select[`chooseChild${index + 1}`] === c ? 'color-main' : ''}>
											{c}
										</p>
										{select[`chooseChild${index + 1}`] === c && <DownCircleOutlined />}
									</li>
								))}
							</ul>
						)}
					</li>
				);
			})}
		</ul>
	);
};

export default SelectTypeIntro;

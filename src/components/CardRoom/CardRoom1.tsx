import classNames from 'classnames/bind';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './card-room.module.scss';

import { IRoomInfo } from '@/types/components/type';

type Props = {
	d: IRoomInfo;
	styleInfo?: string;
};
const cx = classNames.bind(styles);

const CardRoom1: FC<Props> = ({ d, styleInfo }) => {
	return (
		<Link
			to='/'
			className='rounded-lg shadow-006 h-[17.6rem]'
		>
			<div>
				<img
					className='rounded-t-lg h-44 w-full object-center object-cover'
					src={d.src}
					alt='bds'
				/>
			</div>
			<div className={`${cx('card_room-rent')} ${styleInfo}`}>
				<p className={`${cx('des')} text-sm font-medium`}>{d.des}</p>
				<div className={`${cx('propers')}`}>
					{!!d?.acreage && (
						<span className='font-bold'>
							{d.acreage} m<sub className='align-super'>2</sub>
						</span>
					)}
					{!!d?.bathRoom && <span>{d.bathRoom} WC</span>}
					{!!d?.bedRoom && <span>{d.bedRoom} VP</span>}
				</div>
				<p className='color-main text-[1.3rem] font-semibold'>{d.price}</p>
			</div>
		</Link>
	);
};

export default CardRoom1;

import classNames from 'classnames/bind';
import React, { FC } from 'react';

import styles from './introduce-obj.module.scss';
const cx = classNames.bind(styles);
type Props = {};

const IntroduceObj: FC<Props> = () => {
	return (
		<section className={`${cx('intro-web')}`}>
			<div className={`${cx('container-bg')}`}>
				<p className='lg:text-5xl md:text-3xl text-2xl'>
					An tâm chọn, An tâm thuê, Uy tín tạo lên thương hiệu!
				</p>
			</div>
		</section>
	);
};

export default IntroduceObj;

import { PhoneOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React from 'react';

import style from './footer.module.scss';

import { getImage } from '@/utils/CustomImagePath';

const cx = classNames.bind(style);

interface Props {}

const Footer: React.FC<Props> = () => {
	return (
		<section className='footer text-[#929292] h-96 w-full py-8'>
			<div className='footer-container mx-40 px-2 flex items-center lg:flex-row flex-col'>
				<div className='footer_left text-black'>
					<ul className={`${cx('footer-01')} flex flex-col`}>
						<li>
							<img
								src={getImage('branch.jpg')}
								alt='branch'
								className='object-cover object-center w-28 h-20'
							/>
						</li>
						<li className='text-sm flex'>
							<PhoneOutlined className='rotate-[100deg] mr-2 text-[#036803]' /> (84+) 123456789
						</li>
						<li></li>
						<li></li>
					</ul>
					<ul className='footer-02'></ul>
				</div>
				<div className='footer_right text-black'>right</div>
			</div>
		</section>
	);
};

export default Footer;

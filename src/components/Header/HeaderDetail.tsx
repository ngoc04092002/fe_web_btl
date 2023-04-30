import {
	BellOutlined,
	CheckCircleOutlined,
	HomeOutlined,
	QuestionCircleOutlined,
	UserOutlined,
} from '@ant-design/icons';
import classNames from 'classnames/bind';
import { getAuth, signOut } from 'firebase/auth';
import React, { FC, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './header.module.scss';

import { AuthContext } from '@/context/AuthProvider';
import { IAuthContext } from '@/types/context/type';
import { IUser } from '@/types/pages/types';
import { getImage } from '@/utils/CustomImagePath';
import { getToast } from '@/utils/CustomToast';
const cx = classNames.bind(styles);

type Props = {
	handleUnShow: React.MouseEventHandler<HTMLLIElement>;
};

const HeaderDetail: FC<Props> = ({ handleUnShow }) => {
	const { user, setUser } = useContext<IAuthContext>(AuthContext);
	const isUserExist = Object.keys(user).length;
	const navigate = useNavigate();

	const handleLogout = () => {
		if (!isUserExist) {
			// check for login
			navigate('/sign-in');
		} else {
			const auth = getAuth();
			signOut(auth)
				.then(() => {
					setUser({});
					localStorage.clear();
					navigate('/');
				})
				.catch((error) => {
					getToast('Netword bad', 'error');
				});
		}
	};

	const dataManager = [
		{
			path: '/dash-board',
			Icon: <HomeOutlined />,
			text: 'Quản lý thông tin',
		},
		{
			path: '/dash-board/profile',
			Icon: <UserOutlined />,
			text: 'Thông tin tài khoản',
		},
		{
			path: '/',
			Icon: <BellOutlined />,
			text: 'Thông báo',
		},
		{
			path: '/feedback',
			Icon: <QuestionCircleOutlined />,
			text: 'Góp ý kiến',
		},
	];

	return (
		<div
			className={`${cx(
				'detail',
			)} absolute bg-white shadow-006 right-[-100px] top-[40px] p-3 w-96 rounded-md cursor-default`}
		>
			<div className='flex items-center select-none'>
				<div className='mr-4'>
					<img
						src={(Object.keys(user).length && (user as IUser).avatar) || getImage('user.png')}
						alt='user'
						className='w-9 h-9 rounded-full object-cover'
					/>
				</div>
				<ul>
					<li>
						<span className='mr-2'>{(user as IUser)?.username}</span>
						<CheckCircleOutlined className={cx('check_icon')} />
					</li>
					<li className='color-main text-base font-semibold'>Thành viên của NV</li>
				</ul>
			</div>
			<div className='flex items-center justify-between px-4 mt-4 bg-[#f7f8f9] p-2 select-none'>
				<div>
					<p className='text-xs text-[#657786]'>Nhân viên kỹ thuật</p>
					<p className='font-bold text-sm'>Vũ Văn Ngọc - Trịnh Quốc Vương</p>
				</div>
				<p>0338787233</p>
			</div>
			<ul className={cx('manager_info')}>
				{!!dataManager &&
					dataManager.length &&
					dataManager.map((d, index) => (
						<li
							key={index}
							onClick={handleUnShow}
						>
							<Link to={d.path}>
								{d.Icon}
								<span>{d.text}</span>
							</Link>
						</li>
					))}
			</ul>
			<span
				className='p-2 block mt-1 hover:color-main font-semibold'
				onClick={handleLogout}
			>
				Đăng xuất
			</span>
		</div>
	);
};

export default HeaderDetail;

import {
	BellOutlined,
	CheckCircleOutlined,
	CloseOutlined,
	DatabaseOutlined,
	HomeOutlined,
	QuestionCircleOutlined,
	UserOutlined,
} from '@ant-design/icons';
import classNames from 'classnames/bind';
import { getAuth, signOut } from 'firebase/auth';
import React, { FC, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { BuildingIcon, CallIcon, HomeIcon, QAIcon, ZaloIcon } from '../../assets/icons';

import styles from './sidebar.module.scss';

import socketClient from '@/config/SocketClient';
import { AuthContext } from '@/context/AuthProvider';
import { CreateMessageRequest } from '@/types/components/ChatMessage/type';
import { IUser } from '@/types/pages/types';
import { getImage } from '@/utils/CustomImagePath';
import { getToast } from '@/utils/CustomToast';

const cx = classNames.bind(styles);
type Props = {
	handleActive?: () => void;
	active?: boolean;
	setActive: (value: boolean) => void;
};

const Sidebar: FC<Props> = ({ active, handleActive, setActive }) => {
	const { user, setUser } = useContext(AuthContext);
	const [msgData, setMsgData] = useState<CreateMessageRequest[] | []>([]);
	const isUserExist = Object.keys(user).length;
	const navigate = useNavigate();

	const handleClick = () => {
		if (!isUserExist) {
			// check for login
			navigate('/sign-in');
		} else {
			const auth = getAuth();
			signOut(auth)
				.then(() => {
					setUser({});
					localStorage.clear();
					setActive(false);
					navigate('/');
				})
				.catch((error) => {
					getToast('Netword bad', 'error');
				});
		}
	};

	const dataUtiliity = [
		{
			path: '/search-room?s=',
			Icon: <HomeIcon />,
			text: 'Tìm thuê',
		},
		{
			path: '/q-a',
			Icon: <QAIcon />,
			text: 'Hỏi đáp',
		},
		{
			path: '/news',
			Icon: <BuildingIcon />,
			text: 'Tin tức',
		},
		{
			path: '/view-later',
			Icon: <DatabaseOutlined className={cx('building_icon')} />,
			text: 'Xem sau',
		},
	];

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
			path: '/feedback',
			Icon: <QuestionCircleOutlined />,
			text: 'Góp ý kiến',
		},
	];

	// websocket
	useEffect(() => {
		const stompClient = socketClient.getClient();
		stompClient.connect(
			{},
			() => {
				stompClient.subscribe('/receive/message', (response) => {
					const resData: CreateMessageRequest = JSON.parse(response.body);
					console.log(resData);
					if (resData.rid.includes((user as IUser)?.id?.toString() || '')) {
						setMsgData((prev) => [...prev, resData]);
					}
				});
			},
			onError,
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onError = (err: any) => {
		console.log(err);
	};
	console.log(msgData);
	return (
		<div
			className={`${cx('backdrop', {
				show: active,
			})}  wrapper_backdrop inset-y-0 left-0 right-20 bg-white fixed z-[10000]`}
		>
			<div className='wrapper_backdrop-container '>
				<div className='flex items-center justify-between pt-7 pb-4 px-6'>
					<div className='flex items-center select-none'>
						<div className='mr-4'>
							<img
								src={getImage('user.png')}
								alt='user'
								className='w-9 h-9'
							/>
						</div>
						{!!isUserExist && (
							<ul>
								<li>
									<span className='mr-2'>{(user as IUser)?.username}</span>
									<CheckCircleOutlined className={cx('check_icon')} />
								</li>
								<li className='color-main text-base font-semibold'>Thành viên của NV</li>
							</ul>
						)}
					</div>
					<div className='self-baseline cursor-pointer'>
						<CloseOutlined
							onClick={handleActive}
							className='text-[1.6rem]'
						/>
					</div>
				</div>
				<Link
					className='block text-center bg-[#43d2dd36] mx-5 p-2 text-[#0299a5] font-semibold rounded-lg'
					to='/'
				>
					Đăng tin
				</Link>
				<div className='flex items-center justify-between px-4 mt-4 bg-[#f7f8f9] p-2 select-none'>
					<div>
						<p className='text-xs text-[#657786]'>Nhân viên kỹ thuật</p>
						<p className='font-bold'>Vũ Văn Ngọc - Trịnh Quốc Vương</p>
					</div>
					<div className='flex items-center'>
						<a
							href='https://www.facebook.com/profile.php?id=100009696701104'
							target='_blank'
							rel='noreferrer'
						>
							<CallIcon />
						</a>
						<a
							href='https://www.facebook.com/profile.php?id=100009696701104'
							target='_blank'
							rel='noreferrer'
							className='ml-2'
						>
							<ZaloIcon />
						</a>
					</div>
				</div>
				<div className='grid grid-cols-2 gap-3 mx-5 mt-7'>
					{!!dataUtiliity &&
						dataUtiliity.length &&
						dataUtiliity.map((d, index) => (
							<Link
								key={index}
								className='shadow-006 rounded-lg h-20 px-3 pt-3 pb-2 flex flex-col justify-between items-baseline'
								to={d.path}
								onClick={handleActive}
							>
								<ul className='h-full flex flex-col items-start justify-between'>
									<li>{d.Icon}</li>
									<li className='font-semibold'>{d.text}</li>
								</ul>
							</Link>
						))}
				</div>
				<ul className={cx('manager_info')}>
					{!!dataManager &&
						dataManager.length &&
						dataManager.map((d, index) => (
							<li
								key={index}
								onClick={handleActive}
							>
								<Link to={d.path}>
									{d.Icon}
									<span>{d.text}</span>
								</Link>
							</li>
						))}
					<li
						onClick={handleActive}
						className='relative'
					>
						<Link to={'/dash-board'}>
							<BellOutlined />
							<span>Thông báo</span>
						</Link>
						<span className='absolute bg-red-600 left-[-3px] top-[6px] w-4 h-4 rounded-[50%] flex items-center justify-center text-white'>
							!
						</span>
					</li>
				</ul>
				<span
					className='cursor-pointer mt-3 mb-8 block text-center bg-[#ccc] mx-5 p-2 text-black font-semibold rounded-lg'
					onClick={handleClick}
				>
					{Object.keys(user).length ? 'Đăng xuất' : 'Đăng nhập'}
				</span>
			</div>
		</div>
	);
};

export default Sidebar;

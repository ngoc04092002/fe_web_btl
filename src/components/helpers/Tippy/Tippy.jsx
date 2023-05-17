import classNames from 'classnames/bind';
import React from 'react';

import NotFoundItem from '../NotFoundItem';

import Item from './Item';
import styles from './tippy.module.scss';

import Loading from '@/components/Loading';
import { FetchApiFilterPostRoom } from '@/hooks/fetchApiPostRoom';

const cx = classNames.bind(styles);

const Tippy = ({ value = '' }) => {
	const { res, isLoading } = FetchApiFilterPostRoom({
		limit: 0,
		offset: 0,
		s: value,
	});

	return (
		<div
			className={`${cx('tippy_container')} tippy absolute bg-white top-[42px] left-0 w-full p-2`}
		>
			{isLoading ? (
				<Loading />
			) : !res.length ? (
				<NotFoundItem />
			) : (
				res.map((r) => (
					<Item
						key={r.id}
						item={r}
					/>
				))
			)}
		</div>
	);
};

export default Tippy;

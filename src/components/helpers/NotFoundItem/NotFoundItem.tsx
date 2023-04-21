import React, { FC } from 'react';

type Props = {
	styles?: string;
};

const NotFoundItem: FC<Props> = ({ styles }) => {
	return <div className={styles}>Không tìm thấy dữ liệu</div>;
};

export default NotFoundItem;

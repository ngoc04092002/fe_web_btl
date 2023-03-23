import React, { FC } from 'react';

import Profile from './Profile';

type Props = {};

const ProfileContainer: FC<Props> = () => {
	return (
		<div className='w-full'>
			<Profile />
		</div>
	);
};

export default ProfileContainer;

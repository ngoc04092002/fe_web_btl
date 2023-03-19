import React, { FC, memo } from 'react';

import IntroduceObj from '../IntroduceObj';

import WrapperElm from './WrapperElm';

type Props = {};

const WrapperElmContainer: FC<Props> = () => {
	return (
		<section className='wrapper_elm-container w-full h-full'>
			<IntroduceObj />
			<div className='wrapper_elm mx-auto max-w-[1240px] px-6'>
				<WrapperElm />
			</div>
		</section>
	);
};

export default memo(WrapperElmContainer);

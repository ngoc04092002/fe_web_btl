import React, { FC } from 'react';

import IntroduceObj from '../IntroduceObj';

import WrapperElm from './WrapperElm';

type Props = {};

const WrapperElmContainer: FC<Props> = () => {
	return (
		<section className='wrapper_elm-container w-full h-full'>
			<IntroduceObj />
			<div className='wrapper_elm mx-auto max-w-[1170px] px-8'>
				<WrapperElm />
			</div>
		</section>
	);
};

export default WrapperElmContainer;

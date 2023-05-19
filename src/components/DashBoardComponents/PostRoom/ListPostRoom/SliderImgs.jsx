import React, { useState } from 'react';

const SliderImgs = ({ srcs }) => {
	const lenSrcs = srcs.length - 1;
	const [slideIndex, setSlideIndex] = useState(0);

	function plusDivs(n) {
		showDivs(slideIndex + n);
	}

	function showDivs(n) {
		setSlideIndex(n);
		if (n > lenSrcs) {
			setSlideIndex(0);
		}
		if (n < 0) {
			setSlideIndex(lenSrcs);
		}
	}

	return (
		<div className='relative'>
			{srcs &&
				!!srcs.length &&
				srcs.map((src, index) => (
					<div key={src.id}>
						{src.src.includes('mp4') ? (
							<video
								src={src.src}
								controls
								className={`w-[460px] ${index === slideIndex ? 'block' : 'hidden'}`}
							/>
						) : (
							<img
								src={src.src}
								className={`w-[460px] ${index === slideIndex ? 'block' : 'hidden'}`}
								alt=''
							/>
						)}
					</div>
				))}
			<button
				className='text-2xl bg-[#0000009c] py-1 px-2 absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2'
				onClick={() => plusDivs(-1)}
			>
				&#10094;
			</button>
			<button
				className='text-2xl bg-[#0000009c] py-1 px-2 absolute top-1/2 right-0 -translate-y-1/2
				translate-x-1/2'
				onClick={() => plusDivs(1)}
			>
				&#10095;
			</button>
		</div>
	);
};

export default SliderImgs;

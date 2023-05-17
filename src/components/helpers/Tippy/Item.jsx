import React from 'react';

const Item = ({ item }) => {
	return (
		<a
			href={`/room-item/${item.id}`}
			className='flex items-center w-full mb-3 hover:bg-[#cccccc57]'
		>
			<div className='w-[20%] h-[100px]'>
				<img
					src={item.src[0].src}
					alt=''
					className='w-full h-full'
				/>
			</div>
			<div className='w-[80%] pl-2'>
				<h1 className='vertical-1 font-bold text-md'>{item.title}</h1>
				<p className='text-xs color-main'>{item.address}</p>
				<p className='vertical-3 text-sm'>{item.des}</p>
			</div>
		</a>
	);
};

export default Item;

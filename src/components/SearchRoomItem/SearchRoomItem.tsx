import React, { FC } from 'react';

import Item from './Item';

import { IPostRoomResponse } from '@/types/pages/IDashBoard';

type Props = {
	data: IPostRoomResponse[] | [];
};

const SearchRoomItem: FC<Props> = ({ data }) => {
	console.log(data);
	return (
		<div>
			<ul>
				{data &&
					data.length &&
					data.map((d) => {
						if (d.status) {
							return (
								<li
									key={d.id}
									className='pt-4 mb-4 border-0 border-t border-solid border-t-[#ccc] relative flex items-center justify-between select-none'
								>
									<Item data={d} />
								</li>
							);
						}
						return <></>;
					})}
			</ul>
		</div>
	);
};

export default SearchRoomItem;

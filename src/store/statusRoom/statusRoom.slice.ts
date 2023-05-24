import { createSlice } from '@reduxjs/toolkit';

import { IStatusRoom } from '../types/statusRoom';

const initialState: IStatusRoom = { rid: '', isRep: false };

const statusRoomSlice = createSlice({
	name: 'statusRoom',
	initialState,
	reducers: {
		updateStatus: (state, action) => {
			console.log(state, action);
			state.rid = action.payload.rid;
			state.isRep = action.payload.isRep;
		},
	},
});

export const { updateStatus } = statusRoomSlice.actions;
const statusRoom = statusRoomSlice.reducer;
export default statusRoom;

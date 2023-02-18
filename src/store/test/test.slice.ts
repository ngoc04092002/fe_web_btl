import { createSlice } from '@reduxjs/toolkit';

import { Increment } from './actions';
import { num } from '../types/test';

const initialState: num = { counter: 0 };

const testSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		increment: Increment,
	},
});

export const { increment } = testSlice.actions;
const testReducer = testSlice.reducer;
export default testReducer;

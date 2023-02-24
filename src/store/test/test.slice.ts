import { createSlice } from '@reduxjs/toolkit';

import { num } from '../types/test';

import { Increment } from './actions';

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

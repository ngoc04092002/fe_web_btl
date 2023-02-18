import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

import { num } from '../types/test';

export const Increment: CaseReducer<num, PayloadAction<num>> = (state, action) => {
	state.counter = action.payload.counter;
};

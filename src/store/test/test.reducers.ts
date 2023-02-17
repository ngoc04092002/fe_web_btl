// eslint-disable-next-line import/named
import { createReducer, AnyAction, PayloadAction } from '@reduxjs/toolkit';

import { increment } from './actions';
import { num } from '../types/test';

const initial: num = { counter: 1 };

function isActionWithNumberPayload(action: AnyAction): action is PayloadAction<number> {
	return typeof action.payload === 'number';
}

const testReducer = createReducer(initial, (builder) => {
	builder
		.addCase(increment, (state, action) => {
			// action is inferred correctly here
			state.counter += action.payload;
		})
		// You can apply a "matcher function" to incoming actions
		.addMatcher(isActionWithNumberPayload, (state, action) => {});
	// and provide a default case if no other handlers matched
	// .addDefaultCase((state, action) => {});
});

export default testReducer;

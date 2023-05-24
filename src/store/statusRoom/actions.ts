import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

import { IStatusRoom } from '../types/statusRoom';

export const UpdateStatus: CaseReducer<any, PayloadAction<IStatusRoom>> = (state, action) => {
	state.rid = action.payload.rid;
	state.isRep = action.payload.isRep;
};

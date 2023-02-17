import { createAction } from '@reduxjs/toolkit';

export const increment = createAction<number>('test/count');

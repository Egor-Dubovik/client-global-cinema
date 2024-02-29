import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './rootReducer';

const initialState = {} as TypeRootState;

export const createReduxStore = (state = initialState) => {
	return configureStore({
		reducer: rootReducer,
		devTools: true,
	});
};

export type TypeRootState = ReturnType<typeof rootReducer>;
export type TypeAppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

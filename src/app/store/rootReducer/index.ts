import { combineReducers } from '@reduxjs/toolkit';
import { reducer as toastReducer } from 'react-redux-toastr';

import { userReducer } from '@/entities/User';

export const rootReducer = combineReducers({
	user: userReducer,
	toastr: toastReducer,
});

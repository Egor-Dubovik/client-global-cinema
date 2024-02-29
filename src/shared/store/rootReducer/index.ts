import { combineReducers } from '@reduxjs/toolkit';
import { reducer as toastReducer } from 'react-redux-toastr';

export const rootReducer = combineReducers({
	toastr: toastReducer,
});

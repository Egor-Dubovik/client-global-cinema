import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';

import { AuthService } from '@/entities/User/api/services/auth';
import { IAuthParams, IAuthResponse } from '@/entities/User/model/types';

import { errorCatch } from '@/shared/utils/error/errorCatch';
import { toastrError } from '@/shared/utils/error/toastrError';

export const register = createAsyncThunk<IAuthResponse, IAuthParams>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const data = await AuthService.register(email, password);
			toastr.success('Registration', 'Completed successfully');
			return data;
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const login = createAsyncThunk<IAuthResponse, IAuthParams>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const data = await AuthService.login(email, password);
			toastr.success('Login', 'Completed successfully');
			return data;
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
	try {
		await AuthService.logout();
	} catch (error) {
		toastrError(error);
		return thunkApi.rejectWithValue(error);
	}
});

export const checkAuth = createAsyncThunk<IAuthResponse>('auth/check-auth', async (_, thunkApi) => {
	try {
		const data = await AuthService.getNewTokens();
		return data;
	} catch (error) {
		if (errorCatch(error) === 'jwt expired') {
			toastrError('Logout', 'Your authorized is finished, plz sign in again');
			thunkApi.dispatch(logout());
		}

		return thunkApi.rejectWithValue(error);
	}
});

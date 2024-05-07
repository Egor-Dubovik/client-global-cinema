import Cookies from 'js-cookie';

import { IAuthResponse } from '@/entities/User';

import { axiosClassic } from '@/shared/api';
import { getAuthUrl } from '@/shared/config/api.config';
import { clearUserDataFromStorage, saveUserDataToStorage } from '@/shared/utils/storage/storage';

export const AuthService = {
	async register(email: string, password: string): Promise<IAuthResponse> {
		const response = await axiosClassic.post<IAuthResponse>(getAuthUrl('register'), {
			email,
			password,
		});

		if (response.data.accessToken) saveUserDataToStorage(response.data);
		return response.data;
	},

	async login(email: string, password: string): Promise<IAuthResponse> {
		const response = await axiosClassic.post<IAuthResponse>(getAuthUrl('login'), {
			email,
			password,
		});

		if (response.data.accessToken) saveUserDataToStorage(response.data);
		return response.data;
	},

	async logout() {
		clearUserDataFromStorage();
	},

	async getNewTokens(): Promise<IAuthResponse> {
		const response = await axiosClassic.post<IAuthResponse>(getAuthUrl('login/access-token'), {
			refreshToken: Cookies.get('refreshToken'),
		});

		if (response.data.accessToken) saveUserDataToStorage(response.data);
		return response.data;
	},
};

import axios, { AxiosError } from 'axios';

import { AuthService } from '@/entities/User';

import { getAuthUrl } from '@/shared/config/api.config';
import { createAxiosInstance } from '@/shared/utils/axios';
import { errorCatch } from '@/shared/utils/error/errorCatch';

export const axiosClassic = createAxiosInstance();
export const $api = createAxiosInstance(true);

axiosClassic.interceptors.response.use(
	(response) => response,
	(error: AxiosError) => {
		if (axios.isCancel(error)) global.console.log('Request canceled', error.message);
		return Promise.reject(error);
	}
);

$api.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		const originalRequest = error.config;
		if (
			(error.response.status == 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;
			try {
				await AuthService.getNewTokens();
				return $api.request(originalRequest);
			} catch (e) {
				if (errorCatch(e) === 'jwt expired') {
					await AuthService.logout();
					window.location.href = getAuthUrl('/login');
				}
				console.log('NOT AUTHORIZED');
			}
		}
		throw error;
	}
);

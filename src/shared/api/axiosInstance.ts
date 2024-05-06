import axios, { AxiosError } from 'axios';

import { createAxiosInstance } from '@/shared/utils/axios';

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
		if (error.response.status == 401 && error.config && !error.config._isRetry) {
			originalRequest._isRetry = true;
			try {
				if (typeof window !== 'undefined') {
					const refreshToken = localStorage.getItem('refreshToken');
					if (refreshToken) {
						// const tokens = await refreshTokens(refreshToken);
						// addTokens(tokens);
						return $api.request(originalRequest);
					}
				}
			} catch (e) {
				console.log('NOT AUTHORIZED');
			}
		}
		throw error;
	}
);

// export default $api;

// const $api = axios.create({
// 	baseURL: API_URL,
// 	headers: { 'Content-Type': 'application/json' },
// });

// $api.interceptors.response.use(
// 	(response) => response,
// 	(error: AxiosError) => {
// 		if (axios.isCancel(error)) global.console.log('Request canceled', error.message);
// 		return Promise.reject(error);
// 	}
// );

// export default $api;

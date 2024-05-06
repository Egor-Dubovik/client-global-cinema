import axios from 'axios';

import { API_URL } from '../config/api.config';

export const createAxiosInstance = (isWithAuth = false) => {
	const instance = axios.create({
		baseURL: API_URL,
		headers: { 'Content-Type': 'application/json' },
	});

	if (isWithAuth) {
		instance.interceptors.request.use((config) => {
			config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
			return config;
		});
	}

	return instance;
};

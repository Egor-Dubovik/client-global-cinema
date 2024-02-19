import axios, { AxiosError } from 'axios';

import { API_URL } from '@/shared/config/api.config';

const $api = axios.create({
	baseURL: API_URL,
	headers: { 'Content-Type': 'application/json' },
});

$api.interceptors.response.use(
	(response) => response,
	(error: AxiosError) => {
		if (axios.isCancel(error)) global.console.log('Request canceled', error.message);
		return Promise.reject(error);
	}
);

export default $api;

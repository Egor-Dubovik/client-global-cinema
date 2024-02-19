import { AxiosRequestConfig } from 'axios';

import $api from '../api/axiosInstance';
import { REQUEST_METHODS } from '../constants/api';
import { IError, RequestKeyType } from '../types/api.type';
import { IAxiosError } from '../types/axios.type';

interface IAxiosRequest {
	path: string;
	method?: RequestKeyType;
	data?: unknown;
	config?: AxiosRequestConfig;
}

export const axiosRequest = async <TResponse>({
	path,
	method = 'GET',
	data,
	config,
}: IAxiosRequest): Promise<TResponse | IError> => {
	try {
		const currentMethod = REQUEST_METHODS[method];
		const response = await $api[currentMethod]<TResponse>(path, data, config);
		return response.data;
	} catch (error) {
		const err = error as IAxiosError;
		const message = err.response?.data?.message || err.message || err.name;
		return { error: message };
	}
};

import { AxiosRequestConfig, AxiosResponse } from 'axios';

// interface IResponse {
// 	errors?: Record<string, unknown>;
// 	error?: string;
// 	type: string;
// 	code: number;
// }

export interface IAxiosError extends Error {
	config: AxiosRequestConfig;
	code?: string;
	request?: unknown;
	response: AxiosResponse;
	isAxiosError: boolean;
	toJSON: () => object;
}

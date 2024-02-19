export type RequestKeyType = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type RequestValueType = 'get' | 'post' | 'put' | 'delete';

export interface IRequestMethods {
	[key: string]: RequestValueType;
}

export interface IError {
	error: string;
}

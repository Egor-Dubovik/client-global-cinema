import { INIT_VALUE } from '@/shared/constants/numbers';

export const errorCatch = (error: any): string => {
	return error.response && error.response.data
		? typeof error.response.data.message === 'object'
			? error.response.data.message[INIT_VALUE]
			: error.response.data.message
		: error.message;
};

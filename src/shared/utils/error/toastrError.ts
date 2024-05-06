import { toastr } from 'react-redux-toastr';

import { errorCatch } from '@/shared/utils/error/errorCatch';

export const toastrError = (error: any, title?: string) => {
	const message = errorCatch(error);
	toastr.error(title || 'Error request', message);
	throw message;
};

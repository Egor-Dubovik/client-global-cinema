import { userActions, userThunks } from '@/entities/User';

export const allActions = {
	...userThunks,
	...userActions,
};

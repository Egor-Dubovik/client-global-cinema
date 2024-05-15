import { IUserData } from '@/entities/User/model/types';

import { getLocalStore } from '@/shared/utils/storage/getLocalStore';

export const initialState: IUserData = {
	user: getLocalStore('user'),
	isLoading: false,
};

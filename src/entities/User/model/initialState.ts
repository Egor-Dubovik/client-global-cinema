import { IUserData } from '@/entities/User/model/types';

import { getLocalStore } from '@/utils/storage/getLocalStore';

export const initialState: IUserData = {
	user: getLocalStore('user'),
	isLoading: false,
};

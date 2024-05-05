import { IUserData } from '../model/types';

export const useAuth = (): IUserData => {
	return { user: null, isLoading: false };
};

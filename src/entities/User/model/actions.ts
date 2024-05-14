import { IUserData } from '@/entities/User/model/types';

import { IActionProps } from '@/shared/types/redux.type';

export const UserActions = {
	setUser(state: IUserData, { payload }: IActionProps) {
		state.user = payload;
	},
};

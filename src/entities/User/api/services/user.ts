import { IProfileInput } from '@/features/EditProfile/types';

import { $api } from '@/shared/api';
import { getUserUrl } from '@/shared/config/api.config';

import { IUser } from '../../model/types';

export const UserService = {
	async getUser() {
		return $api.get<IUser>(getUserUrl('profile'));
	},

	async updateProfile(data: IProfileInput) {
		if (data.password === '') data.password = null;
		return $api.put<string>(getUserUrl('profile'), data);
	},
};

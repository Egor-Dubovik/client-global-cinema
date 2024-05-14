import { IUser } from '@/entities/User';

import { $api } from '@/shared/api';
import { getUserUrl } from '@/shared/config/api.config';

export const AdminService = {
	async getCountUsers() {
		return $api.get<number>(getUserUrl('count'));
	},

	async getAllUsers(searchTerm?: string) {
		return $api.get<IUser[]>(getUserUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		});
	},

	async deleteUser(id: string) {
		return $api.delete<string>(getUserUrl(id));
	},
};

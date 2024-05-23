import { IUser, IUserEditInput } from '@/entities/User';

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

	async getById(_id: string) {
		return $api.get<IUser>(getUserUrl(_id));
	},

	async create() {
		return $api.post<string>(getUserUrl(''));
	},

	async update(_id: string, data: IUserEditInput) {
		if (data.password === '') data.password = null;
		return $api.put<string>(getUserUrl(_id), data);
	},

	async deleteUser(id: string) {
		return $api.delete<string>(getUserUrl(id));
	},
};

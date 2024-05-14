import { $api } from '@/shared/api';
import { getUserUrl } from '@/shared/config/api.config';

export const AdminService = {
	async getCountUsers() {
		return $api.get<number>(getUserUrl('count'));
	},
};

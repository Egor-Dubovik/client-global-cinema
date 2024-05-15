import { axiosRequest } from '@/shared/api';
import { $api } from '@/shared/api';
import { getActorUrl } from '@/shared/config/api.config';
import { IError } from '@/shared/types/api.type';

import { IActor } from '../model/types';

export const ActorService = {
	async getActors(searchTerm?: string): Promise<IError | IActor[]> {
		return await axiosRequest<IActor[]>({
			path: getActorUrl(''),
			config: { params: searchTerm ? { searchTerm } : {} },
		});
	},

	async deleteActor(id: string) {
		return $api.delete<string>(getActorUrl(id));
	},
};

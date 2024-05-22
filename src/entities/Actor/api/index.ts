import { axiosRequest } from '@/shared/api';
import { $api } from '@/shared/api';
import { getActorUrl } from '@/shared/config/api.config';
import { getFirstElementOrOriginal } from '@/shared/helpers/array/getFirstElementOrOriginal';
import { IError } from '@/shared/types/api.type';

import { IActor, IActorEditInput } from '../model/types';

export const ActorService = {
	async getActors(searchTerm?: string): Promise<IError | IActor[]> {
		return await axiosRequest<IActor[]>({
			path: getActorUrl(''),
			config: { params: searchTerm ? { searchTerm } : {} },
		});
	},

	async getById(_id: string) {
		return $api.get<IActorEditInput>(getActorUrl(_id));
	},

	async update(_id: string, data: IActorEditInput) {
		data.photo = getFirstElementOrOriginal(data.photo);
		return $api.put<string>(getActorUrl(_id), data);
	},

	async create() {
		return $api.post<string>(getActorUrl(''));
	},

	async delete(id: string) {
		return $api.delete<string>(getActorUrl(id));
	},
};

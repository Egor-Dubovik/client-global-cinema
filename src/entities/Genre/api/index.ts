import { IGenre, IGenreEditInput } from '@/entities/Genre';

import { axiosRequest } from '@/shared/api';
import { $api } from '@/shared/api';
import { getGenreUrl } from '@/shared/config/api.config';
import { IError } from '@/shared/types/api.type';

export const GenreService = {
	async getGenres(searchTerm?: string): Promise<IError | IGenre[]> {
		const params = searchTerm ? { searchTerm } : {};
		return axiosRequest<IGenre[]>({ path: getGenreUrl(''), config: { params } });
	},

	async getById(_id: string) {
		return $api.get<IGenreEditInput>(getGenreUrl(_id));
	},

	async update(_id: string, data: IGenreEditInput) {
		return $api.put<string>(getGenreUrl(_id), data);
	},

	async delete(id: string) {
		return $api.delete<string>(getGenreUrl(id));
	},
};

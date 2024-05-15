import { IGenre } from '@/entities/Genre';

import { axiosRequest } from '@/shared/api';
import { $api } from '@/shared/api';
import { getGenreUrl } from '@/shared/config/api.config';
import { IError } from '@/shared/types/api.type';

export const GenreService = {
	async getGenres(searchTerm?: string): Promise<IError | IGenre[]> {
		const params = searchTerm ? { searchTerm } : {};
		return await axiosRequest<IGenre[]>({ path: getGenreUrl(''), config: { params } });
	},

	async deleteGenre(id: string) {
		return $api.delete<string>(getGenreUrl(id));
	},
};

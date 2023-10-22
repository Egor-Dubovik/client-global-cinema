import $api from '@/shared/api/axiosInstance';
import { IMovie } from '@/shared/api/movies/models';
import { getMovieUrl } from '@/shared/config/api.config';

export const MovieService = {
	async getAll(searchTerm?: string) {
		const response = await $api.get<IMovie[]>(getMovieUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		});
		return response.data;
	},
};

import { IMovie } from '@/entities/Movie';

import $api from '@/shared/api/axiosInstance';
import { getMovieUrl } from '@/shared/config/api.config';

export const searchMovies = async (searchTerm?: string) => {
	const response = await $api.get<IMovie[]>(getMovieUrl(''), {
		params: searchTerm ? { searchTerm } : {},
	});
	return response.data;
};

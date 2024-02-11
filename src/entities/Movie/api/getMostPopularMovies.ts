import { IMovie } from '@/entities/Movie';

import $api from '@/shared/api/axiosInstance';
import { getMovieUrl } from '@/shared/config/api.config';

export const getMostPopularMovies = async () => {
	const response = await $api.get<IMovie[]>(getMovieUrl('most-popular'));
	return response.data;
};

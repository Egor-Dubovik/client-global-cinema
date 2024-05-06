import { IMovie } from '@/entities/Movie';

import { axiosClassic } from '@/shared/api';
import { getMovieUrl } from '@/shared/config/api.config';

export const searchMovies = async (searchTerm?: string) => {
	const response = await axiosClassic.get<IMovie[]>(getMovieUrl(''), {
		params: searchTerm ? { searchTerm } : {},
	});
	return response.data;
};

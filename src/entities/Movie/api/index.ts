import { IMovie } from '@/entities/Movie';

import { axiosRequest } from '@/shared/api';
import { getMovieUrl } from '@/shared/config/api.config';
import { IError } from '@/shared/types/api.type';

export const MovieService = {
	async getMostPopularMovies(): Promise<IMovie[] | IError> {
		return axiosRequest<IMovie[]>({ path: getMovieUrl('most-popular') });
	},
};
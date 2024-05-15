import { IMovie } from '@/entities/Movie';

import { $api, axiosRequest } from '@/shared/api';
import { getMovieUrl } from '@/shared/config/api.config';
import { IError } from '@/shared/types/api.type';

export const MovieService = {
	async getMostPopularMovies(): Promise<IMovie[] | IError> {
		return axiosRequest<IMovie[]>({ path: getMovieUrl('most-popular') });
	},

	async getMovies(searchTerm?: string): Promise<IError | IMovie[]> {
		const params = searchTerm ? { searchTerm } : {};
		return await axiosRequest<IMovie[]>({
			path: getMovieUrl(''),
			config: { params },
		});
	},

	async deleteMovie(id: string) {
		return $api.delete<string>(getMovieUrl(id));
	},
};

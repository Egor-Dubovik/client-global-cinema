import { IMovie } from '@/entities/Movie';
import { IMovieEditInput } from '@/entities/Movie/model/types';

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

	async getById(_id: string) {
		return $api.get<IMovieEditInput>(getMovieUrl(_id));
	},

	async update(_id: string, data: IMovieEditInput) {
		return $api.put<string>(getMovieUrl(_id), { ...data, videoUrl: data.videoUrl[0] });
	},

	async create() {
		return $api.post<string>(getMovieUrl(''));
	},

	async delete(id: string) {
		return $api.delete<string>(getMovieUrl(id));
	},
};

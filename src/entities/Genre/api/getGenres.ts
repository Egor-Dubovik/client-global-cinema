import { IGenre } from '@/entities/Genre';

import { axiosRequest } from '@/shared/api';
import { getGenreUrl } from '@/shared/config/api.config';
import { IError } from '@/shared/types/api.type';

export const getGenres = async (query?: string): Promise<IError | IGenre[]> => {
	const params = query ? { query } : {};

	return await axiosRequest<IGenre[]>({ path: getGenreUrl(''), config: { params } });
};

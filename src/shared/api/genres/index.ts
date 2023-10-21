import $api from '@/shared/api/axiosInstance';
import { IGenre } from '@/shared/api/genres/models';
import { getGenreUrl } from '@/shared/config/api.config';

export const getGenres = async (query?: string): Promise<IGenre[]> => {
	const params = query ? { query } : {};
	const response = await $api.get<IGenre[]>(getGenreUrl(''), { params });
	return response.data;
};

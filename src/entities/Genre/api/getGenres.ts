import { IGenre } from '@/entities/Genre';

import $api from '@/shared/api/axiosInstance';
import { getGenreUrl } from '@/shared/config/api.config';
import { IAxiosError } from '@/shared/types/axios.type';

export const getGenres = async (query?: string): Promise<IGenre[] | IAxiosError> => {
	const params = query ? { query } : {};
	const response = await $api.get<IGenre[]>(getGenreUrl(''), { params });
	return response.data;
};

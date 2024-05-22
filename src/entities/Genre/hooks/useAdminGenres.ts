'use client';

import { useQuery } from 'react-query';

import { GenreService, IGenre } from '@/entities/Genre';

import { IOptions } from '@/shared/UI/form-elements/Select';
import { toastrError } from '@/shared/utils/error/toastrError';

export const useAdminGenres = () => {
	const queryData = useQuery({
		queryKey: 'list of genres',
		queryFn: async () => {
			const response = await GenreService.getGenres();
			if ('error' in response) toastrError(response, 'Получение жанров');
			return response as IGenre[];
		},
		select: (genres) => {
			return genres.map((genre): IOptions => ({ label: genre.name, value: genre._id }));
		},
	});

	return queryData;
};

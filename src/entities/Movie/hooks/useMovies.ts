import { useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { getGenresList } from '@/entities/Genre';

import { ITableItem } from '@/shared/UI/Table';
import { DEBOUNCED_DELAY } from '@/shared/constants/numbers';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { toastrError } from '@/shared/utils/error/toastrError';

import { MovieService } from '../api';

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedQuery = useDebounce(searchTerm, DEBOUNCED_DELAY);

	const queryData = useQuery({
		queryKey: ['search movie list', debouncedQuery],
		queryFn: () => MovieService.getMovies(debouncedQuery),
		select: (movies) => {
			if ('error' in movies) {
				toastrError(movies, 'Таблица фильмов');
				return [];
			}

			return movies.map(
				(movie): ITableItem => ({
					_id: movie._id,
					editUrl: `movie/edit/${movie._id}`,
					items: [movie.title, getGenresList(movie.genres), String(movie.rating)],
				})
			);
		},
	});

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['deleted movie'],
		mutationFn: (userId: string) => MovieService.deleteMovie(userId),
		onError: (error) => {
			toastrError(error, 'Удаление фильма');
		},
		onSuccess: () => {
			toastr.success('Фильма удалён', 'удаление прошло успешно');
			queryData.refetch();
		},
	});

	const handleSearch = (query: string) => {
		setSearchTerm(query);
	};

	return useMemo(
		() => ({ ...queryData, searchTerm, handleSearch, deleteAsync }),
		[queryData, searchTerm, deleteAsync]
	);
};

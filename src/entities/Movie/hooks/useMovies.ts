import { useRouter } from 'next/navigation';
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
	const router = useRouter();
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
		mutationFn: (userId: string) => MovieService.delete(userId),
		onError: (error) => {
			toastrError(error, 'Удаление фильма');
		},
		onSuccess: () => {
			toastr.success('Фильма удалён', 'удаление прошло успешно');
			queryData.refetch();
		},
	});

	const { mutateAsync: createAsync } = useMutation({
		mutationKey: ['create movie'],
		mutationFn: () => MovieService.create(),
		onError: (error) => {
			toastrError(error, 'Создание фильма');
		},
		onSuccess: ({ data: _id }) => {
			toastr.success('Фильм создан', 'создание прошло успешно');
			router.push(`actors/edit/${_id}`);
		},
	});

	const handleSearch = (query: string) => {
		setSearchTerm(query);
	};

	return useMemo(
		() => ({ ...queryData, searchTerm, handleSearch, createAsync, deleteAsync }),
		[queryData, searchTerm, createAsync, deleteAsync]
	);
};

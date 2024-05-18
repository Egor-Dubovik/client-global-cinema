import { useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { ITableItem } from '@/shared/UI/Table';
import { DEBOUNCED_DELAY } from '@/shared/constants/numbers';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { toastrError } from '@/shared/utils/error/toastrError';

import { GenreService } from '../api';

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedQuery = useDebounce(searchTerm, DEBOUNCED_DELAY);

	const queryData = useQuery({
		queryKey: ['search genres list', debouncedQuery],
		queryFn: () => GenreService.getGenres(debouncedQuery),
		select: (genres) => {
			if ('error' in genres) {
				toastrError(genres, 'Лист жанров');
				return [];
			}

			return genres.map(
				(genre): ITableItem => ({
					_id: genre._id,
					editUrl: `genres/edit/${genre._id}`,
					items: [genre.name, genre.slug],
				})
			);
		},
	});

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['deleted genre'],
		mutationFn: (userId: string) => GenreService.delete(userId),
		onError: (error) => {
			toastrError(error, 'Удаление жанра');
		},
		onSuccess: () => {
			toastr.success('Жанр удалён', 'удаление прошло успешно');
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

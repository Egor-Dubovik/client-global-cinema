import { useState } from 'react';
import { useQuery } from 'react-query';

import { MovieService } from '@/entities/Movie/api';

import { DEBOUNCED_DELAY } from '@/shared/constants/numbers';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { toastrError } from '@/shared/utils/error/toastrError';

export const useMovieSearch = () => {
	const [query, setQuery] = useState('');
	const debouncedQuery = useDebounce(query, DEBOUNCED_DELAY);

	const { data, isSuccess } = useQuery({
		queryKey: ['search movies', debouncedQuery],
		queryFn: () => MovieService.getMovies(debouncedQuery),
		select: (movies) => {
			if ('error' in movies) {
				toastrError(movies, 'Поиск фильмов');
				return [];
			}

			return movies;
		},
		enabled: !!debouncedQuery,
	});

	const handleSearch = (query: string) => {
		setQuery(query);
	};

	return { data, isSuccess, query, handleSearch };
};

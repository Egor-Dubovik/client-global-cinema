import { useState } from 'react';
import { useQuery } from 'react-query';

import { MovieService } from '@/shared/api/movies';
import { DEBOUNCED_DELAY } from '@/shared/constants/numbers';
import { useDebounce } from '@/shared/hooks/useDebounce';

export const useSearch = () => {
	const [query, setQuery] = useState('');
	const debouncedQuery = useDebounce(query, DEBOUNCED_DELAY);

	const { data, isSuccess } = useQuery({
		queryKey: ['search movie list', debouncedQuery],
		queryFn: () => MovieService.getAll(debouncedQuery),
		enabled: !!debouncedQuery,
	});

	const handleSearch = (query: string) => {
		setQuery(query);
	};

	return { data, isSuccess, query, handleSearch };
};

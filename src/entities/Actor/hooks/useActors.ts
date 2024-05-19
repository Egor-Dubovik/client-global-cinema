import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { ITableItem } from '@/shared/UI/Table';
import { DEBOUNCED_DELAY } from '@/shared/constants/numbers';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { toastrError } from '@/shared/utils/error/toastrError';

import { ActorService } from '../api';

export const useActors = () => {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedQuery = useDebounce(searchTerm, DEBOUNCED_DELAY);

	const queryData = useQuery({
		queryKey: ['search actors list', debouncedQuery],
		queryFn: () => ActorService.getActors(debouncedQuery),
		select: (actors) => {
			if ('error' in actors) {
				toastrError(actors, 'Таблица актёров');
				return [];
			}

			return actors.map(
				(actor): ITableItem => ({
					_id: actor._id,
					editUrl: `actors/edit/${actor._id}`,
					items: [actor.name, String(actor.countMovies)],
				})
			);
		},
	});

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['deleted actor'],
		mutationFn: (userId: string) => ActorService.delete(userId),
		onError: (error) => {
			toastrError(error, 'Удаление актёра');
		},
		onSuccess: () => {
			toastr.success('Актёр удалён', 'удаление прошло успешно');
			queryData.refetch();
		},
	});

	const { mutateAsync: createAsync } = useMutation({
		mutationKey: ['create actor'],
		mutationFn: () => ActorService.create(),
		onError: (error) => {
			toastrError(error, 'Создание актёра');
		},
		onSuccess: ({ data: _id }) => {
			toastr.success('Актёра создан', 'создание прошло успешно');
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

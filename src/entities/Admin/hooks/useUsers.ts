import { useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { ITableItem } from '@/shared/UI/Table';
import { DEBOUNCED_DELAY } from '@/shared/constants/numbers';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { convertMongoDate } from '@/shared/utils/date/convertMongoDate';
import { toastrError } from '@/shared/utils/error/toastrError';

import { AdminService } from '../api';

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedQuery = useDebounce(searchTerm, DEBOUNCED_DELAY);

	const queryData = useQuery({
		queryKey: ['search users list', debouncedQuery],
		queryFn: () => AdminService.getAllUsers(debouncedQuery),
		select: ({ data }) =>
			data.map(
				(user): ITableItem => ({
					_id: user._id,
					editUrl: `users/edit/${user._id}`,
					items: [user.email, convertMongoDate(user.createdAt)],
				})
			),
		onError: (error) => {
			toastrError(error, 'User list');
		},
	});

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['deleted user'],
		mutationFn: (userId: string) => AdminService.deleteUser(userId),
		onError: (error) => {
			toastrError(error, 'Delete user');
		},
		onSuccess: () => {
			toastr.success('Юзер удалён', 'удаление прошло успешно');
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

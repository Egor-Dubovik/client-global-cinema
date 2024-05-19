'use client';

import { Table, TableActions } from '@/shared/UI/Table';

import { GENRE_TABLE_HEADERS } from '../../constants';
import { useGenres } from '../../hooks/useGenres';

export const GenresTable = () => {
	const { searchTerm, handleSearch, data, isLoading, createAsync, deleteAsync } = useGenres();

	return (
		<div>
			<TableActions
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				handleCreate={() => createAsync()}
			/>
			<Table
				headerItems={GENRE_TABLE_HEADERS}
				bodyItems={data || []}
				removeHandler={deleteAsync}
				isLoading={isLoading}
			/>
		</div>
	);
};

'use client';

import { Table, TableActions } from '@/shared/UI/Table';

import { MOVIE_TABLE_HEADERS } from '../../consts';
import { useMovies } from '../../hooks/useMovies';

export const MovieTable = () => {
	const { searchTerm, handleSearch, data, isLoading, createAsync, deleteAsync } = useMovies();

	return (
		<div>
			<TableActions
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				handleCreate={() => createAsync()}
			/>
			<Table
				headerItems={MOVIE_TABLE_HEADERS}
				bodyItems={data || []}
				removeHandler={deleteAsync}
				isLoading={isLoading}
			/>
		</div>
	);
};

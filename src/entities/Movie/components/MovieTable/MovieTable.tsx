'use client';

import Searcher from '@/shared/UI/Searcher';
import { Table } from '@/shared/UI/Table';

import { MOVIE_TABLE_HEADERS } from '../../consts';
import { useMovies } from '../../hooks/useMovies';

export const MovieTable = () => {
	const { searchTerm, handleSearch, data, isLoading, deleteAsync } = useMovies();

	return (
		<div>
			<Searcher
				className="mb-6 max-w-xs"
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				icon="MdSearch"
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

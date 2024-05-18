'use client';

import Searcher from '@/shared/UI/Searcher';
import { Table } from '@/shared/UI/Table';

import { GENRE_TABLE_HEADERS } from '../../constants';
import { useGenres } from '../../hooks/useGenres';

export const GenresTable = () => {
	const { searchTerm, handleSearch, data, isLoading, deleteAsync } = useGenres();

	return (
		<div>
			<Searcher
				className="mb-6 max-w-xs"
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				icon="MdSearch"
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

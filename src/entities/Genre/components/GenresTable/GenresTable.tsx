'use client';

import { Button } from '@/shared/UI/Button';
import Searcher from '@/shared/UI/Searcher';
import { Table } from '@/shared/UI/Table';

import { GENRE_TABLE_HEADERS } from '../../constants';
import { useGenres } from '../../hooks/useGenres';

export const GenresTable = () => {
	const { searchTerm, handleSearch, data, isLoading, createAsync, deleteAsync } = useGenres();

	return (
		<div>
			<div className={'flex justify-between'}>
				<Searcher
					className="mb-6 max-w-xs"
					searchTerm={searchTerm}
					handleSearch={handleSearch}
					icon="MdSearch"
				/>
				<Button className={'items-stretch'} onClick={() => createAsync()}>
					Создать
				</Button>
			</div>
			<Table
				headerItems={GENRE_TABLE_HEADERS}
				bodyItems={data || []}
				removeHandler={deleteAsync}
				isLoading={isLoading}
			/>
		</div>
	);
};

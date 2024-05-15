'use client';

import Searcher from '@/shared/UI/Searcher';
import { Table } from '@/shared/UI/Table';

import { ACTOR_TABLE_HEADERS } from '../../constants';
import { useActors } from '../../hooks/useActors';

export const ActorTable = () => {
	const { searchTerm, handleSearch, data, isLoading, deleteAsync } = useActors();
	return (
		<div>
			<Searcher
				className="mb-6 max-w-xs"
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				icon="MdSearch"
			/>
			<Table
				headerItems={ACTOR_TABLE_HEADERS}
				bodyItems={data || []}
				removeHandler={deleteAsync}
				isLoading={isLoading}
			/>
		</div>
	);
};

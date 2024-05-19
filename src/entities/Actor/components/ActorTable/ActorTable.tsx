'use client';

import { Table, TableActions } from '@/shared/UI/Table';

import { ACTOR_TABLE_HEADERS } from '../../constants';
import { useActors } from '../../hooks/useActors';

export const ActorTable = () => {
	const { searchTerm, handleSearch, data, isLoading, createAsync, deleteAsync } = useActors();

	return (
		<div>
			<TableActions
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				handleCreate={() => createAsync()}
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

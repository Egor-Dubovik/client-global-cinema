'use client';

import Searcher from '@/shared/UI/Searcher';
import { Table } from '@/shared/UI/Table';

import { USER_TABLE_HEADERS } from '../../constants';
import { useUsers } from '../../hooks/useUsers';

export const UsersTable = () => {
	const { searchTerm, handleSearch, data, isLoading, deleteAsync } = useUsers();
	return (
		<div>
			<Searcher
				className="mb-6 max-w-xs"
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				icon="MdSearch"
			/>
			<Table
				headerItems={USER_TABLE_HEADERS}
				bodyItems={data || []}
				removeHandler={deleteAsync}
				isLoading={isLoading}
			/>
		</div>
	);
};

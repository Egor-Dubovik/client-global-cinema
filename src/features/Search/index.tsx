'use client';

import { SearchField } from 'features/Search/components/SearchField/SearchField';
import { SearchList } from 'features/Search/components/SearchList/SearchList';
import { useSearch } from 'features/Search/useSearch';

import styles from './styles.module.scss';

export const Search = () => {
	const { data, isSuccess, query, handleSearch } = useSearch();

	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={query} handleSearch={handleSearch} icon="MdSearch" />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	);
};

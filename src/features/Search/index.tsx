'use client';

import { SearchField } from '@/features/Search/components/SearchField/SearchField';
import { SearchList } from '@/features/Search/components/SearchList/SearchList';
import { useSearch } from '@/features/Search/hooks/useSearch';

import useClickOutside from '@/shared/hooks/useClickOutside';

import styles from './styles.module.scss';

const Search = () => {
	const { data, isSuccess, query, handleSearch } = useSearch();
	const wrapperRef = useClickOutside<HTMLDivElement>(() => handleSearch(''));

	return (
		<div className={styles.wrapper} ref={wrapperRef}>
			<SearchField searchTerm={query} handleSearch={handleSearch} icon="MdSearch" />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	);
};

export default Search;

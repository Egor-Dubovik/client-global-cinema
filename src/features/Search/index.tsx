'use client';

import { useRef } from 'react';

import { SearchField } from '@/features/Search/components/SearchField/SearchField';
import { SearchList } from '@/features/Search/components/SearchList/SearchList';
import { useSearch } from '@/features/Search/useSearch';

import { useEventListener } from '@/shared/hooks/useEventListener';

import styles from './styles.module.scss';

export const Search = () => {
	const { data, isSuccess, query, handleSearch } = useSearch();
	const wrapperRef = useRef<HTMLDivElement | null>(null);

	const handleClickOutside = (event: Event) => {
		const element = wrapperRef.current;
		if (element && !element.contains(event.target as Node)) {
			handleSearch('');
		}
	};

	useEventListener(document, 'mousedown', handleClickOutside);

	return (
		<div className={styles.wrapper} ref={wrapperRef}>
			<SearchField searchTerm={query} handleSearch={handleSearch} icon="MdSearch" />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	);
};

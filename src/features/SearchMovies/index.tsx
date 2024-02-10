'use client';

import { useMovieSearch } from '@/features/SearchMovies/hooks/useMovieSearch';

import { MovieSearchList } from '@/entities/Movie';
import Searcher from '@/entities/Searcher';

import useClickOutside from '@/shared/hooks/useClickOutside';

import styles from './styles.module.scss';

const SearchMovies = () => {
	const { data, isSuccess, query, handleSearch } = useMovieSearch();
	const wrapperRef = useClickOutside<HTMLDivElement>(() => handleSearch(''));

	return (
		<div className={styles.wrapper} ref={wrapperRef}>
			<Searcher searchTerm={query} handleSearch={handleSearch} icon="MdSearch" />
			{isSuccess && <MovieSearchList movies={data || []} />}
		</div>
	);
};

export default SearchMovies;

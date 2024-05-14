'use client';

import cn from 'classnames';

import { useMovieSearch } from '@/features/SearchMovies/hooks/useMovieSearch';

import { MovieSearchList } from '@/entities/Movie';

import Searcher from '@/shared/UI/Searcher';
import useClickOutside from '@/shared/hooks/useClickOutside';

import styles from './styles.module.scss';

interface IProps {
	className?: string;
}

const SearchMovies = ({ className }: IProps) => {
	const { data, isSuccess, query, handleSearch } = useMovieSearch();
	const wrapperRef = useClickOutside<HTMLDivElement>(() => handleSearch(''));

	return (
		<div className={cn(styles.wrapper, className)} ref={wrapperRef}>
			<Searcher searchTerm={query} handleSearch={handleSearch} icon="MdSearch" />
			{isSuccess && <MovieSearchList movies={data || []} />}
		</div>
	);
};

export default SearchMovies;

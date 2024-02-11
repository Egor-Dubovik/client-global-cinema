import cn from 'classnames';

import SearchMovies from '@/features/SearchMovies';

import { PopularMoviesShortList } from '@/entities/Movie';
import { FavoriteMoviesShortList } from '@/entities/Movie/components/FavoriteMoviesShortList/FavoriteMoviesShortList';

import styles from './styles.module.scss';

const Sidebar = ({ className }: { className?: string }) => {
	return (
		<div className={cn(styles.sidebar, className)}>
			<SearchMovies className={styles.searcher} />
			<PopularMoviesShortList className={styles['movie-list']} />
			<FavoriteMoviesShortList className={styles['movie-list']} />
		</div>
	);
};

export default Sidebar;

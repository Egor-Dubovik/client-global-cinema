import { MovieService } from '@/entities/Movie/api';
import { IMovie } from '@/entities/Movie/model/types';

import { WithErrorBoundary } from '@/shared/hocs/WithErrorBoundary';

import { MoviesShortList } from '../MoviesShortList/MoviesShortList';

interface IProps {
	className?: string;
}

export const PopularMoviesShortList = async ({ className }: IProps) => {
	const movies = await MovieService.getMostPopularMovies();

	return (
		<WithErrorBoundary data={movies}>
			{movies && (
				<MoviesShortList
					className={className}
					movies={movies as IMovie[]}
					title="Популярные фильмы"
					link="/popular"
				/>
			)}
		</WithErrorBoundary>
	);
};

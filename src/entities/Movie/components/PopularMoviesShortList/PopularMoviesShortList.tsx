import { getMostPopularMovies } from '@/entities/Movie/api/getMostPopularMovies';
import { IMovie } from '@/entities/Movie/model/types';

import { WithErrorBoundary } from '@/shared/hocs/WithErrorBoundary';

import { MoviesShortList } from '../MoviesShortList/MoviesShortList';

interface IProps {
	className?: string;
}

export const PopularMoviesShortList = async ({ className }: IProps) => {
	const movies = await getMostPopularMovies();

	return (
		<WithErrorBoundary data={movies}>
			{movies && (
				<MoviesShortList
					className={className}
					movies={movies as IMovie[]}
					title="Popular Movies"
					link="/popular"
				/>
			)}
		</WithErrorBoundary>
	);
};

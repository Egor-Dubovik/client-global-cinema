import { getMostPopularMovies } from '@/entities/Movie/api/getMostPopularMovies';
import { MoviesShortList } from '@/entities/Movie/components/MoviesShortList/MoviesShortList';

interface IProps {
	className?: string;
}

export const PopularMoviesShortList = async ({ className }: IProps) => {
	const movies = await getMostPopularMovies();

	return <MoviesShortList className={className} title="Popular" link="Popular" movies={movies} />;
};

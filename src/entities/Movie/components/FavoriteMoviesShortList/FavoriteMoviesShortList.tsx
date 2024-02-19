import { IMovie } from '@/entities/Movie';
import { NOT_AUTH_FAVORITES } from '@/entities/Viewer';

import { MoviesShortList } from '../MoviesShortList/MoviesShortList';

interface IProps {
	className?: string;
}

export const FavoriteMoviesShortList = ({ className }: IProps) => {
	const isAuth = false;
	const movies = [] as IMovie[];

	return (
		<>
			{isAuth ? (
				<MoviesShortList
					className={className}
					title="/favorite"
					link="Favorite Movies"
					movies={movies}
				/>
			) : (
				<div className={className}>
					<p className="px-3 py-4 bg-gray-700 rounded-lg text-gray-300 leading-5 select-none">
						{NOT_AUTH_FAVORITES}
					</p>
				</div>
			)}
		</>
	);
};

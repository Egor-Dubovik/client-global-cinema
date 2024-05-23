import { getGenresList } from '@/entities/Genre';
import { MovieService } from '@/entities/Movie/api';
import { IMovie } from '@/entities/Movie/model/types';

import { Slider } from '@/shared/UI/Slider';
import { getMovieUrl } from '@/shared/config/api.config';
import { INIT_VALUE } from '@/shared/constants/numbers';
import { WithErrorBoundary } from '@/shared/hocs/WithErrorBoundary';

export const MovieSlider = async () => {
	const movies = await MovieService.getAll();

	return (
		<WithErrorBoundary data={movies}>
			{(movies as IMovie[]).length > INIT_VALUE && (
				<Slider
					buttonTitle="смотреть"
					slides={(movies as IMovie[]).slice(0, 5).map((movie) => ({
						_id: movie._id,
						bigPoster: movie.bigPoster,
						title: movie.title,
						subTitle: getGenresList(movie.genres),
						link: getMovieUrl(movie.slug),
					}))}
				/>
			)}
		</WithErrorBoundary>
	);
};

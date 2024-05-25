import { MovieService } from '@/entities/Movie/api';
import { mapMoviesToGalleryItems } from '@/entities/Movie/mappers/mapMoviesToGalleryItems';
import { IMovie } from '@/entities/Movie/model/types';

import { Gallery, IGalleryItem } from '@/shared/UI/Gallery';
import { INIT_VALUE } from '@/shared/constants/numbers';
import { WithErrorBoundary } from '@/shared/hocs/WithErrorBoundary';

export const TrendingMovieGallery = async () => {
	const movies: IGalleryItem[] = mapMoviesToGalleryItems(
		(await MovieService.getMostPopularMovies()) as IMovie[]
	);

	return (
		<WithErrorBoundary data={movies}>
			{movies.length > INIT_VALUE && <Gallery items={movies} variant="vertical" />}
		</WithErrorBoundary>
	);
};

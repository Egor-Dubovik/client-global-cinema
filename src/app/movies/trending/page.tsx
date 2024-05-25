import { IMovie, mapMoviesToGalleryItems } from '@/entities/Movie';
import { MovieService } from '@/entities/Movie/api';

import { Catalog } from '@/shared/UI/Catalog';
import { WithErrorBoundary } from '@/shared/hocs/WithErrorBoundary';

export default async function TrendingMoviesPage() {
	const movies = mapMoviesToGalleryItems(
		(await MovieService.getMostPopularMovies()) as IMovie[],
		'bigPoster',
		true
	);

	return (
		<section>
			<WithErrorBoundary data={movies}>
				<Catalog
					title="Новые фильмы"
					description="Новые фильмы в отличном качестве"
					items={movies || []}
				/>
			</WithErrorBoundary>
		</section>
	);
}

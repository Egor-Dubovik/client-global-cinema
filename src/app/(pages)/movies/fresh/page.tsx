import { IMovie, mapMoviesToGalleryItems } from '@/entities/Movie';
import { MovieService } from '@/entities/Movie/api';

import { Catalog } from '@/shared/UI/Catalog';
import { createMetadata } from '@/shared/config/seo/meta.config';
import { WithErrorBoundary } from '@/shared/hocs/WithErrorBoundary';

export const metadata = createMetadata({
	title: `Новые фильмы`,
	description: 'Новые фильмы в отличном качестве',
});

export default async function FreshMoviesPage() {
	const movies = mapMoviesToGalleryItems(
		(await MovieService.getAll()) as IMovie[],
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

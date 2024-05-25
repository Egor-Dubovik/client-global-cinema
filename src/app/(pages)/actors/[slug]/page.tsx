import { IActor } from '@/entities/Actor';
import { ActorService } from '@/entities/Actor/api';
import { IMovie, mapMoviesToGalleryItems } from '@/entities/Movie';
import { MovieService } from '@/entities/Movie/api';

import { Catalog } from '@/shared/UI/Catalog';
import { WithErrorBoundary } from '@/shared/hocs/WithErrorBoundary';

interface IProps {
	params: {
		slug: string;
	};
}

export default async function ActorPage({ params: { slug } }: IProps) {
	const actor = (await ActorService.getBySlug(String(slug))) as IActor;
	const movies = mapMoviesToGalleryItems(
		(await MovieService.getByActor(actor._id)) as IMovie[],
		'bigPoster',
		true
	);

	return (
		<section>
			<WithErrorBoundary data={actor}>
				<Catalog title={actor.name} description="Фильмы с участием актёра" items={movies || []} />
			</WithErrorBoundary>
		</section>
	);
}

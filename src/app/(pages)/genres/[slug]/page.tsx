import { GenreService, IGenre } from '@/entities/Genre';
import { IMovie, mapMoviesToGalleryItems } from '@/entities/Movie';
import { MovieService } from '@/entities/Movie/api';

import { Catalog } from '@/shared/UI/Catalog';
import { Text } from '@/shared/UI/Text';
import { INIT_VALUE } from '@/shared/constants/numbers';
import { WithErrorBoundary } from '@/shared/hocs/WithErrorBoundary';

interface IProps {
	params: {
		slug: string;
	};
}

export default async function GenreMoviesPage({ params: { slug } }: IProps) {
	const genre = (await GenreService.getBySlug(String(slug))) as IGenre;
	const movies = mapMoviesToGalleryItems(
		(await MovieService.getByGenreIds([genre._id])) as IMovie[],
		'bigPoster',
		true
	);

	return (
		<section>
			<WithErrorBoundary data={movies}>
				{movies.length > INIT_VALUE ? (
					<Catalog title={`Фильмы в жанре ${genre.name.toLowerCase()}`} items={movies || []} />
				) : (
					<Text> {`Фильмов с жанром ${genre.name.toLowerCase()} не было добавлено`}</Text>
				)}
			</WithErrorBoundary>
		</section>
	);
}

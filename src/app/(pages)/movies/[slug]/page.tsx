import { Metadata } from 'next';

import { VideoClientWrapper } from '@/app/(pages)/movies/[slug]/VideoClientWrapper';

import { IMovie, MovieCard, mapMoviesToGalleryItems } from '@/entities/Movie';
import { MovieService } from '@/entities/Movie/api';

import { Catalog } from '@/shared/UI/Catalog';
import { SERVER_URL } from '@/shared/config/api.config';
import { createMetadata } from '@/shared/config/seo/meta.config';
import { WithErrorBoundary } from '@/shared/hocs/WithErrorBoundary';

interface IProps {
	params: {
		slug: string;
	};
}

export const generateMetadata = async ({ params: { slug } }: IProps): Promise<Metadata> => {
	const movie = (await MovieService.getBySlug(slug)) as IMovie;

	return createMetadata({
		title: movie.title,
		description: `Смотреть ${movie.title}. ${movie.description}`,
		image: `${SERVER_URL}/${movie.bigPoster}`,
	});
};

const MoviePage = async ({ params: { slug } }: IProps) => {
	const movie = (await MovieService.getBySlug(slug)) as IMovie;

	const similarMovies = mapMoviesToGalleryItems(
		((await MovieService.getByGenreIds(movie.genres.map((genre) => genre._id))) as IMovie[]).filter(
			(m) => m._id !== movie._id
		)
	);

	return (
		<section>
			<WithErrorBoundary data={movie}>
				<MovieCard className="mb-10" movie={movie} />
				<VideoClientWrapper videoSrc={movie.videoUrl} />
				<Catalog items={similarMovies} title="Похожие фильмы" variant="vertical" />
			</WithErrorBoundary>
		</section>
	);
};

export default MoviePage;

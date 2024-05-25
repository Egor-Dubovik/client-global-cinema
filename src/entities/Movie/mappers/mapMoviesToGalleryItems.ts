import { IMovie } from '@/entities/Movie/model/types';

import { IGalleryItem } from '@/shared/UI/Gallery';
import { getMovieUrl } from '@/shared/config/api.config';

export const mapMoviesToGalleryItems = (
	movies: IMovie[],
	posterPath: 'poster' | 'bigPoster' = 'poster',
	withTitle: boolean = false
): IGalleryItem[] => {
	return movies.map((movie) => ({
		name: movie.title,
		posterPath: movie[posterPath],
		link: getMovieUrl(movie.slug),
		...(withTitle && {
			content: {
				title: movie.title,
			},
		}),
	}));
};

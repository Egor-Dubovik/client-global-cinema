import { IMovie } from '@/entities/Movie/model/types';

import { IGalleryItem } from '@/shared/UI/Gallery';
import { getMovieUrl } from '@/shared/config/api.config';

export const mapMoviesToGalleryItems = (movies: IMovie[]): IGalleryItem[] => {
	return movies.map((movie) => ({
		name: movie.title,
		posterPath: movie.poster,
		link: getMovieUrl(movie.slug),
	}));
};

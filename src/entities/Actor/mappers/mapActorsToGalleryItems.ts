import { IActor } from '@/entities/Actor/model/types';

import { IGalleryItem } from '@/shared/UI/Gallery';
import { getActorUrl } from '@/shared/config/api.config';
import { INIT_VALUE } from '@/shared/constants/numbers';

export const mapActorsToGalleryItems = (actors: IActor[]): IGalleryItem[] => {
	return actors.map((actor) => ({
		name: actor.name,
		posterPath: actor.photo[INIT_VALUE],
		link: getActorUrl(actor.slug),
		content: {
			title: actor.name,
			subTitle: `+${actor.countMovies} фильмов`,
		},
	}));
};

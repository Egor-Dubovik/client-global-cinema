import { IGenre } from '@/entities/Genre/model/types';

import { IMenuItem } from '@/shared/UI/Menu/types';
import { getGenreUrl } from '@/shared/config/api.config';

export const mapGenresToNavMenu = (genres: IGenre[]) => {
	return genres.map(
		(genre) =>
			({
				icon: genre.icon,
				link: getGenreUrl(genre.slug),
				title: genre.name,
			}) as IMenuItem
	);
};

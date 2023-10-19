import { MenuGroup, MenuItem } from '@/shared/UI/Menu';
import { IMenuItem } from '@/shared/UI/Menu/types/menu.interface';
import { getGenres } from '@/shared/api/genres';
import { getGenreUrl } from '@/shared/config/api.config';

export const GenresMenuGroup = async () => {
	const genres = (await getGenres())
		.map(
			(genre) =>
				({
					icon: genre.icon,
					link: getGenreUrl(genre.slug),
					title: genre.name,
				}) as IMenuItem
		)
		.splice(0, 4);

	return (
		<MenuGroup title={'Genres'}>
			{genres.map((genre) => (
				<MenuItem key={genre.link} item={genre} />
			))}
		</MenuGroup>
	);
};

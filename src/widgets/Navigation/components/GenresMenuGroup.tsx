import { MenuGroup, MenuItem } from '@/shared/UI/Menu';
import { IMenuItem } from '@/shared/UI/Menu/types';
import { Skeleton } from '@/shared/UI/Skeleton';
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
		<>
			{genres ? (
				<MenuGroup title={'Genres'}>
					{genres.map((genre) => (
						<MenuItem key={genre.link} item={genre} />
					))}
				</MenuGroup>
			) : (
				<div className="mx-11 mb-6">
					<Skeleton className="h-7 mt-6" count={5} />
				</div>
			)}
		</>
	);
};

import { GENRES_MENU_AMOUNT } from '@/features/Navigation/constants';

import { getGenres, mapGenresToNavMenu } from '@/entities/Genre';
import { Notifier } from '@/entities/Notifier';

import { MenuGroup, MenuItem } from '@/shared/UI/Menu';
import { Skeleton } from '@/shared/UI/Skeleton';
import { INIT_VALUE } from '@/shared/constants/numbers';

export const NavGenresMenu = async () => {
	const genres = await getGenres();
	if ('error' in genres) {
		return <Notifier type="warning" title="Warning" description={genres.error} />;
	}

	const genreItems = mapGenresToNavMenu(genres).splice(INIT_VALUE, GENRES_MENU_AMOUNT);

	return (
		<>
			{genreItems ? (
				<MenuGroup title={'Genres'}>
					{genreItems.map((genre) => (
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

import { getGenres, mapGenresToNavMenu } from '@/entities/Genre';

import { MenuGroup, MenuItem } from '@/shared/UI/Menu';
import { Skeleton } from '@/shared/UI/Skeleton';
import { INIT_VALUE } from '@/shared/constants/numbers';

export const NavGenresMenu = async () => {
	const genres = await getGenres();
	const genreItems = mapGenresToNavMenu(genres).splice(INIT_VALUE, 4);

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

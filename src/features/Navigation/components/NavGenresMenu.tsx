'use client';

import { useEffect } from 'react';

import { GENRES_MENU_AMOUNT } from '@/features/Navigation/constants';

import { getGenres, mapGenresToNavMenu } from '@/entities/Genre';

import { MenuGroup, MenuItem } from '@/shared/UI/Menu';
import { Skeleton } from '@/shared/UI/Skeleton';
import { INIT_VALUE } from '@/shared/constants/numbers';
import { IAxiosError } from '@/shared/types/axios.type';

export const NavGenresMenu = () => {
	let genreItems;

	const getT = async () => {
		try {
			const genres = await getGenres();
			genreItems = mapGenresToNavMenu(genres).splice(INIT_VALUE, GENRES_MENU_AMOUNT);
		} catch (e) {
			const err = e as IAxiosError;
			console.log(err);
			return <p>{`${err.cause} ${err.code} ${err.name} ${err.code}`}</p>;
		}
	};

	useEffect(() => {
		getT();
	}, []);

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

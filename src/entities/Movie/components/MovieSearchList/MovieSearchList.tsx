import Image from 'next/image';
import Link from 'next/link';

import { MOVIE_NOT_FOUND } from '@/entities/Movie/consts';
import { IMovie } from '@/entities/Movie/model/types';

import { List, ListItem } from '@/shared/UI/List';
import { getMovieUrl } from '@/shared/config/api.config';

import styles from './MovieSearchList.module.scss';

export const MovieSearchList = ({ movies }: { movies: IMovie[] }) => {
	return (
		<List className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<ListItem key={movie._id}>
						<Link href={getMovieUrl(movie.slug)}>
							<Image
								src={movie.poster}
								alt={movie.title}
								width={50}
								height={50}
								objectFit="cover"
								objectPosition="top"
								draggable={false}
							/>
							<span>{movie.title}</span>
						</Link>
					</ListItem>
				))
			) : (
				<ListItem>{MOVIE_NOT_FOUND}</ListItem>
			)}
		</List>
	);
};

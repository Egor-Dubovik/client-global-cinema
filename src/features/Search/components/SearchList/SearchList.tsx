import Image from 'next/image';
import Link from 'next/link';

import { IMovie } from '@/shared/api/movies/models';
import { getMovieUrl } from '@/shared/config/api.config';

import styles from './SearchList.module.scss';

export const SearchList = ({ movies }: { movies: IMovie[] }) => {
	return (
		<ul className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<li key={movie._id}>
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
					</li>
				))
			) : (
				<li>Movies not found</li>
			)}
		</ul>
	);
};

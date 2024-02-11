import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { IMovie } from '@/entities/Movie/model/types';

import { Heading } from '@/shared/UI/Heading';
import { ListItem } from '@/shared/UI/List';
import { Rating } from '@/shared/UI/Rating';
import { getGenreUrl, getMovieUrl } from '@/shared/config/api.config';
import { formatValueWithComma } from '@/shared/utils/formatValueWithComma';

import styles from './MovieShortListItem.module.scss';

interface IProps {
	className?: string;
	movie: IMovie;
}

export const MovieShortListItem = ({ movie, className }: IProps) => {
	return (
		<ListItem className={cn(styles.item, className)}>
			<Link href={getMovieUrl(movie.slug)}>
				<Image
					src={movie.poster}
					alt={movie.title}
					width={65}
					height={97}
					draggable={false}
					priority
				/>
			</Link>
			<div className={styles.info}>
				<div>
					<Heading className={styles.title} title={movie.title} variant="h3" />
					<div className={styles.genres}>
						{movie.genres.map((genre, index) => (
							<Link key={genre._id} href={getGenreUrl(genre.slug)}>
								{formatValueWithComma(index, movie.genres.length, genre.name)}
							</Link>
						))}
					</div>
				</div>
				<Rating rating={movie.rating.toFixed(1)} />
			</div>
		</ListItem>
	);
};

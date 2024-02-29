import cn from 'classnames';
import Link from 'next/link';

import { IMovieShortList } from '@/entities/Movie';

import { Button } from '@/shared/UI/Button';
import { Heading } from '@/shared/UI/Heading';
import { List } from '@/shared/UI/List';

import styles from './MoviesShortList.module.scss';
import { MovieShortListItem } from './components/MovieShortListItem/MovieShortListItem';

interface IProps extends IMovieShortList {
	className?: string;
}

export const MoviesShortList = ({ title, link, movies, className }: IProps) => {
	return (
		<div className={cn(styles.wrapper, className)}>
			<Heading className={styles.title} title={title} variant="h2" />
			<List className={styles.list}>
				{movies.map((movie) => (
					<MovieShortListItem key={movie._id} movie={movie} />
				))}
			</List>
			<Link href={link}>
				<Button className={styles.button}>See more</Button>
			</Link>
		</div>
	);
};

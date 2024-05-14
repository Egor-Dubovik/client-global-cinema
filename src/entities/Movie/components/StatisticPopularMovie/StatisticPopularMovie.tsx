'use client';

import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from 'react-query';

import { Heading } from '@/shared/UI/Heading';
import { Skeleton } from '@/shared/UI/Skeleton';
import { SubHeading } from '@/shared/UI/SubHeading';
import { getMovieUrl } from '@/shared/config/api.config';
import { INIT_VALUE } from '@/shared/constants/numbers';

import { MovieService } from '../../api';
import { IMovie } from '../../model/types';

import styles from './StatisticPopularMovie.module.scss';

interface IProps {
	className?: string;
}

export const StatisticPopularMovie = ({ className }: IProps) => {
	const { data: movie, isLoading } = useQuery(
		'statistic popular movie',
		() => MovieService.getMostPopularMovies(),
		{ select: (data) => (data as IMovie[])[INIT_VALUE] }
	);

	return !isLoading ? (
		<li className={cn(className, styles.popular)}>
			{movie && (
				<div>
					<SubHeading title="Самый популярный фильм" />
					<Heading variant="h3" title={`Открыли ${movie.countOpened} раз`} />
					<Link className={styles.imageLink} href={getMovieUrl(movie.slug)}>
						<Image
							src={movie.poster}
							alt={movie.title}
							className={styles.image}
							width={285}
							height={176}
							unoptimized
						/>
					</Link>
				</div>
			)}
		</li>
	) : (
		<Skeleton height={340} width={360} />
	);
};

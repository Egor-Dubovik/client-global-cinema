import cn from 'classnames';

import { IMovie } from '@/entities/Movie/model/types';

import { Banner } from '@/shared/UI/Banner';
import { ContentList } from '@/shared/UI/ContentList';
import { Heading } from '@/shared/UI/Heading';
import MaterialIcon from '@/shared/UI/MaterialIcon';
import { getActorUrl, getGenreUrl } from '@/shared/config/api.config';
import { INIT_VALUE } from '@/shared/constants/numbers';

import styles from './MovieCard.module.scss';

interface IProps {
	movie: IMovie;
	className?: string;
}

export const MovieCard = ({ movie, className }: IProps) => {
	return (
		<div className={cn(styles.test, className)}>
			<Banner src={movie.bigPoster} alt={movie.title}>
				<div className={styles.content}>
					<Heading title={movie.title} variant="h1" />
					<div className={styles.details}>
						<span>{movie.parameters?.year} · </span>
						<span>{movie.parameters?.country} · </span>
						<span>{movie.parameters?.duration} минут.</span>
					</div>
					<ContentList
						name="Жанры"
						links={movie.genres.slice(INIT_VALUE, 3).map((g) => ({
							_id: g._id,
							link: getGenreUrl(g.slug),
							title: g.name,
						}))}
					/>
					<ContentList
						name="Актёры"
						links={movie.actors.slice(INIT_VALUE, 3).map((a) => ({
							_id: a._id,
							link: getActorUrl(a.slug),
							title: a.name,
						}))}
					/>
					<div className={styles.rating}>
						<MaterialIcon name="MdStarRate" />
						<span>{movie.rating.toFixed(1)}</span>
					</div>

					{/* favorite button */}
				</div>
			</Banner>
		</div>
	);
};

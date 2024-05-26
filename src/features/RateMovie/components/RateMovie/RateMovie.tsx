'use client';

import { useRouter } from 'next/navigation';
import StarRating from 'react-star-rating-component';

import { useRateMovie } from '@/features/RateMovie/hooks/useRateMovie';

import { useAuth } from '@/entities/User';

import { Button } from '@/shared/UI/Button';
import { Heading } from '@/shared/UI/Heading';
import { getAuthUrl } from '@/shared/config/api.config';

import styles from './RateMovie.module.scss';

interface IProps {
	id: string;
}

export const MovieRating = ({ id }: IProps) => {
	const { replace } = useRouter();
	const { user } = useAuth();
	const { rating, isSend, handleRate } = useRateMovie(id);

	return (
		<div className={styles.wrapper}>
			<Heading title="На сколько вам понравился фильм?" variant="h3" />
			<p>Рейтинг улучшает рекомендации</p>
			{user ? (
				<>
					{isSend ? (
						<div className={styles.thanks}>Спасибо за вашу оценку!</div>
					) : (
						<StarRating
							name="star-rating"
							value={rating}
							onStarClick={handleRate}
							emptyStarColor={'#4f4f4f'}
						/>
					)}
				</>
			) : (
				<Button className={styles.btn} onClick={() => replace(getAuthUrl('/login'))}>
					авторизация
				</Button>
			)}
		</div>
	);
};

import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { MovieService } from '@/entities/Movie/api';

import { toastrError } from '@/shared/utils/error/toastrError';

export const useRateMovie = (movieId: string) => {
	const [rating, setRating] = useState(0);
	const [isSend, setIsSend] = useState(false);

	const { refetch } = useQuery({
		queryKey: ['rating', movieId],
		queryFn: () => MovieService.getByUserMovie(movieId),
		onSuccess: ({ data }) => setRating(data),
		onError: (error) => toastrError(error, 'Получение рейтинга'),
		enabled: !!movieId,
	});

	const { mutateAsync } = useMutation({
		mutationKey: 'set movie rating',
		mutationFn: (data: number) => MovieService.setRating(movieId, data),
		onSuccess: () => {
			toastr.success('Рейтинг отправлен', '');
			setIsSend(true);
			refetch();
			setTimeout(() => {
				setIsSend(false);
			}, 2500);
		},
		onError: (error) => toastrError(error, 'Отправлен рейтинга'),
	});

	const handleRate = async (data: number) => {
		setRating(data);
		await mutateAsync(data);
	};

	return { rating, isSend, handleRate };
};

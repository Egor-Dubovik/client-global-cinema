import { useParams, useRouter } from 'next/navigation';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { IMovieEditInput } from '@/entities/Movie';
import { MovieService } from '@/entities/Movie/api';

import { toastrError } from '@/shared/utils/error/toastrError';
import { getObjectKeys } from '@/shared/utils/object/getObjectKeys';

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
	const params = useParams();
	const { push } = useRouter();

	const genreId = String(params.id);

	const { isLoading } = useQuery({
		queryKey: ['movie', genreId],
		queryFn: () => MovieService.getById(genreId),
		onSuccess: ({ data }) => {
			getObjectKeys(data).forEach((key) => {
				setValue(key, data[key]);
			});
		},
		onError: (error) => {
			toastrError(error, 'Получение фильма');
		},
		enabled: !!params.id,
	});

	const { mutateAsync } = useMutation({
		mutationKey: 'update movies',
		mutationFn: (data: IMovieEditInput) => MovieService.update(genreId, data),
		onSuccess: () => {
			toastr.success('Фильм обновлён', 'обновление прошло успешно');
			push('/admin/statistic/movies');
		},
		onError: (error) => toastrError(error, 'Обновление фильма'),
	});

	const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading };
};

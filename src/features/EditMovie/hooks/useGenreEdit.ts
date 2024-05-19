import { useParams, useRouter } from 'next/navigation';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { GenreService, IGenreEditInput } from '@/entities/Genre';

import { toastrError } from '@/shared/utils/error/toastrError';
import { getObjectKeys } from '@/shared/utils/object/getObjectKeys';

export const useGenreEdit = (setValue: UseFormSetValue<IGenreEditInput>) => {
	const params = useParams();
	const { push } = useRouter();

	const genreId = String(params.id);

	const { isLoading } = useQuery({
		queryKey: ['genre', genreId],
		queryFn: () => GenreService.getById(genreId),
		onSuccess: ({ data }) => {
			getObjectKeys(data).forEach((key) => {
				setValue(key, data[key]);
			});
		},
		onError: (error) => {
			toastrError(error, 'Получение жанра');
		},
		enabled: !!params.id,
	});

	const { mutateAsync } = useMutation({
		mutationKey: 'updateGenre',
		mutationFn: (data: IGenreEditInput) => GenreService.update(genreId, data),
		onSuccess: () => {
			toastr.success('Жанр обновлён', 'обновление прошло успешно');
			push('/admin/genres');
		},
		onError: (error) => toastrError(error, 'Обновление жанра'),
	});

	const onSubmit: SubmitHandler<IGenreEditInput> = async (data) => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading };
};

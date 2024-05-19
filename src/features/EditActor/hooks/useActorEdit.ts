import { useParams, useRouter } from 'next/navigation';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { IActorEditInput } from '@/entities/Actor';
import { ActorService } from '@/entities/Actor/api';

import { toastrError } from '@/shared/utils/error/toastrError';
import { getObjectKeys } from '@/shared/utils/object/getObjectKeys';

export const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
	const params = useParams();
	const { push } = useRouter();

	const genreId = String(params.id);

	const { isLoading } = useQuery({
		queryKey: ['actor', genreId],
		queryFn: () => ActorService.getById(genreId),
		onSuccess: ({ data }) => {
			getObjectKeys(data).forEach((key) => {
				setValue(key, data[key]);
			});
		},
		onError: (error) => {
			toastrError(error, 'Получение актёров');
		},
		enabled: !!params.id,
	});

	const { mutateAsync } = useMutation({
		mutationKey: 'update actor',
		mutationFn: (data: IActorEditInput) => ActorService.update(genreId, data),
		onSuccess: () => {
			toastr.success('Актёр обновлён', 'обновление прошло успешно');
			push('/admin/actors');
		},
		onError: (error) => toastrError(error, 'Обновление актёра'),
	});

	const onSubmit: SubmitHandler<IActorEditInput> = async (data) => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading };
};

import { useParams, useRouter } from 'next/navigation';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { AdminService } from '@/entities/Admin/api';
import { IUserEditInput } from '@/entities/User';

import { toastrError } from '@/shared/utils/error/toastrError';

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
	const params = useParams();
	const { push } = useRouter();

	const userId = String(params.id);

	const { isLoading } = useQuery({
		queryKey: ['user', userId],
		queryFn: () => AdminService.getById(userId),
		onSuccess: ({ data }) => {
			setValue('email', data.email);
		},
		onError: (error) => {
			toastrError(error, 'Получение юзера');
		},
		enabled: !!params.id,
	});

	const { mutateAsync } = useMutation({
		mutationKey: 'update user',
		mutationFn: (data: IUserEditInput) => AdminService.update(userId, data),
		onSuccess: () => {
			toastr.success('Юзер обновлён', 'обновление прошло успешно');
			push('/admin/statistic/users');
		},
		onError: (error) => toastrError(error, 'Обновление юзера'),
	});

	const onSubmit: SubmitHandler<IUserEditInput> = async (data) => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading };
};

import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { IProfileInput } from '@/features/EditProfile/types';

import { UserService } from '@/entities/User/api/services/user';

import { toastrError } from '@/shared/utils/error/toastrError';

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
	const { isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => UserService.getUser(),
		onSuccess: ({ data }) => setValue('email', data.email),
		onError: (error) => {
			toastrError(error, 'Получение профиля');
		},
	});

	const { mutateAsync: updateAsync } = useMutation({
		mutationKey: ['update profile'],
		mutationFn: (data: IProfileInput) => UserService.updateProfile(data),
		onError: (error) => {
			toastrError(error, 'Обновление профиля');
		},
		onSuccess: () => {
			toastr.success('Профиль обновлён', 'обновление прошло успешно');
		},
	});

	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await updateAsync(data);
	};

	return { isLoading, onSubmit };
};

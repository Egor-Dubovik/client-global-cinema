import { ChangeEvent, useCallback, useState } from 'react';
import { useMutation } from 'react-query';

import { FileService } from '@/entities/File/api';
import { UPLOAD_TIMEOUT } from '@/entities/File/constsnts';
import { TypeUpload } from '@/entities/File/types';

import { INIT_VALUE } from '@/shared/constants/numbers';
import { toastrError } from '@/shared/utils/error/toastrError';

export const useUpload: TypeUpload = (onChange, folder) => {
	const [isLoading, setLoading] = useState(false);

	const { mutateAsync } = useMutation({
		mutationKey: 'upload file',
		mutationFn: (data: FormData) => FileService.upload(data, folder),
		onSuccess: ({ data }) => {
			onChange(data[INIT_VALUE].url);
		},
		onError: (error) => {
			toastrError(error, 'Загрузка файла');
		},
	});

	const uploadFile = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
		setLoading(true);

		const files = e.target.files;
		if (!files?.length) return;

		const formData = new FormData();
		formData.append('file', files[INIT_VALUE]);

		await mutateAsync(formData);

		setTimeout(() => {
			setLoading(false);
		}, UPLOAD_TIMEOUT);
	}, []);

	return { uploadFile, isLoading };
};

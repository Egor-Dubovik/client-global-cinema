import { IUploadParams } from '@/features/UploadFile/types';

import { $api } from '@/shared/api';

export const FileService = {
	async upload(file: FormData, folder?: string) {
		return $api.post<IUploadParams[]>('/files', file, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' },
		});
	},
};

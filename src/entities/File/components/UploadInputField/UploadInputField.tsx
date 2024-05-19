import { useUpload } from '@/entities/File/hooks/useUpload';

import { IUploadField, UploadField } from '@/shared/UI/form-elements/UploadField';

interface IProps extends IUploadField {
	folder?: string;
}

export const UploadInputField = ({
	value,
	onChange,
	placeholder,
	error,
	isNoImage,
	folder,
}: IProps) => {
	const { uploadFile, isLoading } = useUpload(onChange, folder);

	return (
		<UploadField
			value={value}
			onChange={uploadFile}
			placeholder={placeholder}
			error={error}
			isLoading={isLoading}
			isNoImage={isNoImage}
		/>
	);
};

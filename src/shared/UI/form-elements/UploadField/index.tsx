/* eslint-disable @typescript-eslint/no-explicit-any */
import cn from 'classnames';
import Image from 'next/image';
import { FieldError } from 'react-hook-form';

import { ErrorMessage } from '@/shared/UI/ErrorMessage';
import { Skeleton } from '@/shared/UI/Skeleton';

import styles from './styles.module.scss';

export interface IUploadField {
	value: string;
	onChange: (...event: any[]) => void;
	placeholder: string;
	error?: FieldError;
	style?: string;
	isNoImage?: boolean;
	isLoading?: boolean;
}

export const UploadField = ({
	value,
	onChange,
	placeholder,
	error,
	isNoImage,
	isLoading,
}: IUploadField) => {
	return (
		<div className={cn(styles.field, styles.uploadField)}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input
						type="file"
						// accept="image/*"
						onChange={onChange}
					/>
				</label>

				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<Skeleton count={1} className="w-full h-full" />
						) : (
							value && (
								<Image
									src={`${process.env.NEXT_PUBLIC_SERVER_URL}${value}`}
									alt="file photo"
									width={200}
									height={250}
									unoptimized
								/>
							)
						)}
					</div>
				)}
				{error && <ErrorMessage className={styles.error} message={error.message as string} />}
			</div>
		</div>
	);
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from 'react';

export type TypeUpload = (
	onChange: (...event: any[]) => void,
	folder?: string
) => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
	isLoading: boolean;
};

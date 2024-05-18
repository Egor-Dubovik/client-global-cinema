/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError, UseFormRegister } from 'react-hook-form';

import { Input } from '@/shared/UI/form-elements/Input';

import styles from './SlugInputField.module.scss';

interface IProps {
	error?: FieldError;
	register: UseFormRegister<any>;
	generate: () => void;
}

export const SlugInputField = ({ register, generate, error }: IProps) => {
	return (
		<div className={styles.field}>
			<Input
				{...register('slug', { required: 'Требуется слаг' })}
				placeholder="Слаг"
				error={error}
			/>
			<button type="button" className={styles.badge} onClick={generate}>
				генерировать
			</button>
		</div>
	);
};

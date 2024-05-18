import cn from 'classnames';
import { InputHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import { ErrorMessage } from '@/shared/UI/ErrorMessage';

import styles from './styles.module.scss';

export type TypeInput = string | number | readonly string[] | undefined;
export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> & {
	error?: FieldError | undefined;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, type = 'text', placeholder, style, disabled, error, ...other }, ref) => {
		return (
			<div className={cn(styles.field, className)}>
				<div className={cn(styles.common, { [styles._error]: error })} style={style}>
					<label>
						<span>{placeholder}</span>
						<input
							ref={ref}
							className={cn(className, styles.input, {
								[styles.input_disabled]: disabled,
							})}
							disabled={disabled}
							type={type}
							{...other}
						/>
					</label>
				</div>
				{error && <ErrorMessage className={styles.error} message={error.message as string} />}
			</div>
		);
	}
);

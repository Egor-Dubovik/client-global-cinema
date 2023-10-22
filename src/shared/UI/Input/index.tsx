import cn from 'classnames';
import { InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';

export type TypeInput = string | number | readonly string[] | undefined;
export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> & {
	value: TypeInput;
	onChange: (value: TypeInput) => void;
};

export const Input = (props: InputProps) => {
	const { className, value, onChange, type = 'text', disabled, ...other } = props;
	return (
		<input
			className={cn(className, styles.input, {
				[styles.input_disabled]: disabled,
			})}
			disabled={disabled}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			type={type}
			{...other}
		/>
	);
};

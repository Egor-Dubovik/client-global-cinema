import cn from 'classnames';
import { ButtonHTMLAttributes } from 'react';

import { Loader, LoaderSize } from '@/shared/UI/Loader';

import styles from './styles.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: React.ReactNode;
	isLoading?: boolean;
	round?: boolean;
}

export const Button = (props: IButtonProps) => {
	const { isLoading, className, children, disabled, round, ...other } = props;

	return (
		<button
			className={cn(className, styles.button, {
				[styles.round]: round,
			})}
			disabled={disabled || isLoading}
			{...other}
		>
			{isLoading && <Loader className={styles.loader} isLoading={isLoading} size={LoaderSize.S} />}
			{children}
		</button>
	);
};

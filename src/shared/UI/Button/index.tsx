import cn from 'classnames';

import { Loader, LoaderSize } from '@/shared/UI/Loader';

import styles from './styles.module.scss';

interface IButtonProps {
	className?: string;
	children: React.ReactNode;
	isLoading?: boolean;
	disabled?: boolean;
	[key: string]: unknown;
}

export const Button = (props: IButtonProps) => {
	const { isLoading, className, children, disabled, ...other } = props;

	return (
		<button
			className={cn(className, styles.button, {
				[styles.button_disabled]: isLoading || disabled,
			})}
			disabled={disabled || isLoading}
			{...other}
		>
			{isLoading && <Loader className={styles.loader} isLoading={isLoading} size={LoaderSize.S} />}
			{children}
		</button>
	);
};

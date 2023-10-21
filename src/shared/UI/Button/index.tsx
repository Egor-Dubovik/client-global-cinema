import cn from 'classnames';

import { Loader, LoaderSize } from '@/shared/UI/Loader';

import styles from './styles.module.scss';

interface IButtonProps {
	className?: string;
	children: React.ReactNode;
	isLoading?: boolean;
	isDisabled?: boolean;
	[key: string]: unknown;
}

export const Button = (props: IButtonProps) => {
	const { isLoading, className, children, isDisabled, ...other } = props;

	return (
		<button
			className={cn(className, styles.button, {
				[styles.button_disabled]: isLoading || isDisabled,
			})}
			disabled={isDisabled || isLoading}
			{...other}
		>
			{isLoading && <Loader className={styles.loader} isLoading={isLoading} size={LoaderSize.S} />}
			{children}
		</button>
	);
};

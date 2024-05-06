import cn from 'classnames';

import styles from './styles.module.scss';

export enum LoaderSize {
	S = 'S',
	M = 'M',
	L = 'L',
}

interface ILoaderProps {
	isLoading?: boolean;
	size?: LoaderSize;
	className?: string;
}

export const Loader = ({ className, isLoading = true, size = LoaderSize.M }: ILoaderProps) => {
	return isLoading ? (
		<div className={cn(styles.wrapper, className)}>
			<div
				className={cn(styles.loader, {
					[styles._small]: size === LoaderSize.S,
					[styles._medium]: size === LoaderSize.M,
					[styles._large]: size === LoaderSize.L,
				})}
			/>
		</div>
	) : null;
};

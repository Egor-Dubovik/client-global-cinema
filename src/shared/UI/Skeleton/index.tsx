import cn from 'classnames';
import SkeletonLoader, { SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Skeleton = ({ className, ...rest }: SkeletonProps) => {
	return (
		<SkeletonLoader
			{...rest}
			baseColor="#1f2125"
			highlightColor="#292a2e"
			className={cn('rounded-lg', className)}
		/>
	);
};

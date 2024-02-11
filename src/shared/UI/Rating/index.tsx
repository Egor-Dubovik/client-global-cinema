import cn from 'classnames';

import MaterialIcon from '@/shared/UI/MaterialIcon';

import styles from './styles.module.scss';

interface IProps {
	className?: string;
	rating: string;
}

export const Rating = ({ className, rating }: IProps) => {
	return (
		<div className={cn(styles.rating, className)}>
			<MaterialIcon name="MdStarRate" />
			<span>{rating}</span>
		</div>
	);
};

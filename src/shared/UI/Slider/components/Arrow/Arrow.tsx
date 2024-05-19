import cn from 'classnames';

import MaterialIcon from '@/shared/UI/MaterialIcon';

import styles from './Arrow.module.scss';

interface IProps {
	variant: 'left' | 'right';
	clickHandler: () => void;
}

export const SlideArrow = ({ variant, clickHandler }: IProps) => {
	const isLeft = variant === 'left';

	return (
		<button
			onClick={clickHandler}
			className={cn(styles.arrow, {
				[styles.left]: isLeft,
				[styles.right]: !isLeft,
			})}
		>
			<MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
		</button>
	);
};

import cn from 'classnames';

import styles from './styles.module.scss';

export type TypeHeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface IHeadingProps {
	title: string;
	className?: string;
	variant?: TypeHeading;
}

export const Heading = ({ title, className, variant = 'h2' }: IHeadingProps) => {
	const HeadingTag = variant;
	return <HeadingTag className={cn(styles.heading, className)}>{title}</HeadingTag>;
};

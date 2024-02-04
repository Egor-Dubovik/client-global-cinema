import cn from 'classnames';

interface IProps {
	children: React.ReactNode;
	className?: string;
	[key: string]: unknown;
}

export const List = ({ children, className, ...other }: IProps) => {
	return (
		<ul className={cn('flex flex-col', className)} {...other}>
			{children}
		</ul>
	);
};

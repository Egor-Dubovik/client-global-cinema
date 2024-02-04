import cn from 'classnames';

interface IProps {
	children: React.ReactNode;
	className?: string;
	[key: string]: unknown;
}

export const ListItem = ({ children, className, ...other }: IProps) => {
	return (
		<li className={cn('flex flex-col', className)} {...other}>
			{children}
		</li>
	);
};

interface IProps {
	children: React.ReactNode;
	className?: string;
	[key: string]: unknown;
}

export const ListItem = ({ children, className, ...other }: IProps) => {
	return (
		<li className={className} {...other}>
			{children}
		</li>
	);
};

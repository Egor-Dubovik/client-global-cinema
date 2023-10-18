interface IMenu {
	children: React.ReactNode;
	className?: string;
	title?: string;
}

export const Menu = ({ className, title, children }: IMenu) => {
	return (
		<div className={className}>
			<h2>{title}</h2>
			<div>{children}</div>
		</div>
	);
};

interface IProps {
	items: string[];
	className?: string;
}

export const TableHeader = ({ className, items }: IProps) => {
	return (
		<div className={className}>
			{items.map((item) => (
				<div key={item}>{item}</div>
			))}
			<div>Действия</div>
		</div>
	);
};

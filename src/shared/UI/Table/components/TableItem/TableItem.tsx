import { ITableItem } from '../../types';
import { TableItemActions } from '../TableItemActions/TableItemActions';

interface IProps {
	className?: string;
	tableItem: ITableItem;
	removeHandler: () => void;
}

export const TableItem = ({ className, tableItem, removeHandler }: IProps) => {
	return (
		<div className={className}>
			{tableItem.items.map((item) => (
				<div key={item}>{item}</div>
			))}
			<TableItemActions editUrl={tableItem.editUrl} removeHandler={removeHandler} />
		</div>
	);
};

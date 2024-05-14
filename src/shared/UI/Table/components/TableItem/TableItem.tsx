import { ITableItem } from '../../types';
import { TableActions } from '../TableActions/TableActions';

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
			<TableActions editUrl={tableItem.editUrl} removeHandler={removeHandler} />
		</div>
	);
};

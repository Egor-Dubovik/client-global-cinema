import { ITableItem } from '@/shared/UI/Table';

export interface IAdminTableItem {
	item: ITableItem;
	removeHandler: (id: string) => void;
}

import cn from 'classnames';

import { Skeleton } from '@/shared/UI/Skeleton';
import { TableHeader } from '@/shared/UI/Table/components/TableHeader/TableHeader';
import { TableItem } from '@/shared/UI/Table/components/TableItem/TableItem';
import { ITableItem } from '@/shared/UI/Table/types';
import { Text } from '@/shared/UI/Text';
import { INIT_VALUE } from '@/shared/constants/numbers';

import styles from './Table.module.scss';

interface IProps {
	bodyItems: ITableItem[];
	headerItems: string[];
	isLoading: boolean;
	removeHandler: (id: string) => void;
}

export const Table = ({ headerItems, bodyItems, isLoading, removeHandler }: IProps) => {
	return (
		<div>
			<TableHeader className={cn(styles.item, styles.itemHeader)} items={headerItems} />
			{!isLoading ? (
				bodyItems.length > INIT_VALUE ? (
					bodyItems.map((item) => (
						<TableItem
							key={item._id}
							className={styles.item}
							tableItem={item}
							removeHandler={() => removeHandler(item._id)}
						/>
					))
				) : (
					<Text className={styles.notFound}>Здесь пусто</Text>
				)
			) : (
				<Skeleton className="mt-4" height={48} />
			)}
		</div>
	);
};

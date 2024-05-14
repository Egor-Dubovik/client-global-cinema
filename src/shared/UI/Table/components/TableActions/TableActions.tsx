import { useRouter } from 'next/navigation';

import MaterialIcon from '@/shared/UI/MaterialIcon';

import styles from './TableActions.module.scss';

interface IProps {
	editUrl: string;
	removeHandler: () => void;
}

export const TableActions = ({ editUrl, removeHandler }: IProps) => {
	const { push } = useRouter();

	return (
		<div className={styles.actions}>
			<button onClick={() => push(editUrl)}>
				<MaterialIcon name="MdEdit" />
			</button>
			<button onClick={removeHandler}>
				<MaterialIcon name="MdClose" />
			</button>
		</div>
	);
};

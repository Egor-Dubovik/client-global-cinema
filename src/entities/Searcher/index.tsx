import MaterialIcon from '@/shared/UI/MaterialIcon';
import { TypeMaterialIcon } from '@/shared/types/icon.type';

import styles from './styles.module.scss';

interface ISearchFieldProps {
	searchTerm: string;
	handleSearch: (value: string) => void;
	icon?: TypeMaterialIcon;
}

const Searcher = ({ searchTerm, handleSearch, icon }: ISearchFieldProps) => {
	return (
		<div className={styles.wrapper}>
			{icon && <MaterialIcon name={icon} />}
			<input
				value={searchTerm}
				onChange={(event) => handleSearch(event.target.value)}
				placeholder="Search"
			/>
		</div>
	);
};

export default Searcher;

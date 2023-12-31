import { Input, TypeInput } from '@/shared/UI/Input';
import MaterialIcon from '@/shared/UI/MaterialIcon';
import { TypeMaterialIcon } from '@/shared/types/icon.type';

import styles from './SearchField.module.scss';

interface ISearchFieldProps {
	searchTerm: string;
	handleSearch: (value: string) => void;
	icon?: TypeMaterialIcon;
}

export const SearchField = ({ searchTerm, handleSearch, icon }: ISearchFieldProps) => {
	return (
		<div className={styles.wrapper}>
			{icon && <MaterialIcon name={icon} />}
			<Input
				value={searchTerm}
				onChange={handleSearch as (value: TypeInput) => void}
				placeholder="Search"
			/>
		</div>
	);
};

import cn from 'classnames';

import MaterialIcon from '@/shared/UI/MaterialIcon';
import { TypeMaterialIcon } from '@/shared/types/icon.type';

import styles from './styles.module.scss';

interface ISearchFieldProps {
	searchTerm: string;
	handleSearch: (value: string) => void;
	icon?: TypeMaterialIcon;
	className?: string;
	placeholder?: string;
}

const Searcher = ({
	searchTerm,
	handleSearch,
	icon,
	className,
	placeholder,
}: ISearchFieldProps) => {
	return (
		<div className={cn(styles.wrapper, className)}>
			{icon && <MaterialIcon name={icon} />}
			<input
				value={searchTerm}
				onChange={(event) => handleSearch(event.target.value)}
				placeholder={placeholder || 'Поиск'}
			/>
		</div>
	);
};

export default Searcher;

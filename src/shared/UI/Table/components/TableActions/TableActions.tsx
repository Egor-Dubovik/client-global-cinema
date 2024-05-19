import cn from 'classnames';

import { Button } from '@/shared/UI/Button';
import Searcher from '@/shared/UI/Searcher';

interface IProps {
	searchTerm: string;
	handleSearch: (value: string) => void;
	handleCreate: () => void;
	className?: string;
}

export const TableActions = ({ searchTerm, handleCreate, handleSearch, className }: IProps) => {
	return (
		<div className={cn('flex justify-between gap-10 mb-6', className)}>
			<Searcher
				className="max-w-xs"
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				icon="MdSearch"
			/>
			<Button className={'rounded-full'} onClick={handleCreate}>
				Создать
			</Button>
		</div>
	);
};

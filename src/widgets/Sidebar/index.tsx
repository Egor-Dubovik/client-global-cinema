import cn from 'classnames';

import SearchMovies from '@/features/SearchMovies';

import styles from './styles.module.scss';

const Sidebar = ({ className }: { className?: string }) => {
	return (
		<div className={cn(styles.sidebar, className)}>
			<SearchMovies />
			{/* popular movies block */}
		</div>
	);
};

export default Sidebar;

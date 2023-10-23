import cn from 'classnames';

import Search from '@/features/Search';

import styles from './styles.module.scss';

const Sidebar = ({ className }: { className?: string }) => {
	return (
		<div className={cn(styles.sidebar, className)}>
			<Search />
			{/* popular movies block */}
		</div>
	);
};

export default Sidebar;

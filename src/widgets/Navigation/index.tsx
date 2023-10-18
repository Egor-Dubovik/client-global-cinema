import cn from 'classnames';

import NavMenu from '@/widgets/Navigation/components/NavMenu/NavMenu';

import Logo from '@/shared/UI/Logo';

import styles from './styles.module.scss';

export const Navigation = ({ className }: { className?: string }) => {
	return (
		<div className={cn(className, styles.navigation)}>
			<Logo className={styles.logo} />
			<NavMenu />
		</div>
	);
};

import cn from 'classnames';
import { useRouter } from 'next/navigation';

import { Button } from '@/shared/UI/Button';
import { getAuthUrl } from '@/shared/config/api.config';

import styles from './AuthPlayerPlaceholder.module.scss';

export const AuthPlayerPlaceholder = ({ className }: { className?: string }) => {
	const { replace } = useRouter();
	return (
		<div className={cn(styles.placeholder, className)}>
			<div>
				<p>Вы должны быть авторизованы, чтобы начать смотреть фильм</p>
				<Button className={styles.btn} onClick={() => replace(getAuthUrl('/login'))}>
					авторизация
				</Button>
			</div>
		</div>
	);
};

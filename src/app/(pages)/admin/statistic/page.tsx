import { UsersCounter } from '@/entities/Admin';
import { StatisticPopularMovie } from '@/entities/Movie';

import { createMetadata } from '@/shared/config/seo/meta.config';

import styles from './styles.module.scss';

export const metadata = createMetadata({
	title: 'Админ панель',
});

const AdminPanel = () => {
	return (
		<section>
			<ul className={styles.statistic}>
				<UsersCounter className={styles.block} />
				<StatisticPopularMovie className={styles.block} />
			</ul>
		</section>
	);
};

export default AdminPanel;

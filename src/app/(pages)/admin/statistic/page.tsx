import { UsersCounter } from '@/entities/Admin';
import { StatisticPopularMovie } from '@/entities/Movie';

import { Heading } from '@/shared/UI/Heading';
import { createMetadata } from '@/shared/config/seo/meta.config';

import styles from './styles.module.scss';

export const metadata = createMetadata({
	title: 'Админ панель',
});

const AdminPanel = () => {
	return (
		<section>
			<Heading title="Статистика" />
			<ul className={styles.statistic}>
				<UsersCounter className={styles.block} />
				<StatisticPopularMovie className={styles.block} />
			</ul>
		</section>
	);
};

export default AdminPanel;

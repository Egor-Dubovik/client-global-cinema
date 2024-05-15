import { GenresTable } from '@/entities/Genre';

import { Heading } from '@/shared/UI/Heading';

const AdminGenresPanel = () => {
	return (
		<section>
			<Heading className="mb-8" title="Таблица жанров" />
			<GenresTable />
		</section>
	);
};

export default AdminGenresPanel;

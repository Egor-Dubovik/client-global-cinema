import { MovieTable } from '@/entities/Movie';

import { Heading } from '@/shared/UI/Heading';

const AdminMoviesPage = () => {
	return (
		<section>
			<Heading className="mb-8" title="Таблица фильмов" />
			<MovieTable />
		</section>
	);
};

export default AdminMoviesPage;

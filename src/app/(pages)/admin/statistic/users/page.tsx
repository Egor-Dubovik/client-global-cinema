import { UsersTable } from '@/entities/Admin';

import { Heading } from '@/shared/UI/Heading';

const AdminMoviesPage = () => {
	return (
		<section>
			<Heading className="mb-8" title="Пользователи" />
			<UsersTable />
		</section>
	);
};

export default AdminMoviesPage;

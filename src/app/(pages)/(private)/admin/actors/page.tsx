import { ActorTable } from '@/entities/Actor';

import { Heading } from '@/shared/UI/Heading';

const AdminActorsPanel = () => {
	return (
		<section>
			<Heading className="mb-8" title="Таблица жанров" />
			<ActorTable />
		</section>
	);
};

export default AdminActorsPanel;

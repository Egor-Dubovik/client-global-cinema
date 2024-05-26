import { ActorEditForm } from '@/features/EditActor';

import { Heading } from '@/shared/UI/Heading';
import { createMetadata } from '@/shared/config/seo/meta.config';

export const metadata = createMetadata({
	title: 'Редактирование актёров',
});

const ActorEditPage = () => {
	return (
		<section>
			<Heading title="Редактирование актёра" className="text-gray-3 00 mb-8" variant="h1" />
			<ActorEditForm />
		</section>
	);
};

export default ActorEditPage;

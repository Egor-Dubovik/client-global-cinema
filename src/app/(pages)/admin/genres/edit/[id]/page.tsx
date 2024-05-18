import { GenreEditForm } from '@/features/EditGenre';

import { Heading } from '@/shared/UI/Heading';
import { createMetadata } from '@/shared/config/seo/meta.config';

export const metadata = createMetadata({
	title: 'Редактирование жанра',
});

const GenreEditPage = () => {
	return (
		<section>
			<Heading title="Редактирование жанра" className="text-gray-3 00 mb-8" variant="h1" />
			<GenreEditForm />
		</section>
	);
};

export default GenreEditPage;

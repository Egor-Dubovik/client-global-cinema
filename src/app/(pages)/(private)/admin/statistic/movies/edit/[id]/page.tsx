import { MovieEditForm } from '@/features/EditMovie';

import { Heading } from '@/shared/UI/Heading';
import { createMetadata } from '@/shared/config/seo/meta.config';

export const metadata = createMetadata({
	title: 'Редактирование фильмов',
});

const MovieEditPage = () => {
	return (
		<section>
			<Heading title="Редактирование фильмов" className="text-gray-3 00 mb-8" variant="h1" />
			<MovieEditForm />
		</section>
	);
};

export default MovieEditPage;

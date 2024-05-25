import { ActorsGallery } from '@/entities/Actor';
import { MovieSlider, TrendingMovieGallery } from '@/entities/Movie';

import { Heading } from '@/shared/UI/Heading';
import { createMetadata } from '@/shared/config/seo/meta.config';

export const metadata = createMetadata({
	title: `Главная`,
	description: 'Смотрите фильмы онлайн в браузере',
});

export default function Home() {
	return (
		<section>
			<Heading title="Смотри фильмы онлайн" className="text-gray-3 mb-8" variant="h1" />
			<MovieSlider />
			<div>
				<Heading title="Сейчас в тренде" className="mt-10 mb-5" variant="h2" />
				<TrendingMovieGallery />
			</div>
			<div>
				<Heading title="Лучшие актёры" className="mt-10 mb-5" variant="h2" />
				<ActorsGallery />
			</div>
		</section>
	);
}

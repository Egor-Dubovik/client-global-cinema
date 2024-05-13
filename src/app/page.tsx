import { Heading } from '@/shared/UI/Heading';
import { createMetadata } from '@/shared/config/seo/meta.config';

export const metadata = createMetadata({
	title: `Home`,
	description: 'Смотрите фильмы онлайн в браузере',
});

export default function Home() {
	return (
		<main>
			<Heading title="Смотри фильмы онлайн" className="text-gray-3 00 mb-8" variant="h1" />
		</main>
	);
}

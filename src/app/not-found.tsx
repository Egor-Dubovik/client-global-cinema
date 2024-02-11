'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/shared/UI/Button';
import { Heading } from '@/shared/UI/Heading';
import { createMetadata } from '@/shared/config/seo/meta.config';

export const metadata = createMetadata({
	title: 'Page not found',
});

export default function NotFound() {
	const router = useRouter();

	return (
		<main>
			<Heading title="Watch movies online" className="text-gray-500 mb-8" variant="h1" />
			<p className="mb-4">Could not find requested resource</p>
			<Button onClick={() => router.back()}>go back</Button>
		</main>
	);
}

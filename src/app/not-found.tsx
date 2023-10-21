'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/shared/UI/Button';
import { Heading } from '@/shared/UI/Heading';

export default function NotFound() {
	const router = useRouter();

	return (
		<main>
			<Heading title="Watch movies online" className="text-gray-500 mb-8" variant="h1" />
			<p>Could not find requested resource</p>
			<Button onClick={() => router.back()}>go back</Button>
		</main>
	);
}
